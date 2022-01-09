<template>
  <div class='portfolio'>
    <client-only>
      <PortfolioMainSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <PortfolioMainContent v-if="!isEmpty(portfolio) && !isEmptyArr(portfolio.items) && !getStateSkeleton()" :portfolio="portfolio"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    portfolio: Object
  }
}
</script>

<style lang="scss" scoped>

.portfolio{
  padding: 8em 0 6.8em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .portfolio{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .portfolio{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .portfolio{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .portfolio{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .portfolio{
    font-size: .5rem;
    padding: 6.4em 0;
  }

}

</style>
