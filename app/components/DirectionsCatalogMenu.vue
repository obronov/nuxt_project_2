<template>
  <div class="directions-catalog">
    <client-only>
      <DirectionsCatalogMenuSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <DirectionsCatalogMenuContent 
      v-if="!isEmpty(infoMenu) && !isEmptyArr(infoMenu.catalog_menu) && !getStateSkeleton()" 
      :infoMenu="infoMenu"
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    infoMenu: Object
  }
}
</script>

<style lang="scss" scoped>
 .directions-catalog{
    position: sticky;
    top: 100px;
    left: 0;
  }

</style>
