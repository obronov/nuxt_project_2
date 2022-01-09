<template>
  <div class="directions">
    <client-only>
      <DirectionsListSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <DirectionsListContent 
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
  padding: 9em 0 9.6em;
  font-size: 1rem;
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
  }
}
@media screen and (max-width: 576px) {
  .directions{
    font-size: .5rem;
    padding: 4.8em 0 11.2em;
  }

}

</style>
