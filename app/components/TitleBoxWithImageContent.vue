<template>
  <div class="titleBox" :style="{'--bg': `url(${image.src})`}">
    <div class="titleBox__inner" :class="{'isMobile': !$device.isDesktop}">
      <div class="container" :class="{'titleBox__breadcrumbs': !$device.isDesktop}">
        <Breadcrumbs :meta="meta" :title="title" :class="{'second': !$device.isDesktop}"/>
      </div>
      <div class="container">
        <div class="titleBox__link" v-if="showLink">
          <Link class="link_titleBox-third" :url="getUrlBack()" :text="translate('back')" direction="left"/>
        </div>

        <h1 class="titleBox-title" :class="{'not-back-link': !showLink}" v-if="titlePage">{{ titlePage }}</h1>      
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
    image: Object,
    showLink: Boolean
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
  background-image:  var(--bg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.titleBox__inner{
  height: 45em;  
  padding: 1px 0;  
  background-color: rgba(0,0,0, .4);
  &.isMobile{
    padding: 0;
  }
}

.titleBox-title {
  margin: .33em 0 0;
  color: var(--white);
  &.not-back-link {
    margin: 1em 0 0;
  }
}
.titleBox__breadcrumbs{
  padding: 1px 15px;
  background: var(--white);
  margin: 0 auto 3.2em;
}
@media screen and (max-width: 1200px){
  .titleBox {
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .titleBox {
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px){
  .titleBox__inner{
    height: 48.8em;  
  }
  .titleBox {
    font-size: .5rem;
  }

}
</style>
