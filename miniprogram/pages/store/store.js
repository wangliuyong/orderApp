//index.js
import Graphql from '../../utils/graphql'
import Service from '../../graphql/service'
import Store from '../../graphql/store'

let {querys,mutations}=Graphql
let {getService,getServiceById}=Service
let {getStore, getStoreById}=Store
//获取应用实例
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
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
      curIndex: 0,
      option:{},
      store:{},
      serviceList:[],
      serviceLists:[],
      navList:[]
  },
   
  onLoad(option){
    this.setData({option})
    console.log(option)
    this.dealStore()
    this.dealService()
  },
  //标签切换
  switchTab(e) {
      console.log(e.currentTarget.dataset.name) 
      let class1=e.currentTarget.dataset.name
      if(class1=='推荐'){
        let serviceLists=this.data.serviceLists.filter((item)=>{
          console.log(item.class)
          return item.recommended==1
        })

        console.log(serviceLists)
        this.setData({serviceList:serviceLists})
      }else{
        let serviceLists=this.data.serviceLists.filter((item)=>{
          console.log(item.class)
          return item.class==class1
        })
  
        console.log(serviceLists)
        this.setData({serviceList:serviceLists})
      }
  },
  // 跳转至详情页
  toServiceDetail(e){
    wx.navigateTo({
      url:'../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },
  //封装的函数
  getStoreByIds(data){
    let query=getStoreById
    return querys({data,query}).then(e=>e)
  },
  dealStore(){
    let option=this.data.option,that=this
    this.getStoreByIds({id:option.store_id}).then((e)=>{
      console.log("getStoreByIds",e)
      that.setData({store:e.data.storebyid})
    })
  },
  getServices(data){
    let query=getService
    return querys({data,query}).then(e=>e)
  },
  dealService(){
    let option=this.data.option,that=this
    this.getServices({store_id:option.store_id}).then((e)=>{
      console.log("getServices",e.data.servicebyprops)
      that.setData({serviceList:e.data.servicebyprops,serviceLists:e.data.servicebyprops})

      let arr=e.data.servicebyprops.map(item=>item.class)
      arr=Array.from(new Set(arr))
      console.log("arr",arr)
      let navList=arr.map((item,index)=>{
        if(item=='美甲'){
          return {
            index,
            icon:"../../images/nav_icon_02.png",
            name:"美甲"
          }
        }
        if(item=='美容'){
          return {
            index,
            icon:"../../images/nav_icon_03.png",
            name:"美容"
          }
        }
        if(item=='美发'){
          return {
            index,
            icon:"../../images/nav_icon_04.png",
            name:"美发"
          }
        }
        if(item=='美睫'){
          return {
            index,
            icon:"../../images/nav_icon_05.png",
            name:"美睫"
          }
        }
      })

      navList=[{
        index:0,
        icon:"../../images/nav_icon_01.png",
        name:"推荐"
      },...navList]
      this.setData({navList})
      console.log('navList',this.data.navList)
    })
  }
})
