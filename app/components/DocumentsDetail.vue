<template>
  <div class="documents-detail__wrapper">

    <div class="documents-detail__left">
      <h1 class="documents-detail__title" v-if="documentDetail.title" v-html="documentDetail.title"></h1>

      <div class="documents-detail__img documents-detail__img--mobile">
        <Photoswipe :options="pswipeOptions" v-if="documentDetail.img_thumb">
          <img :src="documentDetail.img_thumb" v-pswp="documentDetail.img_src" :alt="documentDetail.img_alt" loading='lazy'>
        </Photoswipe>
      </div>

      <ContentWysiwyg v-if="!isEmptyArr(documentDetail.content)" :content="documentDetail.content"/>
    </div>

    <div class="documents-detail__right">
      <div class="documents-detail__img documents-detail__img--desktop">
        <Photoswipe :options="pswipeOptions" v-if="documentDetail.img_thumb">
          <img :src="documentDetail.img_thumb" v-pswp="documentDetail.img_src" :alt="documentDetail.img_alt" loading='lazy'>
        </Photoswipe>
      </div>
    </div>

  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global],
  props: {
    documentDetail: Object
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

<style lang='scss' scoped>
.documents-detail__wrapper {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  padding: 0 0 8em;
}

.documents-detail__left {
  width: 75%;
  padding-right: 10%;
}

.documents-detail__title {
  margin: 0 0 1.4em;
  font-size: 4rem;
  color: var(--blue);
}
.documents-detail__img{
  & .pswipe-gallery{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
  & img{
    width: 100%;
  }
}
.documents-detail__img--mobile {
  display: none;
}

.documents-detail__right {
  width: 25%;
}

.documents-detail__img--desktop img {
  width: 100%;
}

@media (max-width: 1200px) {
  .documents-detail__title {
    font-size: 3.4rem;
  }
}

@media (max-width: 992px) {

  .documents-detail__left {
    width: 70%;
    padding-right: 5%;
  }

  .documents-detail__title {
    font-size: 2.4rem;
  }

  .documents-detail__right {
    width: 30%;
  }
  .documents-detail__wrapper {
    font-size: .8rem;
  }
}

@media (max-width: 768px) {

  .documents-detail__wrapper {
    font-size: .7rem;
  }

  .documents-detail__left {
    width: 100%;
    padding-right: 0;
  }

  .documents-detail__back {
    display: none;
  }

  .documents-detail__img--mobile {
    display: block;
    margin-bottom: 25px;

    div {
      text-align: center;

      img {
        max-width: 60%;
      }
    }
  }

  .documents-detail__right {
    display: none;
  }
}
@media (max-width: 576px) {
  .documents-detail__wrapper {
    font-size: .5rem;
  }
}
</style>
