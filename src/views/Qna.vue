<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="titleBox">
      <h1 class="font-weight-bold float-left pl-5 title">常見問題</h1>
    </div>
    <hr>
    <div class="container">
      <div class="collapse1"
           role="tablist">
        <b-card no-body
                class="mb-1">
          <b-card-header header-tag="header"
                         class="p-1"
                         role="tab">
            <b-button block
                      href="#"
                      v-b-toggle.accordion-1>如何辦理退貨？</b-button>
          </b-card-header>
          <b-collapse id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel">
            <b-card-body>
              <b-card-text>
                <ol>
                  <li>1. 於本網站完成購物，消費者依消費者保護法第19條第1項之規定享有7天鑑賞期，</li>
                  <li>2. 為保障您的權益，請於開箱時全程錄影</li>
                  <li>
                    <p>3. 相關說明如下：</p>
                    <p>&nbsp;&nbsp;瑕疵商品退貨前請先聯繫客服 service@camacafe.com 或撥打客服專線0800-068-566說明貨品狀況，確認是否可以退貨。確認退貨，總公司將派專人至府上收取。</p>
                  </li>
                  <li>
                    <p>4. 惟本公司所販賣之下列商品僅得於商品有瑕疵之情形退回，並不適用前述消費者保護法之規定：</p>
                    <p>&nbsp;&nbsp;1. 性質上易於變質或損壞的商品、以及性質上無法或不適合退還之商品。</p>
                    <p>&nbsp;&nbsp;2. 依照您所要求或註明的規格、需求等所訂製之商品。</p>
                    <p>&nbsp;&nbsp;3. 依照通常運送條件，貨物取回時將逾保存期限(如即期品)、或變質或損壞之商品。</p>
                  </li>
                </ol>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body
                class="mb-1">
          <b-card-header header-tag="header"
                         class="p-1"
                         role="tab">
            <b-button block
                      href="#"
                      v-b-toggle.accordion-2>可以換貨嗎？換貨流程？</b-button>
          </b-card-header>
          <b-collapse id="accordion-2"
                      accordion="my-accordion"
                      role="tabpanel">
            <b-card-body>
              <b-card-text>
                <ol>
                  <li>1. 本公司不提供更換品項之服務。若您欲換成其他品項或規格，請先辦理原商品退貨，再重新訂購您所需要的商品。</li>
                  <li>2. 您所退回的商品必須保持商品本體、內外包裝、配件、贈品、保證書等的完整性，請勿缺漏任何附件或損毀外盒。</li>
                  <li>3. 請您以送貨時之原包裝紙箱或紙袋，將退貨商品包裝妥當，若原紙箱紙袋已遺失或破損，請另使用其他紙箱包覆於商品原廠包裝之外，請勿直接於原廠包裝上黏貼紙張或書寫文字。</li>
                </ol>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body
                class="mb-1">
          <b-card-header header-tag="header"
                         class="p-1"
                         role="tab">
            <b-button block
                      href="#"
                      v-b-toggle.accordion-3>辦理退貨時，如商品有缺失是否還能？</b-button>
          </b-card-header>
          <b-collapse id="accordion-3"
                      accordion="my-accordion"
                      role="tabpanel">
            <b-card-body>
              <b-card-text>
                <p>退貨時若商品有下列情形者，可能會被認定為已逾越檢查商品之必要程度，而將影響退貨的權利，或需負擔毀壞之費用：</p>
                <p>咖啡類耗材（濾紙類等）：除瑕疵商品外，退回之商品已拆封，或包裝不完整（欠損商品、附件、外盒等）。</p>
                <p>器具類 ( 杯子、電器品、湯匙、濾杯…等 )：除瑕疵商品外，退回之商品已拆封（運送用包裝外的一切包裝，包括但不限於封膜等接觸商品內容之包裝部分，如封條移除、貼膠移除或標籤撕除等情形），或已非全新狀態（外觀刮傷、破損、受潮…等），與非完整包裝（商品、配件、外盒、保護袋、保麗龍、隨貨文件等有所欠損）。若原廠包裝損毀，將無法退貨，或須將損壞費用於退款中扣抵。</p>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
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
          text: '常見問題',
          active: true
        }
      ],
      text: 'ghfgh'
    }
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
.collapse1 {
  text-align: left;
}
</style>
