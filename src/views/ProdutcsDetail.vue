<template>
  <div class="productsdetail">
    <b-breadcrumb>
      <b-breadcrumb-item to="/">首頁</b-breadcrumb-item>
      <b-breadcrumb-item to="/products">商品</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ productArray[0].name }}</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="titleBox">
      <h1 class="font-weight-bold float-left pl-5 title">{{ productArray[0].name }}</h1>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col">
          <img :src="productArray[0].file">
        </div>
        <div class="col">
          <h2 class="my-5">{{ productArray[0].name }}</h2>
          <p class="mb-5">描述: {{ productArray[0].description }}</p>
          <h3 class="my-2">價格: {{ productArray[0].price }}</h3>
          <p class="my-2">單次購買上限: {{ productArray[0].total }}</p>
          <div class="d-flex flex-row justify-content-center my-5">
            數量:
            <button @click="productSub()">-</button>
            <div>{{ productArray[0].count }}</div>
            <button @click="productPlus()">+</button>
          </div>
          <b-button variant="success"
                    @click="addToCart(productArray[0])">
            加入購物車
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsdetail',
  data () {
    return {
      productArray: [
        {
          _id: '',
          productid: null,
          name: '',
          file: '',
          price: null,
          total: null,
          description: '',
          count: 1
        }
      ]
    }
  },
  methods: {
    addToCart (array) {
      this.$store.commit('addToCart', array)
    },
    productPlus () {
      if (this.productArray[0].total > this.productArray[0].count) {
        this.productArray[0].count += 1
      }
    },
    productSub () {
      if (this.productArray[0].count > 1) {
        this.productArray[0].count -= 1
      }
    }
  },
  mounted () {
    this.productArray[0]._id = this.$store.state.whichProduct
    this.axios.get(process.env.VUE_APP_API + '/products/productsdetail/' + this.productArray[0]._id)
      .then(res => {
        if (res.data.success) {
          this.productArray[0].productid = res.data.result.productid
          this.productArray[0].name = res.data.result.name
          this.productArray[0].file = process.env.VUE_APP_API + '/products/file/' + res.data.result.file
          this.productArray[0].price = res.data.result.price
          this.productArray[0].total = res.data.result.total
          this.productArray[0].description = res.data.result.description
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
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.productsdetail {
  .titleBox {
    text-align: left;
    .title {
      width: 100%;
      border-bottom: 1px solid var(--black25);
      margin-bottom: 3rem;
    }
  }
}
</style>
