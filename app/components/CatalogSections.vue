<template>
  <div class="catalog-sections container">
    <client-only>
      <CatalogSectionsSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CatalogSectionsContent 
      v-if="!isEmpty(catalogSections) && !isEmptyArr(catalogSections.categories) && !getStateSkeleton()" 
      :catalogSections="catalogSections"
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    catalogSections: Object
  }
}
</script>

<style lang="scss" scoped>
.catalog-sections{
  font-size: 1rem;
  padding: 8em 15px 9.6em;
}
@media screen and (max-width: 1366px) {
  .catalog-sections{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .catalog-sections{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .catalog-sections{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .catalog-sections{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .catalog-sections{
    font-size: .5rem;
    padding: 4.8em 15px 11.2em;
  }
}
</style>
