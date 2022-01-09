<template>
  <section class="partners-content">
    <h2 class="partners-content__title container" v-if="partners.title" v-html="partners.title"></h2>

    <div class="partners-content__slider">
      <swiper class="slider__container" :options="swiperOptions" >
        <swiper-slide class="slider__item" v-for="(item, index) in partners.items" :key="index">
            <div class="partners-content__wrap-img">            
              <img class="partners-content__img" :src="item.src" :alt="item.alt">
            </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    partners: Object
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 'auto',
        freeMode: true,
        watchOverflow: true,
        spaceBetween: 0,
        autoHeight: true,
        grabCursor: true,
        speed: 900,
      }
    }
  },
}

</script>

<style lang='scss' scoped>
.partners-content__slider{
  display: grid;
  width: 100%;
}
.slider__item{
  max-width: 30.6em;
  padding: 6em 0;
  border-left: 1px solid rgba(0, 87, 184, .3);
  border-right: 1px solid rgba(0, 87, 184, .3);
}
.partners-content__wrap-img{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-top: 1px solid rgba(0, 87, 184, .3);
  border-bottom: 1px solid rgba(0, 87, 184, .3);
  padding: 5em 1em;
  position: relative;
  &:after{
    bottom: -.6em;
  }
  &:before{
    top: -.6em;
  }
  &:after,
  &:before{
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    border: 2px solid var(--blue);
    position: absolute;
    left: -.6em;
  }
}
.partners-content__title{
  margin: 0 auto 1em;
}
.partners-content__img{
  display: block;
  max-width: 100%;
  filter: grayscale(100%);
  transition: .3s;
  &:hover,
  &:focus{
    filter: grayscale(0%);
  }
}
@media screen and (max-width: 768px) {
  .partners-content__img{
    max-width: 14em;
  }
  .partners-content__wrap-img{
    &:after{
      bottom: -4px;
    }
    &:before{
      top: -4px;
    }
    &:after,
    &:before{
      width: 6px;
      height: 6px;
      left: -4px;
      border: 1.5px solid var(--blue);
    }
  }
}
@media screen and (max-width: 576px) {
  .slider__item{
    max-width: 35.4em;
    padding: 6.8em 0;
  }
  .partners-content__wrap-img{
    padding: 5.6em 1em;
  }
  .partners-content__img{
    max-width: 14em;
  }
}
</style>