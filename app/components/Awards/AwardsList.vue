<template>
  <div class="awards-content">
    <Photoswipe :options="pswipeOptions">
      <div class="awards-list">
        <div class="awards-item" v-for="(item, index) in items" :key="index">
          <img :src="item.thumb" v-pswp="item.src" :alt="item.alt">
        </div>
      </div>
    </Photoswipe>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data () {
    return {
      pswipeOptions: {
        bgOpacity: 0.6,
        counterEl: false,
        fullscreenEl: false,
        shareEl: false,
        zoomEl: false,
        closeOnScroll: false,
        clickToCloseNonZoomable: false,
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
      }
    }
  }
}
</script>

<style>
.pswp__ui--hidden .pswp__button--arrow--left,
.pswp__ui--hidden .pswp__button--arrow--right,
.pswp__ui--hidden .pswp__caption,
.pswp__ui--hidden .pswp__top-bar {
    opacity: 1 !important;
}

.pswp__ui--idle .pswp__top-bar {
  opacity: 1 !important;
}

.pswp__top-bar {
  background-color: transparent !important;
}

.pswp__button--close {
  right: 31px;
  top: 31px;
  background: url('~@/static/img/close.svg') 0 0 no-repeat !important;
  background-position: center !important;
  border-radius: 50%;
  opacity: 1 !important;
}

.pswp__button--close::before {
  content: '';
  position: absolute;
  left: -4px;
  top: -4px;
  z-index: -1;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #fff;
}

.pswp__button--arrow--left {
  left: 21px !important;
}

.pswp__button--arrow--left:before {
  height: 52px !important;
  width: 52px !important;
  background: url('~@/static/img/arrow-left.svg') center center no-repeat !important;
  background-color: var(--blue) !important;
  border-radius: 50%;
}

.pswp__button--arrow--right {
  right: 21px !important;
}

.pswp__button--arrow--right:before {
  height: 52px !important;
  width: 52px !important;
  background: url('~@/static/img/arrow-right.svg') center center no-repeat !important;
  background-color: var(--blue) !important;
  border-radius: 50%;
}

@media (max-width: 576px) {
  .pswp__button--close {
    right: 15px;
    top: 15px;
    width: 36px !important;
    height: 36px !important;
    background-size: 40% !important;
  }

  .pswp__button--close::before {
    left: 0;
    top: 0;
    width: 36px;
    height: 36px;
  }

  .pswp__button--arrow--left {
    left: 10px !important;
  }

  .pswp__button--arrow--left:before {
    height: 40px !important;
    width: 40px !important;
    background-size: 50% !important;
  }

  .pswp__button--arrow--right {
    right: 10px !important;
  }

  .pswp__button--arrow--right:before {
    height: 40px !important;
    width: 40px !important;
    background-size: 50% !important;
  }
}
</style>

<style lang="scss" scoped>
.awards-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
}

.awards-item {
  width: 14.6%;
  margin: 0 1% 25px 1%;
  cursor: pointer;
  border: 1px solid var(--bright_gray);
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: var(--white);
  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  img {
    width: 100%;
    transition: .3s;
  }
}

@media screen and (max-width: 768px) {
  .awards-item {
    width: 23%;
    margin: 0 1% 15px 1%;
  }
}

@media screen and (max-width: 576px) {
  .awards-list {
    margin: 0 -2%;
  }

  .awards-item {
    width: 46%;
    margin: 0 2% 15px 2%;
  }
}
</style>
