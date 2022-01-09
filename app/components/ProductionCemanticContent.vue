<template>
  <div class="production-cemantic-content">
    <div class="production-cemantic-content__text" v-html="text"></div>
    <div class="production-cemantic-content__link">
      <AppBigLink :info="info"/>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props:{
    text: String,
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.production-cemantic-content{
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
  grid-gap: 0 2em;
}
.production-cemantic-content__text{
  &::v-deep *{
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}
.production-cemantic-content__link{
  grid-column: 3;
}
@media screen and (max-width: 992px){
  .production-cemantic-content{
    grid-template-columns: 9fr 3fr;
  }
  .production-cemantic-content__link{
    grid-column: 2;
  }
}
@media screen and (max-width: 768px){
  .production-cemantic-content{
    grid-template-columns: 1fr;
    grid-gap: 6.4em 0;
  }
  .production-cemantic-content__link{
    grid-column: 1;
    font-size: .6rem;
  }
}
</style>