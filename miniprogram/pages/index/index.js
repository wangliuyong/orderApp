//index.js
//获取应用实例
import Graphql from '../../utils/graphql'
import User from '../../graphql/user'
import Store from '../../graphql/store'
var util = require('../../utils/util')

let {querys,mutations}=Graphql
let {createUser,getUser}=User
let {getStore}=Store
let {unduplicated}=util

var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
      colors:['red','orange','yellow','green','purple'],
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      // nav 初始化
      navTopItems:[],
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
      curIndex: 0,
      allStore:[],
      stores:[]
  },
   
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
    this.dealStoreData()
  },
  onShow(){
    let data={recommended:1}
    this.getStores(data).then((e)=>{
      console.log(e.data.storebyprops)
      this.setData({
        stores:e.data.storebyprops
      })
    })
  },
  dealStoreData(){
    let data={},that=this
    this.getStores(data).then((e)=>{
      console.log('getStores',e.data.storebyprops)
      that.setData({
        allStore:e.data.storebyprops
      })
      let arr=e.data.storebyprops.map((item)=>{
        return item.class
      })
      arr=unduplicated(arr)
      arr=arr.map((item,index)=>{
        if(item=='理发'){
          return {
            id:index,
            icon:"https://wly-1254337200.cos.ap-guangzhou.myqcloud.com/nav_icon_02.png",
            title:"理发"
          }
        }else if(item=='餐厅'){
          return {
            id:index,
            icon:"https://wly-1254337200.cos.ap-guangzhou.myqcloud.com/nav_icon_03.png",
            title:"餐厅"
          }
        }else{
          return {
            id:index,
            icon:"https://wly-1254337200.cos.ap-guangzhou.myqcloud.com/nav_icon_04.png",
            title:"影院"
          }
        }
      })
      that.setData({
        navTopItems:[
          {
            id:1,
            icon:"https://wly-1254337200.cos.ap-guangzhou.myqcloud.com/nav_icon_01.png",
            title:"推荐"
          },
          ...arr]
      })
      console.log(this.data.navTopItems)
    })
    
  },
  getStores(data){
    let query=getStore;
    return querys({data,query}).then((e)=>{
      return e
    })
  },

  //标签切换
  switchTab: function(e) {
      let class1 = e.currentTarget.dataset.class,
          index=e.currentTarget.dataset.index
      if(index==0){
        let data={recommended:1}
        this.getStores(data).then((e)=>{
          console.log(e.data.storebyprops)
          this.setData({
            stores:e.data.storebyprops
          })
        })
      }else{
        console.log(class1)
        let data={class:class1}
        this.getStores(data).then((e)=>{
          console.log(e)
          this.setData({
            stores:e.data.storebyprops
          })
        })
      }
  },
  // 跳转至详情页
  navigateDetail: function(e){

    console.log(e)
    wx.navigateTo({
      //url:'/pages/detail/detail?artype=' + e.currentTarget.dataset.artype
    })

  },
  // 加载更多
  loadMore: function (e) {
    console.log('加载更多')
    var curid = this.data.curIndex

    if (this.data.navSectionItems[curid].length === 0) return
    
    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    }) 
  }
})
