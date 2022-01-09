<template>
  <div class="main-slider">
    <client-only>
      <MainSliderSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <MainSliderContent v-if="!isEmpty(info) && !isEmptyArr(info.items) && !getStateSkeleton()" :info="info"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.main-slider{
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .main-slider{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .main-slider{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .main-slider{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .main-slider{
    font-size: .6rem;
  }
}
@media screen and (max-width: 550px) {
  .main-slider{
    font-size: .5rem;
  }

}

</style>
