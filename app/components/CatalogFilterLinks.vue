<template>
  <ul class="filter-links">
    <li class="filter-links__item" v-for="item in links" :key="item.slug">
      <NuxtLink class="filter-links__link" :to="$route.path + '?' + item.get_params">{{item.name}}</NuxtLink>
    </li>
  </ul>
</template>

<script>

export default {
  props:{
    links: Array
  }
}

</script>

<style lang='scss' scoped>
.filter-links{
  margin: 0 -2.8em;
  font-size: 1rem;
  display: flex;
  flex-flow: row wrap;
}
.filter-links__item{
  padding: 0;
  margin: 2.4em 2.8em 0;
  &:before{
    display: none;
  }
}
.filter-links__link, .filter-links__link:visited{
  text-decoration: none;
  font-size: 1.6em;
  line-height: 1.5;
  color: var(--dark_gray);
  &:hover,
  &:focus{
    color: var(--blue);
  }
}
</style>