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
      storeList:[]
  },
   
  onLoad:function(){
    this.getStores({}).then((e)=>{
      console.log("getStores",e.data.storebyprops)
      this.setData({
        storeList:e.data.storebyprops
      })
    })


  },
  // 跳转至详情页
  toDetail(e){
    console.log(e)
    wx.navigateTo({
      url:'../store/store?store_id='+e.currentTarget.dataset.id
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
  },
  
  //封裝的函數
  getStores(data){
    let query=getStore
    return querys({data,query}).then(e=>e)
  }
})
