<template>
  <div class="Nav">
    <b-navbar class="nav"
              toggleable="lg"
              type="dark">
      <b-navbar-brand to="/">
        <img class="logo"
             src="@/assets/logo.png">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse"
                  is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item to="/login">登入</b-nav-item> -->
          <b-nav-item to="/Products">商品</b-nav-item>
          <b-nav-item @click="logQuestion">購物車</b-nav-item>
          <b-nav-item v-if="user.id.length === 0"
                      to="/login">登入</b-nav-item>
          <b-nav-item v-if="user.id.length === 0"
                      to="/reg">註冊</b-nav-item>
          <b-nav-item v-if="user.id.length > 0"
                      to="/member">會員中心</b-nav-item>
          <b-nav-item v-if="user.id.length > 0"
                      @click="logout">登出</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    }
  },
  computed: {
    cartArray () {
      return this.$store.state.cartArray
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_API + '/users/logout')
        .then(res => {
          // 如果登出成功
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功'
            })

            // 清除 vuex
            this.$store.commit('logout')
            this.$store.commit('cleanTheCart')

            // 導回首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
        .catch(error => {
          // 如果回來的狀態碼不是 200，直接 alert 錯誤訊息
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        })
    },
    logQuestion () {
      if (this.$store.state.user.id.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '尚未登入'
        }).then(() => {
          // sweet alert 對話框關掉後才跳到登入頁
          this.$router.push('/login')
          this.$store.state.wherefrom = 'goingToCart'
        })
      } else {
        this.$router.push('/Cart')
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
.Nav {
  .nav {
    background-color: var(--coffee1);
    .logo {
      height: 65px;
    }
    flex: 0 0 auto;
  }
}
</style>
