<template>
  <div class="titleBox">
    <div class="container">
      <div class="titleBox__wrapper">
        <Breadcrumbs :meta="meta" :title="title" class="second"/>
        <div class="titleBox__link" v-if="showLinkBack">
          <Link class="link_titleBox-second" :url="getUrlBack()" :text="translate('back')" direction="left"/>
        </div>
        <!-- <h1 class="titleBox-title" v-if="titlePage">{{ titlePage }}</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    meta: Array,
    title: String,
    showLinkBack: Boolean
  },
  data(){
    return{
      backUrl: {}
    }
  },
  computed:{
    titlePage(){
      return this.getTitlePage(this.meta, this.title);
    }
  }
}
</script>

<style lang="scss" scoped>
.titleBox {
  font-size: 1rem;
  position: relative;
  color: var(--white);
}
.titleBox__link{
  margin: 2.4em 0 1.6em;
}
.titleBox__wrapper {
  padding: 1px 0;
}
.titleBox-title {
  margin: 0 0 1em;
}

@media screen and (max-width: 768px){
  .titleBox__link{
    margin: 1.6em 0 2.4em;
  }
  .titleBox-title {
    margin: 0 0 .83em;
  }
}

</style>
