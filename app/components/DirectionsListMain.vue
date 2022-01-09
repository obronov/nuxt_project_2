<template>
  <div class="directions" :class="{resetZindex: $store.state.toggleMenu, isMobile: !$device.isDesktop}">
    <client-only>
      <DirectionsListMainSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <DirectionsListMainContent 
      v-if="!isEmpty(directions) && !isEmptyArr(directions.items) && !getStateSkeleton()" 
      :directions="directions" 
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    directions: Object
  }
}
</script>

<style lang="scss" scoped>

.directions{
  padding: 0em 0 8em;
  font-size: 1rem;
  margin: -5em 0 0;
  position: relative;
  z-index: 10;
  &.resetZindex{
    z-index: 1;
  }
  &.isMobile{
    margin: 0;
    padding: 3em 0 6.4em;
  }
}
@media screen and (max-width: 1366px) {
  .directions{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .directions{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .directions{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .directions{
    font-size: .6rem;
    margin: 0;
    padding: 3em 0 8em;
  }
  
}
@media screen and (max-width: 576px) {
  .directions{
    font-size: .5rem;
    padding: 3em 0 6.4em;
  }

}

</style>
