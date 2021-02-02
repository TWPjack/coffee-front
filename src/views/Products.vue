<template>
  <div>
    <b-breadcrumb :items="itemss"></b-breadcrumb>
    <div class="title">
      <h1 class="font-weight-bold float-left pl-5 ">商品</h1>
    </div>
    <hr>
    <b-row class="w-100 test">
      <b-col cols="12"
             md="6"
             lg="3"
             v-for="(product) in products"
             :key="product._id">
        <b-card @click="whichProduct(product._id)">
          <b-card-img :src="product.src"></b-card-img>
          <b-card-body>
            <hr />
            <b-card-text style="white-space: pre-wrap">{{ product.namePresent }}</b-card-text>
            <b-card-text style="white-space: pre-wrap">價格: {{ product.pricePresent }}</b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
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
          text: '商品',
          active: true
        }
      ],
      product: null,
      description: '',
      products: []
    }
  },
  methods: {
    whichProduct (data) {
      this.$store.commit('whichProduct', data)
      this.$router.push('/produtcsdetail')
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/products/productsfront')
      .then(res => {
        if (res.data.success) {
          this.products = res.data.result.map(product => {
            product.src = process.env.VUE_APP_API + '/products/file/' + product.file
            product.namePresent = product.name
            product.pricePresent = product.price
            delete product.file
            delete product.name
            delete product.price
            return product
          })
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
.title {
  width: 100vw;
  .test {
    min-height: 500px;
  }
}
</style>
