<template>
  <ul class="categories">
    <li class="categories__item" v-for="item in categories" :key="item.slug">
      <NuxtLink class="categories-preview" :to="$route.path + '/' + item.slug">
        <div class="categories-preview__wrap-img">
          <img class="categories-preview__img" :src="item.img_src" :alt="item.img_alt">
        </div>
        <div class="categories-preview__name">{{item.name}}</div>
        <svg class="categories-preview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
          <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
          <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
        </svg>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    categories: Array
  }
}

</script>

<style lang='scss' scoped>
.categories{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin: 0 0 7.2em;
  padding: 0;
  font-size: 1em;
}
.categories__item{
  margin: 0;
  padding: 0;
  &:before{
    display: none;
  }
}
.categories-preview, .categories-preview:visited{
  font-size: 1.6em;
  line-height: 1;
  color: var(--dark_gray);
  border: 1.5px solid var(--super_bright_gray);
  transition: .3s;
  font-weight: bold;
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1em;
  padding: 1.5em 1.25em;
  position: relative;
  height: 100%;
  &:hover,
  &:focus{
    color: var(--blue);
    border-color: var(--blue);
    .categories-preview__icon{
      fill: var(--blue)
    }
  }
}
.categories-preview__img{
  display: block;
  width: 100%;
  margin: 0 auto;
}
.categories-preview__wrap-img{
  padding: 1.125em 1.4375em;
}
.categories-preview__icon{
  position: absolute;
  top: 1em;
  right: 1em;
  display: block;
  width: 1.5em;
  height: 1.5em;
  fill: transparent;
  transition: .3s;
}
@media screen and (max-width: 768px) {
  .categories-preview, .categories-preview:visited{
    font-size: 12px;
    line-height: 1.33;
    padding: .66em;
    text-align: center;
    grid-gap: 16px;    
  }
  .categories-preview__wrap-img{
    padding: 1.8em  1.8em 0;
  }
  .categories{
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .categories{
    margin: 0 0 6.4em;
  }
  .categories-preview__wrap-img{
    padding: 0;
  }
}
</style>