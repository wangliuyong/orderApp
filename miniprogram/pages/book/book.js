var app = getApp()

import Graphql from '../../utils/graphql'
import Service from '../../graphql/service'
import Order from '../../graphql/order'

let {querys,mutations}=Graphql
let {getService,getServiceById}=Service
let {createOrder,getOrder}=Order

import Toast from '../../dist/toast/toast';


Page( {
  data: {
    order:{
      date:'2018-10-14',
      time:'14:21'
    },
    option:{},
    service:{},
    remark:''
  },
  onLoad: function (options) {
   console.log(options.service_id) 
   this.setData({
     option:options
   })
   let that=this
   this.getServiceByIds({id:options.service_id}).then((e)=>{
     console.log("getServiceByIds",e.data.servicebyid)
     that.setData({
      service:e.data.servicebyid
     })
    })

  },
  onShow(){

  },
  // 地址选择
  bindAddrPickerChange : function(e){
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  bindToastTap:function(e){
      let keys=['date','time','remark'],save=true;
      keys.map((item)=>{
        if(!this.data.order[item]){save=false}
      })

      if(save){
        console.log(e)
        let data={
          "createdAt": new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString().slice(2),
          "id": new Date().getTime()+parseInt(Math.random()*10000,10),
          "orderStatus": "1",
          "orderTime": this.data.order.date+' '+this.data.order.time,
          "orderTotalPay": 0,
          "payTime": "String",
          "remark": this.data.order.remark,
          "service_id": this.data.option.service_id,
          "storeTotalPay": 0,
          "updatedAt": "String",
          "user_id":app.globalData.openid
        }
        this.createOrders(data).then((e)=>{
          console.log(e)
          Toast('预约成功');
          wx.switchTab({
            url: '/pages/user/user'
          })
        })
      }else{
        Toast('所有内容不得为空');
      }
      
  },
  leaveMessage(e){
    console.log(e)
    this.setData({
      "order.remark":e.detail.value
    })
  },
  hideToast:function(){
    this.setData({
          bookToastHidden:true
      })
  },
  // 日期选择
  bindDateChange: function(e){
    console.log('date picker发送选择改变，携带值为', e.detail.value)
    this.setData({
          "order.date": e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function(e){
    console.log('time picker发送选择改变，携带值为', e.detail.value)
    this.setData({
          "order.time": e.detail.value
    })
  },
  //封裝的函数
  getServiceByIds(data){
    let query=getServiceById
    return querys({data,query}).then(e=>e)
  },
  createOrders(data){
    let mutation =createOrder;
    return mutations({data,mutation}).then(e=>e)
  },
})