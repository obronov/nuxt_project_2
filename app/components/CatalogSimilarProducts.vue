<template>
  <div class="similar-products">
    <client-only>
      <CatalogSimilarProductsSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CatalogSimilarProductsContent 
      v-if="!isEmpty(info) && !isEmptyArr(info.similar_products) && !getStateSkeleton()" 
      :info="info"
      />
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

.similar-products{
  padding: 8em 0 9.6em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .similar-products{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .similar-products{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .similar-products{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .similar-products{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .similar-products{
    font-size: .5rem;
    padding: 6.4em 0 5.6em;
  }

}

</style>
