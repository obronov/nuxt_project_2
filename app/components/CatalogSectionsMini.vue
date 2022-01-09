<template>
  <div>
    <client-only>
      <CatalogSectionsMiniSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CatalogSectionsMiniContent 
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

</style>
