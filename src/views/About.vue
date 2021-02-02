<template>
  <div>
    <div class="titleBox">
      <b-breadcrumb class="breadCrumb"
                    :items="items"></b-breadcrumb>
      <h1 class="font-weight-bold float-left pl-5 title">關於我們</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="card d-flex flex-row col-12 mb-3">
          <img class="col-3"
               src="@/assets/aboutimg1.jpg">
          <div class="card-body col-9">
            <h5 class="card-title">差一秒就倒掉，是我們追求最佳萃取時間的態度</h5>
            <p class="card-text">咖啡吧台師傅擁有的超高實力，
              正是一家店與其他店分出高下的魅力所在。
              cama的吧台師傅具有超高技術水準，
              心中永遠想著要提供讓客人滿足、好喝的咖啡。</p>
          </div>
        </div>
        <div class="card d-flex flex-row col-12 mb-3">
          <div class="card-body col-9">
            <h5 class="card-title">看得到的新鮮，勝過千言萬語</h5>
            <p class="card-text">咖啡生豆經烘焙後二～七天味道和香氣會達到頂點。
              新鮮烘焙的咖啡豆可以說是咖啡好喝的最大關鍵！
              我們堅持給您最佳賞味期限的咖啡。</p>
          </div>
          <img class="col-3"
               src="@/assets/aboutimg2.jpg">
        </div>
        <div class="card d-flex flex-row col-12 mb-3">
          <img class="col-3"
               src="@/assets/aboutimg3.jpg">
          <div class="card-body col-9">
            <h5 class="card-title">差一秒就倒掉，是我們追求最佳萃取時間的態度</h5>
            <p class="card-text">咖啡吧台師傅擁有的超高實力，
              正是一家店與其他店分出高下的魅力所在。
              cama的吧台師傅具有超高技術水準，
              心中永遠想著要提供讓客人滿足、好喝的咖啡。</p>
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
      items: [
        {
          text: '首頁',
          to: { name: 'Home' }
        },
        {
          text: '關於我們',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.titleBox {
  text-align: left;
  .breadCrumb {
    margin-bottom: 0;
  }
  .title {
    width: 100%;
    border-bottom: 1px solid var(--black25);
    margin-bottom: 3rem;
  }
}
</style>
