(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["member"],{"3aba":function(e,t,a){},"80d2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Member"},[a("b-breadcrumb",{attrs:{items:e.items}}),e._m(0),a("hr"),a("div",{staticClass:"member container"},[a("b-tabs",{staticClass:"tabs",attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"會員資料",active:""}},[e._v(" 使用者："+e._s(this.$store.state.user.name)+" ")]),a("b-tab",{attrs:{title:"訂單列表"}},[e.orderState?a("div",[a("p",[e._v("目前還沒有訂單喔")])]):e._e(),e.orderState?e._e():a("div",[a("b-table",{attrs:{striped:"",hover:"",items:e.orders,fields:e.ordersFields},scopedSlots:e._u([{key:"cell(productsDetail)",fn:function(t){return[a("b-button",{attrs:{variant:"danger"},on:{click:function(a){e.proD(t),e.$bvModal.show("modal-scoped")}}},[e._v(" 商品詳情 ")])]}}],null,!1,1392988275)})],1),a("b-modal",{attrs:{id:"modal-scoped"},scopedSlots:e._u([{key:"default",fn:function(){return[a("b-table",{attrs:{striped:"",hover:"",items:e.orders[e.whichOrder].productsDetail,fields:e.cartFields},scopedSlots:e._u([{key:"cell(file)",fn:function(e){return[a("img",{staticStyle:{width:"50px"},attrs:{src:e.item.file}})]}},{key:"cell(allprice)",fn:function(t){return[a("p",[e._v(e._s(t.item.price*t.item.count))])]}}])})]},proxy:!0},{key:"modal-footer",fn:function(t){var r=t.ok;return[a("p",[e._v("總價格："+e._s(e.orders[e.whichOrder].allProductsPrice))]),a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){return r()}}},[e._v(" OK ")])]}}])})],1)],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",{staticClass:"font-weight-bold float-left pl-5 "},[e._v("會員中心")])])}],l=(a("b0c0"),{name:"Home",data:function(){return{items:[{text:"首頁",to:{name:"Home"}},{text:"會員中心",active:!0}],ordersFields:[{key:"name",label:"姓名"},{key:"paymentMethod",label:"付款方式"},{key:"deliveryMethod",label:"運送方式"},{key:"phone",label:"電話"},{key:"address",label:"地址"},{key:"date",label:"訂購日期"},{key:"allProductsAmount",label:"總數量"},{key:"allProductsPrice",label:"總價格"},{key:"cargoState",label:"訂單狀態"},{key:"productsDetail",label:"商品詳情"}],cartFields:[{key:"file",label:"圖片"},{key:"name",label:"品名"},{key:"price",label:"價格"},{key:"count",label:"數量"},{key:"allprice",label:"合計"}],orders:[],orderState:!1,whichOrder:null}},methods:{proD:function(e){this.whichOrder=e.index}},mounted:function(){var e=this;this.axios.get("https://coffeec8763.herokuapp.com/orders/userpresent").then((function(t){if(t.data.success){if(0===t.data.result.length)e.orderState=!0;else if(0!==t.data.result.length){e.orderState=!1;for(var a=0;a<t.data.result.length;a++)e.orders.push({_id:t.data.result[a]._id,name:t.data.result[a].name,paymentMethod:t.data.result[a].paymentMethod,deliveryMethod:t.data.result[a].deliveryMethod,phone:t.data.result[a].phone,address:t.data.result[a].address,date:t.data.result[a].date,allProductsAmount:t.data.result[a].allProductsAmount,allProductsPrice:t.data.result[a].allProductsPrice,productsDetail:t.data.result[a].productsDetail,cargoState:t.data.result[a].cargoState})}}else e.$swal({icon:"error",title:"錯誤",text:t.data.message})})).catch((function(t){e.$swal({icon:"error",title:"錯誤",text:t.response.data.message})}))}}),o=l,d=(a("8a84"),a("2877")),i=Object(d["a"])(o,r,s,!1,null,"715c7d88",null);t["default"]=i.exports},"8a84":function(e,t,a){"use strict";a("3aba")}}]);
//# sourceMappingURL=member.4720737c.js.map