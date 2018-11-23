//index.js
import Graphql from '../../utils/graphql'
import User from '../../graphql/user'
import Order from '../../graphql/order'

let {querys,mutations}=Graphql
let {createUser,getUsrById}=User
let {getOrder,deleteOrder}=Order
//获取应用实例
var app = getApp()


Page({
  // 页面初始数据
  data: {
    userInfo:{},
    background:{},
    orderList:[]
  },
  onLoad(){
    this.getWeixinUser()

    let data={
      user_id:app.globalData.openid
    }
    this.getOrders(data).then((e)=>{

      console.log('---------2-------------')
      console.log(e.data.orderbyprops)
      this.setData({
        orderList:e.data.orderbyprops
      })
    })
  },
  //封装的函数
  getOrders(data){
    let query=getOrder
    console.log('-----------1-----------')
    return querys({data,query}).then(e=>e)
  },
  //创建用户
  creaUsers(userInfo,mutation){
    let data = {
      "avatar": userInfo.avatarUrl,
      "createdAt": new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString().slice(2),
      "id": app.globalData.openid,
      "password": "135549",
      "updateAt": "00",
      "username": userInfo.nickName
    }
    mutations({data,mutation}).then((e)=>{
      console.log('createUser',e)
    })
  },
  //从数据库中获取用户
  getUsers(data,query){
    return querys({data,query}).then((e)=>{
      console.log('getUser',e)
      return e
    })
  },
  getWeixinUser(){
    let that=this
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                background:`background:url(https://wly-1254337200.cos.ap-guangzhou.myqcloud.com/banner_01.png) no-repeat`
              })
              console.log('res',res)
              that.getUsers({"id":app.globalData.openid},getUsrById).then((e)=>{
                if(e.data.userbyprops==0){
                  this.creaUsers(res.userInfo,createUser)
                }
              })
            }
          })
        }
      }
    })
  }
})
