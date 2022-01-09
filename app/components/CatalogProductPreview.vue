<template>
  <div class="product-preview">

    <NuxtLink class="product-preview__link" :to="'/catalog/' + info.category  + '/' + info.slug">
      <div class="product-preview__wrap-img">
        <img  class="product-preview__img" :src="info.img_src_catalog" :alt="info.img_alt_catalog" loading="lazy">
      </div>
      <div class="product-preview__name">{{info.name}}</div>
    </NuxtLink>

    <div class="product-preview__price">{{info.price}}</div>

    <button class="btn btn-circle product-preview__btn-add" type="button" @click="addProduct(info, '/catalog/' + info.category  + '/' + info.slug)">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9391 20.9771L11.9367 11.9374L20.9431 11.9732C21.4321 11.9373 21.8136 11.5313 21.8188 11.0412C21.8239 10.5511 21.4509 10.1423 20.9627 10.1028L11.9763 10.0206L12.0067 1.08024C12.0069 0.564414 11.5905 0.148047 11.0747 0.148264C10.8246 0.148087 10.5841 0.247797 10.4067 0.425239C10.2293 0.602681 10.1295 0.84316 10.1297 1.09325L10.0994 10.0203L1.09965 9.97791C0.849562 9.97773 0.609083 10.0774 0.431641 10.2549C0.254199 10.4323 0.154489 10.6728 0.154666 10.9229C0.154835 11.1722 0.254258 11.4105 0.43097 11.5852C0.602394 11.7587 0.835305 11.8579 1.07999 11.8615L10.0997 11.8972L10.0688 20.9967C10.069 21.246 10.1684 21.4843 10.3451 21.659C10.5192 21.8317 10.7547 21.9285 11.0008 21.9287C11.2509 21.9271 11.4907 21.8257 11.6669 21.647C11.8431 21.4684 11.9411 21.2272 11.9391 20.9771Z"/>
      </svg>
    </button>

    <svg class="product-preview__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
      <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
      <path d="M20.27 12C20.2698 12.1988 20.1907 12.3895 20.05 12.53L13.05 19.53C12.857 19.7176 12.5787 19.788 12.3198 19.7147C12.0609 19.6414 11.8608 19.4355 11.7948 19.1747C11.7288 18.9138 11.807 18.6376 12 18.45L18.45 12L12 5.55C11.7993 5.36303 11.7167 5.08145 11.7846 4.81571C11.8524 4.54998 12.0599 4.34248 12.3257 4.27462C12.5914 4.20676 12.873 4.28935 13.06 4.49L20.06 11.49C20.1922 11.6272 20.2673 11.8095 20.27 12Z"/>
      <path d="M20.2598 12C20.2544 12.412 19.9217 12.7446 19.5098 12.75L4.50977 12.75C4.24182 12.75 3.99422 12.6071 3.86025 12.375C3.72627 12.1429 3.72627 11.8571 3.86025 11.625C3.99422 11.3929 4.24182 11.25 4.50977 11.25L19.5098 11.25C19.9217 11.2554 20.2544 11.588 20.2598 12Z"/>
    </svg>

  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.product-preview{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  padding: 2em;
  border: 1.5px solid var(--super_bright_gray);
  position: relative;
  height: 100%;
  transition: .3s;
  &:focus-within,
  &:hover,
  &:focus{
    border-color: var(--blue);
    .product-preview__icon{
      fill: var(--blue)
    }
  }
}
.product-preview__link{
  grid-column: 1/3;  
  text-decoration: none;
}
.product-preview__name{
  font-size: 14px;
  line-height: 1.14;
  color: var(--dark_gray);
  margin: 0 0 2.42em;
  transition: inherit;
  &:focus{
    color: var(--blue);
  }
}
.product-preview__wrap-img{
  padding: 2.3em 2.3em 4.2em;
}
.product-preview__img{
  display: block;
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
}
.product-preview__price{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 16px;
  line-height: 1.25;
  color:var(--blue);
  align-self: center;
}
.product-preview__btn-add{
  font-size: 1.6em;
  align-self: center;
}
.product-preview__icon{
  position: absolute;
  top: 1.6em;
  right: 1.6em;
  display: block;
  width: 2.4em;
  height: 2.4em;
  fill: transparent;
  transition: inherit;
}
@media screen and (max-width: 768px) {
  .product-preview__name{
    font-size: 12px;
    line-height: 1.16;
    margin: 0 0 1em;
  }
  .product-preview__price{
    font-size: 14px;
    line-height: 1.14;
  }
}
@media screen and (max-width: 576px) {
  .product-preview{
    padding: 2.4em;
  }
  .product-preview__wrap-img{
    padding: 0 0 1.6em;
  }
  .product-preview__btn-add{
    font-size: 2.5em;
  }
}
</style>