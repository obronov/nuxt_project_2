<template>
  <div class='portfolio'>
    <client-only>
      <PortfolioSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <PortfolioContent v-if="!isEmptyArr(portfolioList) && !getStateSkeleton()" :portfolioList="portfolioList"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    portfolioList: Array
  }
}
</script>

<style lang="scss" scoped>



</style>
