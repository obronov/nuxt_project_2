<template>
  <div class="catalog-sections-content__wrap">
    <ul class="catalog-sections-content">
      
      <li class="catalog-sections-content__item" 
        v-if="index == 0 || index == 2" 
        v-for="(item, index) in catalogSections.categories" 
        :key="item.slug"
      >
        <CatalogSectionsPreview 
          :class="{isOpen: showMenu == item.slug}" 
          :catalogSectionPreview="item" 
          @clickBtn="viewSubCategories(item.slug)"
        />
      </li>
      
    </ul>

    <ul class="catalog-sections-content">

      <li class="catalog-sections-content__item" 
        v-if="index == 1 || index == 3" 
        v-for="(item, index) in catalogSections.categories" 
        :key="item.slug"
      >
        <CatalogSectionsPreview 
          :catalogSectionPreview="item" 
          :class="{'oneColumn': index == 1, isOpen: showMenu == item.slug}"
          @clickBtn="viewSubCategories(item.slug)"
        />
      </li>

      <li class="catalog-sections-content__item">
        <AppBigLink 
          class="catalog-link"
          v-if="!isEmpty(catalogSections.file_catalog) && catalogSections.file_catalog.title && catalogSections.file_catalog.src"
          :info="{                
            title: catalogSections.file_catalog.title,
            text: '',
            icon: 'download',
            url: catalogSections.file_catalog.src,
            targetBlank: false,
            regularLink : true,
            colorSchema: ''
          }"/>
      </li>
    </ul>

  </div>
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
.catalog-sections-content__wrap{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2em;
}

.catalog-sections-content{
  font-size: 1em;
  padding: 0;
  margin: 0;
  &:nth-of-type(1){
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2em;
  }
  &:nth-of-type(2){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 2em;
    & .catalog-sections-content__item{
      &:nth-of-type(1){
        grid-row: 1;
        grid-column: 1;
      }
      &:nth-of-type(2){
        grid-column: 1/3;
      }
      &:nth-of-type(3){
        grid-row: 1;
        grid-column: 2;
      }
    }
  }
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
  .catalog-sections-content__wrap{
    grid-template-columns: 1fr;
    grid-gap: 1.6em;
  }
  .catalog-sections-content{
    &:nth-of-type(1){
      display: grid;
      grid-template-rows: 1fr;
      grid-gap: 1.6em;
    }
    &:nth-of-type(2){
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: initial;
      grid-gap: 1.6em;
      & .catalog-sections-content__item{
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3){
          grid-row: initial;
          grid-column: initial;
        }
        &:nth-of-type(3){
          margin: 4.8em 0 0;
        }
      }
    }
  }
  .catalog-link{
    &::v-deep{
      .link{
        grid-template-rows: initial;
        grid-template-columns: auto auto;
        min-height: auto;
        padding: 1.4em;
        justify-content: center;
        grid-gap: 0 2em;
        align-items: center;
      }
      .link__header{
        padding: 0;
      }
      .link__title {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.75;
      }
      .link__footer{
        padding: 0;
        display: block;
        svg{
          margin: 0;
        }
        &:after{
          display: none;
        }
      }
    } 
  }
}
</style>
