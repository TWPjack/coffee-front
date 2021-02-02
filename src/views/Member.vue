<template>
  <div class="Member">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="title">
      <h1 class="font-weight-bold float-left pl-5 ">會員中心</h1>
    </div>
    <hr>
    <div class="member container">
      <b-tabs class="tabs"
              content-class="mt-3">
        <b-tab title="會員資料"
               active>
          使用者：{{ this.$store.state.user.name }}
        </b-tab>
        <b-tab title="訂單列表">
          <div v-if="orderState">
            <p>目前還沒有訂單喔</p>
          </div>
          <div v-if="!orderState">
            <b-table striped
                     hover
                     :items="orders"
                     :fields="ordersFields">
              <template #cell(productsDetail)="productsDetail">
                <b-button variant="danger"
                          @click="proD(productsDetail),$bvModal.show('modal-scoped')">
                  商品詳情
                </b-button>
              </template>
            </b-table>
          </div>
          <b-modal id="modal-scoped">
            <template #default="">
              <b-table striped
                       hover
                       :items="orders[whichOrder].productsDetail"
                       :fields="cartFields">
                <template #cell(file)="productsDetail">
                  <img :src="productsDetail.item.file"
                       style="width: 50px" />
                </template>
                <template #cell(allprice)="productsDetail">
                  <p>{{ productsDetail.item.price *  productsDetail.item.count}}</p>
                </template>
              </b-table>
            </template>
            <template #modal-footer="{ ok}">
              <p>總價格：{{ orders[whichOrder].allProductsPrice }}</p>
              <b-button size="sm"
                        variant="success"
                        @click="ok()">
                OK
              </b-button>
            </template>
          </b-modal>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          text: '首頁',
          to: { name: 'Home' }
        },
        {
          text: '會員中心',
          active: true
        }
      ],
      ordersFields: [
        {
          key: 'name',
          label: '姓名'
        },
        {
          key: 'paymentMethod',
          label: '付款方式'
        },
        {
          key: 'deliveryMethod',
          label: '運送方式'
        },
        {
          key: 'phone',
          label: '電話'
        },
        {
          key: 'address',
          label: '地址'
        },
        {
          key: 'date',
          label: '訂購日期'
        },
        {
          key: 'allProductsAmount',
          label: '總數量'
        },
        {
          key: 'allProductsPrice',
          label: '總價格'
        },
        {
          key: 'cargoState',
          label: '訂單狀態'
        },
        {
          key: 'productsDetail',
          label: '商品詳情'
        }
      ],
      cartFields: [
        {
          key: 'file',
          label: '圖片'
        },
        {
          key: 'name',
          label: '品名'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'count',
          label: '數量'
        },
        {
          key: 'allprice',
          label: '合計'
        }
      ],
      // order: null,
      orders: [],
      orderState: false,
      whichOrder: null
    }
  },
  methods: {
    proD (productsDetail) {
      this.whichOrder = productsDetail.index
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/orders/userpresent')
      .then(res => {
        if (res.data.success) {
          // console.log(res.data)
          if (res.data.result.length === 0) {
            this.orderState = true
          } else if (res.data.result.length !== 0) {
            this.orderState = false
            for (let i = 0; i < res.data.result.length; i++) {
              this.orders.push(
                {
                  _id: res.data.result[i]._id,
                  name: res.data.result[i].name,
                  paymentMethod: res.data.result[i].paymentMethod,
                  deliveryMethod: res.data.result[i].deliveryMethod,
                  phone: res.data.result[i].phone,
                  address: res.data.result[i].address,
                  date: res.data.result[i].date,
                  allProductsAmount: res.data.result[i].allProductsAmount,
                  allProductsPrice: res.data.result[i].allProductsPrice,
                  productsDetail: res.data.result[i].productsDetail,
                  cargoState: res.data.result[i].cargoState
                }
              )
            }
          }
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: res.data.message
          })
        }
      })
      .catch(err => {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: err.response.data.message
        })
      })
  }
}
</script>

<style scoped lang="scss">
.Member {
  overflow: hidden;
  .tabs {
    overflow: hidden;
    text-align: left;
  }
  .member {
    overflow: hidden;
  }
}
</style>
