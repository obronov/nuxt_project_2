<template>
  <ul class="catalog-sections-content">
    
    <li class="catalog-sections-content__item" 
      v-for="item in catalogSections.categories" 
      :key="item.slug"
    >
      <CatalogSectionsPreviewMini 
        :class="{isOpen: showMenu == item.slug}" 
        :catalogSectionPreview="item" 
        @clickBtn="viewSubCategories(item.slug)"
      />
    </li>
    
  </ul>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props:{
    catalogSections: Object
  },
  data(){
    return{
      showMenu: null
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-sections-content{
  font-size: 1em;
  padding: 0;
  margin: 0;  
  border: 1.5px solid var(--super_bright_gray);
}
.catalog-sections-content__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.catalog-link {
  height: 100%;
}
@media screen and (max-width: 768px) {
  .catalog-sections-content{
    display: none;
  }
}
</style>
