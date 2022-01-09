<template>
  <div class="similar-products-content container">
    <h2 
      class="similar-products__title" 
      v-if="info.page_settings.title_similar"
      v-html="cnangeColorTitle(15, info.page_settings.title_similar)"
    ></h2>

    <div class="similar-products__slider">
      <swiper class="slider__container" :options="swiperOptions" >
        <swiper-slide class="slider__item" v-for="(item, index) in info.similar_products" :key="index">
            <CatalogProductPreview :info="item"/>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>

import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4,
        watchOverflow: true,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        speed: 900,
        breakpoints:{
          320:{
            slidesPerView: 2,
          },
          577:{
            slidesPerView: 3,
          },
          769:{
            slidesPerView: 4,
          },
        }
      }
    }
  },
}
</script>



<style lang='scss' scoped>
.similar-products__title{
  margin: 0 0 1.4em;
  &::v-deep b{
    color: var(--gray)
  }
}
.similar-products__slider{
  display: grid;
}
.slider__container{
  width: 100%;
  min-width: 0;
  min-height: 0;
} 
</style>