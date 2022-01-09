<template>
  <div class="short-info container">


    <div class="short-info__wrap-img" v-if="info.img_src_detail">
      <img class="short-info__img" 
        :src="info.img_src_detail" 
        :alt="info.img_alt_detail" 
        itemprop="image">
    </div>

    <div class="short-info__text" 
      v-if="info.short_description" 
      v-html="info.short_description" 
      itemprop="description"></div>

    <ul class="short-info__properties" v-if="!isEmptyArr(info.important_properties)">
      <li class="short-info__properties-item" v-for="(item, index) in info.important_properties" :key="index">{{item.property}}</li>
    </ul>

    <div class="short-info__price" v-if="info.price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <span v-html="info.price" itemprop="price"></span>
      <meta itemprop="priceCurrency" content="RUB"> 
    </div>

    <div class="short-info__btns">
      <AppBigButton 
        v-if="info.page_settings.btn_buy_name"
        :info="{                
          title: info.page_settings.btn_buy_name,
          text: '',
          icon: 'add',
          colorSchema: '',          
        }"
        @onClick="addProduct(
          {
            uuid: info.uuid,
            img_src_catalog: info.img_src_detail,
            name: info.name,
          }, 'ссылка')"
        />
      <AppBigLink 
        v-if="!isEmpty(info.file_catalog) && info.file_catalog.title && info.file_catalog.src"
        :info="{                
          title: info.file_catalog.title,
          text: '',
          icon: 'download',
          url: info.file_catalog.src,
          targetBlank: false,
          regularLink : true,
          colorSchema: 'gray'
        }"/>
    </div>

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

.short-info{
  margin: 6.8em auto 5.6em;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 38.7em 3.9fr 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 2.4em 2em;
}
.short-info__wrap-img{
  overflow: hidden;
  grid-row: 1/4;
  grid-column: 1;
}
.short-info__btns{
  grid-row: 1/4;
  grid-column: 4;
  display: grid;
  grid-gap: 2em 0;
  &::v-deep .link{
    min-height: 18.3em;
  }
}
.short-info__text{
  grid-column: 2;
  grid-row: 1;
  font-size: 14px;
  line-height: 1.71;
}
.short-info__properties{
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  padding: 0;
  font-size: 1em;

}
.short-info__price{
  grid-column: 2;
  grid-row: 3;
  font-family: var(--font-second);
  font-weight: bold;
  color: var(--blue);
  font-size: 2.4em;
  line-height: 1.33;
  margin: 0 0 2.125em;
  align-self: end;
}
.short-info__properties-item{
  font-family: var(--font-second);
  padding: 0;
  margin: 0 0 .5em;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  color: var(--blue);
  &:last-child{
    margin: 0;
  }
  &:before{
    display: none;
  }
}
.short-info__img{
  display: block;
  max-width: 38.7em;
  width: 100%;  
  border: 1.5px solid var(--super_bright_gray);
}

@media screen and (max-width: 1366px) {
  .short-info{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .short-info{
    font-size: .8rem;
  }
  .short-info{
    grid-template-columns: 38.7em 3.9fr 3fr;
  }
  .short-info__btns{
    grid-column: 3;
  }
}
@media screen and (max-width: 992px) {
  .short-info{
    font-size: .7rem;
    grid-template-columns: 38.7em 1fr;
  }
  .short-info__properties-item{
    font-size: 14px;
  }
  .short-info__text{
    grid-row: 1;
    grid-column: 2;
    line-height: 1.42;
  }
  .short-info__btns{
    grid-row: 4;
    grid-column: 1/3;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4em;
  }
  .short-info__price{
    margin: 0 0 1.125em;
  }
}
@media screen and (max-width: 768px) {
  .short-info{
    font-size: .6rem;
    grid-template-columns: 1fr;
    grid-gap: 4.8em;
  }
  
  .short-info__text{
    grid-column: initial;
    grid-row: 4;
  }

  .short-info__properties{
    grid-column: initial;
    grid-row: 5;
  }
  .short-info__btns{
    grid-column: initial;
    grid-row: 3;
  }
  .short-info__img{
    max-width: 64.5em;
    margin: 0 auto;
  }
  .short-info__price{
    margin: 0;
    grid-column: initial;
    grid-row: 2;
    font-size: 18px;
    line-height: 24px;
  }
  .short-info__wrap-img{
    grid-row: 1;
    grid-column: initial;
  }
}
@media screen and (max-width: 576px) {
  .short-info{
    font-size: .5rem;
    margin: 6.4em auto 9.6em;
  }
  .short-info__btns{
    grid-template-columns: 1fr;
    grid-gap: 1.6em;
    &::v-deep {
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