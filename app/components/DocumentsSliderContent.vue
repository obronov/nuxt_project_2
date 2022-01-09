<template>
  <section class="sertificates">
    <div class="sertificates__inner container">
      <div class="sertificates__info">
        <h2 class="sertificates__title" v-if="documents.title" v-html="cnangeColorTitle(15, documents.title)"></h2>
        <Link class="portfolio__link" :url="getRootLink() + 'company/documents'" :text="documents.link_name" direction="right"/>
      </div>
  
      <div class="sertificates__slider">
        <div class="sertificates__slider-inner">
          <swiper class="slider__container" :options="swiperOptions" >
            <swiper-slide class="slider__item" v-for="(item, index) in documents.items" :key="index">
              <Photoswipe :options="pswipeOptions">
                <div class="sertificates-preview">
                  <svg class="sertificates-preview__icon" width="49" height="64" viewBox="0 0 49 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.2006 15.549L33.201 0.549375C32.8509 0.199125 32.373 0 31.875 0H5.625C2.52338 0 0 2.52338 0 5.625V58.375C0 61.4766 2.52338 64 5.625 64H43.125C46.2266 64 48.75 61.4766 48.75 58.375V16.875C48.75 16.3638 48.5354 15.8836 48.2006 15.549ZM33.75 6.40163L42.3484 15H35.625C34.5911 15 33.75 14.1589 33.75 13.125V6.40163ZM43.125 60.25H5.625C4.59113 60.25 3.75 59.4089 3.75 58.375V5.625C3.75 4.59113 4.59113 3.75 5.625 3.75H30V13.125C30 16.2266 32.5234 18.75 35.625 18.75H45V58.375C45 59.4089 44.1589 60.25 43.125 60.25Z" />
                    <path d="M35.625 26.5H13.125C12.0895 26.5 11.25 27.3395 11.25 28.375C11.25 29.4105 12.0895 30.25 13.125 30.25H35.625C36.6605 30.25 37.5 29.4105 37.5 28.375C37.5 27.3395 36.6605 26.5 35.625 26.5Z" />
                    <path d="M35.625 34H13.125C12.0895 34 11.25 34.8395 11.25 35.875C11.25 36.9105 12.0895 37.75 13.125 37.75H35.625C36.6605 37.75 37.5 36.9105 37.5 35.875C37.5 34.8395 36.6605 34 35.625 34Z" />
                    <path d="M35.625 41.5H13.125C12.0895 41.5 11.25 42.3395 11.25 43.375C11.25 44.4105 12.0895 45.25 13.125 45.25H35.625C36.6605 45.25 37.5 44.4105 37.5 43.375C37.5 42.3395 36.6605 41.5 35.625 41.5Z" />
                    <path d="M28.125 49H13.125C12.0895 49 11.25 49.8395 11.25 50.875C11.25 51.9105 12.0895 52.75 13.125 52.75H28.125C29.1605 52.75 30 51.9105 30 50.875C30 49.8395 29.1605 49 28.125 49Z" />
                  </svg>
                  <p class="sertificates-preview__caption" >{{item.title}}</p>
                  <div class="sertificates-preview__link" v-pswp="item.img_src"></div>
                </div>
              </Photoswipe>
              
            </swiper-slide>
          </swiper>
        </div>
        <div class="slider__nav" v-show="showNav">        
          <button class="slider-btn prev" type="button">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66292 19.322C3.66314 19.5706 3.76205 19.8089 3.93792 19.9845L12.6879 28.7345C12.9291 28.969 13.277 29.057 13.6006 28.9654C13.9242 28.8737 14.1744 28.6164 14.2569 28.2904C14.3393 27.9643 14.2416 27.619 14.0004 27.3845L5.93792 19.322L14.0004 11.2595C14.2512 11.0258 14.3545 10.6738 14.2697 10.3417C14.1848 10.0095 13.9254 9.75012 13.5933 9.66529C13.2611 9.58047 12.9091 9.68371 12.6754 9.93453L3.92542 18.6845C3.76012 18.856 3.66627 19.0839 3.66292 19.322Z" />
              <path d="M3.6748 19.3223C3.68154 19.8372 4.09735 20.253 4.6123 20.2598L23.3623 20.2598C23.6972 20.2598 24.0067 20.0811 24.1742 19.791C24.3417 19.501 24.3417 19.1436 24.1742 18.8535C24.0067 18.5635 23.6972 18.3848 23.3623 18.3848L4.6123 18.3848C4.09735 18.3915 3.68154 18.8073 3.6748 19.3223Z" />
              <path d="M3.66292 19.322C3.66314 19.5706 3.76205 19.8089 3.93792 19.9845L12.6879 28.7345C12.9291 28.969 13.277 29.057 13.6006 28.9654C13.9242 28.8737 14.1744 28.6164 14.2569 28.2904C14.3393 27.9643 14.2416 27.619 14.0004 27.3845L5.93792 19.322L14.0004 11.2595C14.2512 11.0258 14.3545 10.6738 14.2697 10.3417C14.1848 10.0095 13.9254 9.75012 13.5933 9.66529C13.2611 9.58047 12.9091 9.68371 12.6754 9.93453L3.92542 18.6845C3.76012 18.856 3.66627 19.0839 3.66292 19.322Z" />
              <path d="M4 19.3223C4.01044 19.8715 4.65559 20.3151 5.45454 20.3223L34.5455 20.3223C35.0651 20.3223 35.5453 20.1317 35.8051 19.8223C36.065 19.5129 36.065 19.1317 35.8051 18.8223C35.5453 18.5129 35.0651 18.3223 34.5455 18.3223L5.45454 18.3223C4.65559 18.3294 4.01044 18.773 4 19.3223Z" />
            </svg>
          </button>
          <button class="slider-btn next" type="button">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.3371 19.322C36.3369 19.5706 36.2379 19.8089 36.0621 19.9845L27.3121 28.7345C27.0709 28.969 26.723 29.057 26.3994 28.9654C26.0758 28.8737 25.8256 28.6164 25.7431 28.2904C25.6607 27.9643 25.7584 27.619 25.9996 27.3845L34.0621 19.322L25.9996 11.2595C25.7488 11.0258 25.6455 10.6738 25.7303 10.3417C25.8152 10.0095 26.0746 9.75012 26.4067 9.6653C26.7389 9.58047 27.0909 9.68371 27.3246 9.93453L36.0746 18.6845C36.2399 18.856 36.3337 19.0839 36.3371 19.322V19.322Z" />
              <path d="M36.3252 19.3223C36.3185 19.8372 35.9026 20.253 35.3877 20.2598L16.6377 20.2598C16.3028 20.2598 15.9933 20.0811 15.8258 19.791C15.6583 19.501 15.6583 19.1436 15.8258 18.8535C15.9933 18.5635 16.3028 18.3848 16.6377 18.3848L35.3877 18.3848C35.9026 18.3915 36.3185 18.8073 36.3252 19.3223V19.3223Z" />
              <path d="M36.3371 19.322C36.3369 19.5706 36.2379 19.8089 36.0621 19.9845L27.3121 28.7345C27.0709 28.969 26.723 29.057 26.3994 28.9654C26.0758 28.8737 25.8256 28.6164 25.7431 28.2904C25.6607 27.9643 25.7584 27.619 25.9996 27.3845L34.0621 19.322L25.9996 11.2595C25.7488 11.0258 25.6455 10.6738 25.7303 10.3417C25.8152 10.0095 26.0746 9.75012 26.4067 9.6653C26.7389 9.58047 27.0909 9.68371 27.3246 9.93453L36.0746 18.6845C36.2399 18.856 36.3337 19.0839 36.3371 19.322V19.322Z" />
              <path d="M36 19.3223C35.9896 19.8715 35.3444 20.3151 34.5455 20.3223L5.45455 20.3223C4.93489 20.3223 4.4547 20.1317 4.19487 19.8223C3.93504 19.5129 3.93504 19.1317 4.19487 18.8223C4.4547 18.5129 4.93489 18.3223 5.45455 18.3223L34.5455 18.3223C35.3444 18.3294 35.9896 18.773 36 19.3223V19.3223Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    documents: Object
  },
    data() {
    return {
      showNav: true,
      pswipeOptions: {
        bgOpacity: 0.6,
        counterEl: false,
        fullscreenEl: false,
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        clickToCloseNonZoomable: false,
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
      },
      swiperOptions: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        watchOverflow: true,
        spaceBetween: 10,
        autoHeight: true,
        grabCursor: true,
        speed: 900,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        breakpoints:{
          320:{
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          480:{
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          600:{
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1140:{
            slidesPerView: 5,
            slidesPerGroup: 5,
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  }
}
</script>

<style lang="scss" scoped>
.sertificates__inner{
  display: grid;
  grid-template-columns: 285px 1fr;
  grid-gap: 0 2em;
}
.sertificates__title{
  margin: 0 0 .8em;
  &::v-deep b{
    color: var(--gray)
  }
}
.slider__container{
  width: 100%;
  min-width: 0;
  min-height: 0;
} 


.sertificates__slider-inner{
  display: grid;
  width: 100%;
  margin: 0 0 0 auto;
}

.sertificates-preview__icon{
  display: block;
  width: 4.9em;
  height: 6.4em;
}
.sertificates-preview{
  padding: 2.4em;
  display: grid;
  grid-template-rows: auto auto;
  align-items: start;
  grid-gap: .5em 0;
  transition: .3s;
  background: var(--white);
  position: relative;
  height: 25.1em;
  margin: 0 auto;
  & svg{
    display: block;
    width: 4.9em;
    height: 6.4em;
    fill: var(--gray);
    transition: inherit;
  }
  &:hover,
  &:focus{
    background: var(--blue);
    & svg{
      fill: var(--white);
    }
    .sertificates-preview__caption{
      color: var(--white);
    }
  }
}
.sertificates-preview__caption{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 12px;
  line-height: 1.16;
  color: var(--gray);
  transition: inherit;
  align-self: end;
  margin: 0;
}
.sertificates-preview__link{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider__nav{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 0 2em;
  align-items: center;
  justify-content: end;
  margin: 2.7em 0 0 auto;
  &:before{
    content: '';
    display: block;
    width: calc(100% - .9em);
    height: 1px;
    background: var(--gray);
    margin: 0 .9em 0 0;
  }
}
.slider-btn{
  display: block;
  border: none;
  background: none;
  padding: 0;
  width: 4em;
  height: 4em;
  font-size: 1em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--blue);
    transition: .3s;
  }
  &:hover,
  &:focus{
    & svg{
      fill: var(--dark_gray);
    }
  }
  &.swiper-button-disabled{
    opacity: .4;
  }
}


@media screen and (max-width: 992px) {
  .sertificates__inner{
    display: block;
  }
  .sertificates__info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 32px;
    & .portfolio__link, .portfolio__link:visited{
      font-size: 1.4rem;
    }
  }
  .sertificates__title{
    margin: 0;
    max-width: 7em;
  }
  .sertificates-preview{
    padding: 15px;
    height: 211px;
  }
  .sertificates-preview svg{
    width: 40px;
    height: 52px;
  }
  .slider-btn{
    width: 24px;
    height: 24px;
  }
}

@media screen and (max-width: 576px) {
  .sertificates__info{
    & .portfolio__link, .portfolio__link:visited{
      font-size: 10px;
      line-height: 2.8;
    }
  }
  .slider__nav{
    margin: 3em 0 0 auto;
  }
}
</style>
