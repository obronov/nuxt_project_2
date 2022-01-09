<template>
  <div class="main-slider-content" :class="{isMobile: !$device.isDesktop, hiddenSlider: hiddenSlider}">
    <swiper 
      ref="slider" 
      class="main-slider__container" 
      :options="setSwiperOptions()"
      @slideChangeTransitionEnd="updateInfo()"
      @ready="initSlider()"
    >
      <swiper-slide class="main-slider__item" v-for="(item, index) in info.items" :key="index">
        <div class="main-slider__wrap-img">
          <video v-if="item.video_src" loop="" muted="" autoplay="" :poster="item.img_src" class="main-slider__video">
            <source :src="item.video_src" type="video/mp4">
          </video>
          <img v-else class="main-slider__img" :src="item.img_src" :alt="item.img_alt">
        </div>
      </swiper-slide>
      
    </swiper>
    <div class="main-slider-content__info" 
      :class="{resetZindex: $store.state.toggleMenu}"
      @mouseenter="stopAutoPlay()"
      @mouseleave="startAutoPlay()"
    >
      <div class="main-slider-content__info-inner container">
        <div class="main-slider-content__controls">
          <button class="main-slider__btn main-slider-prev" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.73053C11.8012 3.73071 11.6105 3.80984 11.47 3.95053L4.47 10.9505C4.28243 11.1435 4.21204 11.4218 4.28533 11.6807C4.35863 11.9396 4.56447 12.1397 4.82533 12.2057C5.08619 12.2717 5.36243 12.1935 5.55 12.0005L12 5.55053L18.45 12.0005C18.637 12.2012 18.9186 12.2838 19.1843 12.2159C19.45 12.1481 19.6575 11.9406 19.7254 11.6748C19.7932 11.4091 19.7106 11.1275 19.51 10.9405L12.51 3.94053C12.3728 3.80829 12.1905 3.73321 12 3.73053Z" fill="white"/>
              <path d="M12 3.74023C11.588 3.74562 11.2554 4.07827 11.25 4.49023V19.4902C11.25 19.7582 11.3929 20.0058 11.625 20.1398C11.8571 20.2737 12.1429 20.2737 12.375 20.1398C12.6071 20.0058 12.75 19.7582 12.75 19.4902V4.49023C12.7446 4.07827 12.412 3.74562 12 3.74023Z" fill="white"/>
              <path d="M12 3.73053C11.8012 3.73071 11.6105 3.80984 11.47 3.95053L4.47 10.9505C4.28243 11.1435 4.21204 11.4218 4.28533 11.6807C4.35863 11.9396 4.56447 12.1397 4.82533 12.2057C5.08619 12.2717 5.36243 12.1935 5.55 12.0005L12 5.55053L18.45 12.0005C18.637 12.2012 18.9186 12.2838 19.1843 12.2159C19.45 12.1481 19.6575 11.9406 19.7254 11.6748C19.7932 11.4091 19.7106 11.1275 19.51 10.9405L12.51 3.94053C12.3728 3.80829 12.1905 3.73321 12 3.73053Z" fill="white"/>
              <path d="M12 3.74023C11.588 3.74562 11.2554 4.07827 11.25 4.49023V19.4902C11.25 19.7582 11.3929 20.0058 11.625 20.1398C11.8571 20.2737 12.1429 20.2737 12.375 20.1398C12.6071 20.0058 12.75 19.7582 12.75 19.4902V4.49023C12.7446 4.07827 12.412 3.74562 12 3.74023Z" fill="white"/>
            </svg>
          </button>
          <div class="main-slider-wrap-pagination">
            <div class="main-slider-pagination" slot="pagination"></div>
          </div>
          <button class="main-slider__btn main-slider-next" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.2695C11.8012 20.2693 11.6105 20.1902 11.47 20.0495L4.47 13.0495C4.28243 12.8565 4.21204 12.5782 4.28533 12.3193C4.35863 12.0604 4.56447 11.8603 4.82533 11.7943C5.08619 11.7283 5.36243 11.8065 5.55 11.9995L12 18.4495L18.45 11.9995C18.637 11.7988 18.9186 11.7162 19.1843 11.7841C19.45 11.8519 19.6575 12.0594 19.7254 12.3252C19.7932 12.5909 19.7106 12.8725 19.51 13.0595L12.51 20.0595C12.3728 20.1917 12.1905 20.2668 12 20.2695Z" fill="white"/>
            <path d="M12 20.2598C11.588 20.2544 11.2554 19.9217 11.25 19.5098V4.50977C11.25 4.24182 11.3929 3.99422 11.625 3.86025C11.8571 3.72627 12.1429 3.72627 12.375 3.86025C12.6071 3.99422 12.75 4.24182 12.75 4.50977V19.5098C12.7446 19.9217 12.412 20.2544 12 20.2598Z" fill="white"/>
            <path d="M12 20.2695C11.8012 20.2693 11.6105 20.1902 11.47 20.0495L4.47 13.0495C4.28243 12.8565 4.21204 12.5782 4.28533 12.3193C4.35863 12.0604 4.56447 11.8603 4.82533 11.7943C5.08619 11.7283 5.36243 11.8065 5.55 11.9995L12 18.4495L18.45 11.9995C18.637 11.7988 18.9186 11.7162 19.1843 11.7841C19.45 11.8519 19.6575 12.0594 19.7254 12.3252C19.7932 12.5909 19.7106 12.8725 19.51 13.0595L12.51 20.0595C12.3728 20.1917 12.1905 20.2668 12 20.2695Z" fill="white"/>
            <path d="M12 20.2598C11.588 20.2544 11.2554 19.9217 11.25 19.5098V4.50977C11.25 4.24182 11.3929 3.99422 11.625 3.86025C11.8571 3.72627 12.1429 3.72627 12.375 3.86025C12.6071 3.99422 12.75 4.24182 12.75 4.50977V19.5098C12.7446 19.9217 12.412 20.2544 12 20.2598Z" fill="white"/>
          </svg>
          </button>
        </div>
        <div class="main-slider-content__wrap-info">
          <h1 class="main-slider-content__title" v-if="titleSlider && !hiddenSlider" v-html="titleSlider"></h1>
          <div class="main-slider-content__description" v-if="descritionSlider && !hiddenSlider" v-html="descritionSlider"></div>
          <div class="main-slider-content__wrap-link">
            <Link class="main-slider-content__link" v-if="!hiddenSlider" :url="linkSlider" :text="info.link_name" direction="right"/>
          </div>
        </div>
      </div>
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
      hiddenSlider: true,
      titleSlider: this.info.items[0].title,
      descritionSlider: this.info.items[0].description,
      linkSlider: this.info.items[0].link,
      
      swiperOptions: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        },
        pauseOnMouseEnter: true,
        slidesPerView: 1,
        watchOverflow: true,
        spaceBetween: 0,
        speed: 900,
        direction: 'vertical',
        pagination: {
          el: '.main-slider-pagination'
        },
        navigation: {
          nextEl: '.main-slider-next',
          prevEl: '.main-slider-prev'
        },
      }
    }
  },
  methods:{
    startAutoPlay(){
      this.$refs.slider.$swiper.autoplay.start()
    },
    stopAutoPlay(){
      this.$refs.slider.$swiper.autoplay.stop()
    },
    initSlider(){
      this.hiddenSlider = false;
    },
    setSwiperOptions(){

      if(this.$device.isDesktop){
        this.swiperOptions.direction = 'vertical';
      }else{
        this.swiperOptions.direction = 'horizontal';
      }

      return this.swiperOptions
    },
    updateInfo(){
      let index = this.$refs.slider.$swiper.activeIndex;
      this.titleSlider = this.info.items[index].title;
      this.descritionSlider = this.info.items[index].description;
      this.linkSlider = this.info.items[index].link;
    }
  },

}
</script>

<style lang="scss" scoped>
.main-slider-content{
  margin: -126px 0 0;
  position: relative;
  &.isMobile{
    display: grid;
    margin: -52px 0 0;
    @media screen and (min-width: 550px) {
      margin: -72px 0 0;
    }
    @media screen and (min-width: 768px) {
      margin: -82px 0 0;
    }
    @media screen and (min-width: 992px) {
      margin: -90px 0 0;
    }
    @media screen and (min-width: 1024px) {
      margin: -96px 0 0;
    }
    .main-slider-content__link, .main-slider-content__link:visited{
      font-size: 1.4rem;
      line-height: 2;
    }
    .main-slider-content__description{
      line-height: 1.41;
      margin: 0 0 1.42em;
    }
    .main-slider-content__title {
      margin: 0 0 20px;
    }
    .main-slider__container{
      height: 568px;
    }
    .main-slider-content__info-inner {
      grid-template-columns: 1fr;
      grid-gap: 2em;
      grid-template-rows: 1fr auto;
    }
    .main-slider-content__controls {
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 0;
      grid-row: 2;
    }
    .main-slider-pagination{
      flex-flow: row wrap;
    }
    .main-slider-wrap-pagination{
      margin: 0 3.6em;
    } 
    .main-slider-content__info{
      height: calc(100% - (52px + 15px));
      margin: 52px 0 15px;
      @media screen and (min-width: 550px) {
        margin: 72px 0 15px;
        height: calc(100% - (72px + 15px));
      }
      @media screen and (min-width: 768px) {
        margin: 82px 0 15px;
        height: calc(100% - (82px + 15px));
      }
      @media screen and (min-width: 992px) {
        margin: 90px 0 15px;
        height: calc(100% - (90px + 15px));
      }
      @media screen and (min-width: 1024px) {
        margin: 96px 0 15px;
        height: calc(100% - (96px + 15px));
      }
    }
    .main-slider-prev {
       transform: rotate(-90deg);
    }
    .main-slider-next {
       transform: rotate(-90deg);
    }
  }
  &.hiddenSlider{
    .main-slider__container{
      opacity: 0;
      visibility: hidden;
    }
  }
}
.main-slider-content__info{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 186px);
  z-index: 10;  
  margin: 126px 0 60px;
  overflow: hidden;
  &.resetZindex{
    z-index: 1;
  }
}
.main-slider-content__info-inner{
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 3.6em;
}
.main-slider-wrap-pagination{
  margin: 3.6em 0;
}
.main-slider-pagination {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  &::v-deep{
    .swiper-pagination-bullet {
      width: 30px;
      height: 30px;
      display: block;
      border-radius: 100%;
      background: none;
      opacity: 1;
      border: 1px solid transparent;
      position: relative;
      transition: .3s;
      &.swiper-pagination-bullet-active{
        border: 1px solid var(--blue);
        &:before{
          background: var(--blue);
        }
      }
      &:before{
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background: var(--white);
        position: absolute;
        top: calc(50% - 2px);
        left: calc(50% - 2px);
      }
    }
  }
}
.main-slider-content__wrap-info{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.main-slider-content__title{
  color: var(--white);
  margin: 0 0 .5em;
  max-width: 9.6em;
  display: block;
}
.main-slider-content__description{
  color: var(--white);
  font-size: 1.4rem;
  line-height: 171%;
  margin: 0 0 1.14em;
  max-width: 32em;
  &::v-deep *{
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }
}
.main-slider__video{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-slider__wrap-img{
  height: 100%;
  position: relative;
  &:before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000;
    opacity: 0.4;
  }
}
.main-slider__img{
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.main-slider__container{
  height: 62.6em;
  width: 100%;
}
.main-slider-content__link, .main-slider-content__link:visited{
  color: var(--white);
  &:hover,
  &:focus{
    color: var(--blue);
    &::v-deep svg{
      fill: var(--blue);
    }
  }
  &::v-deep svg{
    fill: var(--white);
  }
}
.main-slider__btn{
  display: block;
  padding: 0;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  opacity: 1;
  visibility: visible;
  transition: .3s;
  & svg{
    transition: inherit;
    display: block;
    width: 100%;
    height: 100%;
  }
  &.swiper-button-disabled{
    opacity: 0;
    visibility: hidden;
  }
}
.main-slider-content__controls{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 -15px;
}
</style>
