<template>
  <div class="content-wysiwyg-slider">
    <div class="slider__wrapper">

      <swiper class="slider__container" :options="swiperOptions">
        <swiper-slide class="slider__item" v-for="(item, index) in info.items" :key="index">
          <img :src="item.src" :alt="item.alt">
        </swiper-slide>
      </swiper>

      <div class="slider__nav" v-if="showNav">        
        <button class="btn btn-circle" type="button" :class="`prev_${idSlider}`">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.72955 12C3.72973 12.1988 3.80886 12.3895 3.94955 12.53L10.9496 19.53C11.1425 19.7176 11.4208 19.788 11.6797 19.7147C11.9386 19.6414 12.1387 19.4355 12.2047 19.1747C12.2707 18.9138 12.1925 18.6376 11.9996 18.45L5.54955 12L11.9996 5.55C12.2002 5.36303 12.2828 5.08145 12.2149 4.81571C12.1471 4.54998 11.9396 4.34248 11.6738 4.27462C11.4081 4.20676 11.1265 4.28935 10.9396 4.49L3.93955 11.49C3.80732 11.6272 3.73224 11.8095 3.72955 12Z" />
            <path d="M3.73828 12C3.74367 12.412 4.07632 12.7446 4.48828 12.75L19.4883 12.75C19.7562 12.75 20.0038 12.6071 20.1378 12.375C20.2718 12.1429 20.2718 11.8571 20.1378 11.625C20.0038 11.3929 19.7562 11.25 19.4883 11.25L4.48828 11.25C4.07632 11.2554 3.74367 11.588 3.73828 12Z" />
            <path d="M3.72955 12C3.72973 12.1988 3.80886 12.3895 3.94955 12.53L10.9496 19.53C11.1425 19.7176 11.4208 19.788 11.6797 19.7147C11.9386 19.6414 12.1387 19.4355 12.2047 19.1747C12.2707 18.9138 12.1925 18.6376 11.9996 18.45L5.54955 12L11.9996 5.55C12.2002 5.36303 12.2828 5.08145 12.2149 4.81571C12.1471 4.54998 11.9396 4.34248 11.6738 4.27462C11.4081 4.20676 11.1265 4.28935 10.9396 4.49L3.93955 11.49C3.80732 11.6272 3.73224 11.8095 3.72955 12Z" />
            <path d="M3.73828 12C3.74367 12.412 4.07632 12.7446 4.48828 12.75L19.4883 12.75C19.7562 12.75 20.0038 12.6071 20.1378 12.375C20.2718 12.1429 20.2718 11.8571 20.1378 11.625C20.0038 11.3929 19.7562 11.25 19.4883 11.25L4.48828 11.25C4.07632 11.2554 3.74367 11.588 3.73828 12Z" />
          </svg>
        </button>
        <button class="btn btn-circle" type="button" :class="`next_${idSlider}`">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2704 12C20.2703 12.1988 20.1911 12.3895 20.0504 12.53L13.0504 19.53C12.8575 19.7176 12.5792 19.788 12.3203 19.7147C12.0614 19.6414 11.8613 19.4355 11.7953 19.1747C11.7293 18.9138 11.8075 18.6376 12.0004 18.45L18.4504 12L12.0004 5.55C11.7998 5.36303 11.7172 5.08145 11.7851 4.81571C11.8529 4.54998 12.0604 4.34248 12.3262 4.27462C12.5919 4.20676 12.8735 4.28935 13.0604 4.49L20.0604 11.49C20.1927 11.6272 20.2678 11.8095 20.2704 12V12Z" />
            <path d="M20.2617 12C20.2563 12.412 19.9237 12.7446 19.5117 12.75L4.51172 12.75C4.24377 12.75 3.99617 12.6071 3.8622 12.375C3.72823 12.1429 3.72823 11.8571 3.8622 11.625C3.99617 11.3929 4.24377 11.25 4.51172 11.25L19.5117 11.25C19.9237 11.2554 20.2563 11.588 20.2617 12V12Z" />
            <path d="M20.2704 12C20.2703 12.1988 20.1911 12.3895 20.0504 12.53L13.0504 19.53C12.8575 19.7176 12.5792 19.788 12.3203 19.7147C12.0614 19.6414 11.8613 19.4355 11.7953 19.1747C11.7293 18.9138 11.8075 18.6376 12.0004 18.45L18.4504 12L12.0004 5.55C11.7998 5.36303 11.7172 5.08145 11.7851 4.81571C11.8529 4.54998 12.0604 4.34248 12.3262 4.27462C12.5919 4.20676 12.8735 4.28935 13.0604 4.49L20.0604 11.49C20.1927 11.6272 20.2678 11.8095 20.2704 12V12Z" />
            <path d="M20.2617 12C20.2563 12.412 19.9237 12.7446 19.5117 12.75L4.51172 12.75C4.24377 12.75 3.99617 12.6071 3.8622 12.375C3.72823 12.1429 3.72823 11.8571 3.8622 11.625C3.99617 11.3929 4.24377 11.25 4.51172 11.25L19.5117 11.25C19.9237 11.2554 20.2563 11.588 20.2617 12V12Z" />
          </svg>
        </button>
      </div>

      <div class="slider__pagination" v-if="showNav" slot="pagination"></div>

    </div>
    <div class="slider-description" v-html="info.description"></div>
  </div>
</template>

<script>
export default {
  props:{
    info: Object,
    idSlider: Number
  },
  data() {
    return {      
      swiperOptions: {
        grabCursor: true,
        speed: 900,
        navigation: {
          nextEl: `.next_${this.idSlider}`,
          prevEl: `.prev_${this.idSlider}`
        },
        pagination: {
          el: '.slider__pagination'
        },
      }
    }
  },
  computed: {
    showNav(){
      if(this.info.items != undefined && this.info.items != null && this.info.items.length > 1){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.swiper-button-disabled{
  cursor: not-allowed;
  background: var( --super_bright_gray);
  color: var(--gray);
  &:hover svg,
  &:focus svg,
  & svg{
    fill: var(--gray);
  }
}
.slider__pagination span.swiper-pagination-bullet {
  width: 5px;
  height: 5px;
  margin: 0 8px;
}
.slider-description{
  font-size: 1.4rem;
  line-height: 171%;
}
.slider__pagination span.swiper-pagination-bullet-active {
  background: var(--dark_blue);
}
.slider__wrapper {
  position: relative;
  display: grid;
  width: 100%;
  font-size: 1em;
}

.slider__container {
  position: relative;
  width: 100%;
}

.slider__item {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.slider__nav {
  position: absolute;
  bottom: 1.6em;
  right: 1.6em;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 0 1.2em;
  z-index: 10;
}

.slider__pagination {
  display: none;
  padding-top: 15px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .slider__wrapper {
    width: calc(100% + 30px);
    margin: 0 -15px;
  }

  .slider__nav {
    display: none;
  }

  .slider__pagination {
    display: block;
  }
}

@media screen and (max-width: 576px) {

  .slider__pagination {
    display: block;
  }
}
</style>
