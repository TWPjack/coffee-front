<template>
  <div class="Footer">
    <footer class="bg-light text-muted py-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-md-4 col-sm-4 col-12 my-3 mx-auto a">
            <h3 class="text-muted mb-md-0 mb-5 bold-text">
              <img class="logo"
                   src="@/assets/logo.png">
            </h3>
            <p class="mt-5">
              <!-- <router-link to="/adminlog">管理登入</router-link> -->
            </p>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-4 col-12 my-3">
            <h6 class="mb-2 mb-lg-4 bold-text"><b>聯絡我們</b></h6>
            <ul class="list-unstyled">
              <li>地址</li>
              <li>電話</li>
              <li>營業時間</li>
              <li>e-mail</li>
            </ul>
          </div>
          <div class="col-xl-4 col-md-4 col-sm-4 col-12 my-3">
            <h6 class="mb-2 mb-lg-4 bold-text"><b>其他</b></h6>
            <ul class="list-unstyled">
              <li>
                <router-link to="/about">關於我們</router-link>
              </li>
              <li>
                <router-link to="/terms">隱私權政策</router-link>
              </li>
              <li>
                <router-link to="/qna">常見問題</router-link>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-center">© Copright 2021 悟 咖 啡</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {}
}
</script>

<style scoped lang="scss">
.Footer {
  overflow: hidden;
  .logo {
    height: 75px;
  }
}
</style>
