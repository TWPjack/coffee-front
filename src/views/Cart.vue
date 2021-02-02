<template>
  <div>
    <b-breadcrumb :items="itemss"></b-breadcrumb>
    <div class="title">
      <h1 class="font-weight-bold float-left pl-5 ">購物車</h1>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-12 my-5">
          <b-table striped
                   hover
                   :items="cartArray"
                   :fields="fields">
            <template #cell(file)="cartArray">
              <img :src="cartArray.item.file"
                   style="width: 50px" />
            </template>
            <template #cell(price)="cartArray">
              <p>{{cartArray.item.price}}</p>
            </template>
            <template #cell(count)="cartArray">
              <div class="d-flex flex-row justify-content-center">
                <button @click="productSub(cartArray.index)">-</button>
                <div>{{cartArray.item.count}}</div>
                <button @click="productPlus(cartArray.index)">+</button>
              </div>
            </template>
            <template #cell(allprice)="cartArray">
              <p>${{cartArray.item.price * cartArray.item.count}}</p>
            </template>
            <template #cell(action)="cartArray">
              <b-button variant="danger"
                        @click="delProduct(cartArray.index)">
                <font-awesome-icon :icon="['fas', 'trash']"></font-awesome-icon>
              </b-button>
            </template>
          </b-table>
          <div class="d-flex flex-row justify-content-around">
            <p>總數量 {{ allProductsAmount }}</p>
            <p>總金額 {{ allProductsPrice }}</p>
            <b-button variant="danger"
                      @click="cleanTheCart()">
              清空購物車
            </b-button>
          </div>
        </div>
        <div class="col-12 my-5">
          <div class="row">
            <div class="col-6">
              <b-form-group label="付款方式">
                <b-form-radio-group v-model="paymentMethodselected"
                                    :options="paymentMethodOptions"
                                    buttons
                                    name="radios-btn-default"></b-form-radio-group>
              </b-form-group>
            </div>
            <div class="col-6">
              <b-form-group label="運送方式">
                <b-form-radio-group v-model="deliveryMethodselected"
                                    :options="deliveryMethodOptions"
                                    buttons
                                    name="radios-btn-default"></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="col-12 my-5">
          <div id="products">
            <b-container>
              <b-row>
                <b-col cols="12">
                  <h3 class="text-center">收件人資訊</h3>
                  <b-form @submit.prevent="onSubmit">
                    <!-- name -->
                    <b-form-group label-for="input-name"
                                  :state="nameState"
                                  label="姓名："
                                  invalid-feedback="格式不符">
                      <b-form-input id="input-name"
                                    v-model="name"
                                    type="text"
                                    placeholder="請輸入姓名"
                                    :state="nameState">
                      </b-form-input>
                    </b-form-group>
                    <!-- phone -->
                    <b-form-group label-for="input-phone"
                                  :state="phoneState"
                                  label="手機號碼："
                                  invalid-feedback="格式不符">
                      <b-form-input id="input-phone"
                                    v-model="phone"
                                    type="number"
                                    placeholder="請輸入手機號碼"
                                    :state="phoneState">
                      </b-form-input>
                    </b-form-group>
                    <!-- address -->
                    <b-form-group label-for="input-address"
                                  :state="addressState"
                                  label="地址："
                                  invalid-feedback="格式不符">
                      <b-form-input id="input-address"
                                    v-model="address"
                                    type="text"
                                    placeholder="請輸入地址"
                                    :state="addressState">
                      </b-form-input>
                    </b-form-group>
                    <br />
                    <br />
                    <b-btn type="submit"
                           variant="success">送出</b-btn>
                  </b-form>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      itemss: [
        {
          text: '首頁',
          to: { name: 'Home' }
        },
        {
          text: '購物車',
          active: true
        }
      ],
      fields: [
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
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      cartArray: this.$store.state.cartArray,
      cartState: 'second',
      paymentMethodselected: '',
      paymentMethodOptions: [
        { text: '信用卡/金融卡', value: 'creditCard' },
        { text: '銀行轉帳', value: 'bankTransfer' }
      ],
      deliveryMethodselected: '',
      deliveryMethodOptions: [
        { text: '便利商店取貨', value: 'homeDelivery' },
        { text: '宅配', value: 'convenienceStorePickup' }
      ],
      name: '',
      phone: '',
      address: '',
      cargoState: '訂單已送出',
      ttt: {
        user: '',
        name: '',
        paymentMethod: '',
        deliveryMethod: '',
        phone: '',
        address: '',
        date: '',
        allProductsAmount: '',
        allProductsPrice: '',
        productsDetail: [],
        cargoState: ''
      }
    }
  },
  computed: {
    nameState () {
      if (this.name.length === 0) {
        return null
      } else if (this.name.length > 10) {
        return false
      } else {
        return true
      }
    },
    phoneState () {
      if (this.phone.length === 0) {
        return null
      } else if (this.phone.length !== 10) {
        return false
      } else {
        return true
      }
    },
    addressState () {
      if (this.address.length === 0) {
        return null
      } else if (this.address.length > 50 || this.address.length < 12) {
        return false
      } else {
        return true
      }
    },
    allProductsAmount: function () {
      let allCount = 0
      for (let i = 0; i < this.cartArray.length; i++) {
        allCount += this.cartArray[i].count
      }
      return allCount
    },
    allProductsPrice: function () {
      let productPrice = 0
      let allPrice = 0
      for (let i = 0; i < this.cartArray.length; i++) {
        productPrice = this.cartArray[i].count * this.cartArray[i].price
        allPrice += productPrice
      }
      return allPrice
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    onSubmit () {
      // let i = 0
      // do {
      //   i++
      //   this.axios.get(process.env.VUE_APP_API + '/products/productsdetail/' + this.cartArray[i]._id)
      //     .then(res => {
      //       if (res.data.success) {
      //         if (this.cartArray[i].count > res.data.result.total) {
      //           this.$swal({
      //             icon: 'error',
      //             title: '錯誤',
      //             text: this.cartArray[i].name + '訂購數量' + this.cartArray[i].count + '，已超過庫存數量' + res.data.result.total
      //           }).then(() => {
      //             this.cartArray[i].count = res.data.result.total
      //             this.$swal({
      //               icon: 'error',
      //               title: '錯誤',
      //               text: '已為您修改數量'
      //             })
      //           })
      //         }
      //       } else {
      //         this.$swal({
      //           icon: 'error',
      //           title: '錯誤',
      //           text: res.data.message
      //         })
      //       }
      //     })
      //     .catch(err => {
      //       this.$swal({
      //         icon: 'error',
      //         title: '錯誤',
      //         text: err.response.data.message
      //       })
      //     })
      // } while (i < this.cartArray.length - 1)
      if (this.cartArray.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '購物車是空的'
        })
      } else {
        this.$data.ttt.user = this.user.name
        this.$data.ttt.name = this.name
        this.$data.ttt.paymentMethod = this.paymentMethodselected
        this.$data.ttt.deliveryMethod = this.deliveryMethodselected
        this.$data.ttt.phone = this.phone
        this.$data.ttt.address = this.address
        const today = new Date()
        this.$data.ttt.date = today
        this.$data.ttt.allProductsAmount = this.allProductsAmount
        this.$data.ttt.allProductsPrice = this.allProductsPrice
        for (let i = 0; i < this.cartArray.length; i++) {
          delete this.cartArray[i].total
        }
        this.$data.ttt.productsDetail = this.cartArray
        this.$data.ttt.cargoState = this.cargoState
        this.axios.post(process.env.VUE_APP_API + '/orders/', this.$data.ttt)
          .then(res => {
            if (res.data.success) {
              this.name = ''
              this.paymentMethod = ''
              this.deliveryMethod = ''
              this.phone = ''
              this.address = ''
              this.allProductsAmount = null
              this.allProductsPrice = null
              // for (let i = 0; i < this.cartArray.length; i++) {
              //   this.axios.patch(process.env.VUE_APP_API + '/products/editcount/' + this.cartArray[i]._id,
              //     {
              //       total:
              //     })
              //     .then(res => {
              //       if (res.data.success) {
              //         this.$swal({
              //           icon: 'success',
              //           title: '訂單成功送出'
              //         }).then(() => {
              //           console.log(res.data.result)
              //         })
              //       } else {
              //         this.$swal({
              //           icon: 'error',
              //           title: '錯誤',
              //           text: res.data.message
              //         })
              //       }
              //     })
              //     .catch(err => {
              //       this.$swal({
              //         icon: 'error',
              //         title: '錯誤',
              //         text: err.response.data.message
              //       })
              //     })
              // }
              const Length = this.cartArray.length
              this.cartArray.splice(0, Length)
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
    },
    productPlus (index) {
      if (this.cartArray[index].total > this.cartArray[index].count) {
        this.cartArray[index].count += 1
      }
    },
    productSub (index) {
      if (this.cartArray[index].count > 1) {
        this.cartArray[index].count -= 1
      }
    },
    delProduct (index) {
      this.$store.commit('delProduct', index)
    },
    cleanTheCart () {
      this.$store.commit('cleanTheCart')
    },
    cart () {
      return this.$store.state.cartArray
    },
    leftClick: function () {
      if (this.cartState === 'third') {
        this.cartState = 'second'
      } else if (this.cartState === 'second') {
        this.cartState = 'first'
      }
    },
    rightClick: function () {
      if (this.cartState === 'first') {
        this.cartState = 'second'
      } else if (this.cartState === 'second') {
        this.cartState = 'third'
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
</style>
