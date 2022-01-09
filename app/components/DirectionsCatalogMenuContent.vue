<template>
  <div class="direction-catalog-menu">
    <div class="direction-catalog-menu__title">{{infoMenu.page_info.title_menu}}</div>

    <Ul class="direction-catalog-menu__list">
      <li 
        class="direction-catalog-menu__list-item" 
        v-for="item in infoMenu.catalog_menu" :key="item.slug"
      >
        <NuxtLink 
          class="direction-catalog-menu__link-item"
          :to="'/catalog/' + infoMenu.slug + '/' + item.slug">
          {{item.name}}
        </NuxtLink>
      </li>
    </Ul>

    <Link class="direction-catalog-menu__link" :url="'/catalog/' + infoMenu.slug" :text="infoMenu.page_info.link_name_catalog" direction="right"/>
    
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
.direction-catalog-menu__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 16px;
  line-height: 1,5;
  color: var(--blue);
  margin: 0 0 1.5em;
}
.direction-catalog-menu__list{
  margin: 0;
  font-size: 1rem;
}
.direction-catalog-menu__list-item{
  margin: 0 0 1.4em;
  &:last-child{
    margin: 0;
  }
}
.direction-catalog-menu__link-item, .direction-catalog-menu__link-item:visited{
  font-size: 14px;
  line-height: 24px;
  color: var(--dark_gray);
  text-decoration: none;
}
.direction-catalog-menu__link{
  margin: 2em 0 0;
}
</style>
