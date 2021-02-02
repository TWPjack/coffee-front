<template>
  <div>
    <div class="titleBox">
      <h1 class="font-weight-bold float-left pl-5 title">首頁</h1>
    </div>
    <div class="container">
      <b-row class="w-100">
        <b-col class="mb-5"
               cols="12"
               v-for="(newsImage) in newsArray"
               :key="newsImage._id">
          <b-card>
            <b-card-img :src="newsImage.src"></b-card-img>
            <hr />
            <b-card-body class="float-left">
              <h3>{{ newsImage.titlePresent }}</h3>
              <b-card-text>{{ newsImage.desciptionPresent }}</b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      newsImage: null,
      title: '',
      description: '',
      newsArray: []
    }
  },
  components: {

  },
  mounted () {
    this.axios.get(process.env.VUE_APP_API + '/news/newsfront')
      .then(res => {
        if (res.data.success) {
          this.newsArray = res.data.result.map(newsImage => {
            newsImage.src = process.env.VUE_APP_API + '/news/file/' + newsImage.file
            newsImage.titlePresent = newsImage.title
            newsImage.desciptionPresent = newsImage.description
            delete newsImage.file
            delete newsImage.title
            delete newsImage.description
            return newsImage
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
.titleBox {
  text-align: left;
  .title {
    width: 100%;
    border-bottom: 1px solid var(--black25);
    margin-bottom: 3rem;
  }
}
</style>
