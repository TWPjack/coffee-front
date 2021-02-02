<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="title">
      <h1 class="font-weight-bold float-left pl-5 ">關於我們</h1>
    </div>
    <hr>
    <div class="container">
      <div class="row">
        <div class="card d-flex flex-row col-12 mb-3">
          <img class="col-3"
               src="https://picsum.photos/800/800/?random=3">
          <div class="card-body col-9">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
        <div class="card d-flex flex-row col-12 mb-3">
          <div class="card-body col-9">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <img class="col-3"
               src="https://picsum.photos/800/800/?random=4">
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

<style lang="scss">
</style>
