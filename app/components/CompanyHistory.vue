<template>
  <div class="company-history">
    <client-only>
      <CompanyHistorySkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CompanyHistoryContent v-if="!isEmpty(history) && !isEmptyArr(history.years) && !getStateSkeleton()" :history="history"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    history: Object
  }
}
</script>

<style lang="scss" scoped>
.company-history{
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .company-history{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .company-history{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .company-history{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .company-history{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .company-history{
    font-size: .5rem;
    padding: 0 0 6.4em;
  }

}

</style>
