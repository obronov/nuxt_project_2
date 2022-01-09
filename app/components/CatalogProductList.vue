<template>
  <ul class="products-items">
    <li class="products-items__item" v-for="item in products" :key="item.uuid">
      <CatalogProductPreview :info="item"/>
    </li>
  </ul>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    products: Array
  }
}

</script>

<style lang='scss' scoped>
.products-items{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  font-size: 1em;
  margin: 0;
}
.products-items__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}

@media screen and (max-width: 576px) {
  .products-items{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6em;
  }
}
</style>