<template>
  <div class="detail-info-text">
    <div class="detail-info-text__description" v-if="text" v-html="text"></div>
    <div class="detail-info-text__wrap-img" v-if="img">
      <img class="detail-info-text__img" :src="img" :alt="alt"  loading="lazy">
    </div>
  </div>
</template>

<script>

export default {
  props:{
    text: String,
    img: String,
    alt: String,
  }
}

</script>

<style lang='scss' scoped>
.detail-info-text{
  display: grid;
  grid-template-columns: 8fr 3fr;
  grid-gap: 2em;
  justify-content: space-between;
}
.detail-info-text__description{
  &::v-deep *{
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}

.detail-info-text__img{
  display: block;
  max-width: 100%;
}
@media screen and (max-width: 992px) {
  .detail-info-text{
    grid-gap: 4.8em 0;
    grid-template-columns: 1fr;
  }
}

</style>