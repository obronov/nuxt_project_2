<template>
  <div class="portfolio" :class="{resetZindex: $store.state.toggleMenu}">
    <div class="portfolio-wrap-list" v-for="(item, index) in portfolioList" :key="'first' + index">
      <ul class="portfolio-list">
        <li class="portfolio-list__item" v-for="(preview, index) in item" :key="'second' + index" itemscope itemtype="https://schema.org/Article">
          <NuxtLink class="portfolio-preview" :to="$route.path + '/' + preview.slug">
            <div class="portfolio-preview__img">
              <img :src="preview.img_src" :alt="preview.img_alt" loading='lazy' itemprop="image">
            </div>
            <time class="portfolio-preview__date"
              itemprop="datePublished"
              :datetime="dateTimeFormat(preview)"
            >
              {{ new Date(preview.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day:'numeric'}) }}
            </time>
            <div class="portfolio-preview__title" itemprop="headline">{{preview.title}}</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    portfolioList: Array
  }
}

</script>

<style lang='scss' scoped>
.portfolio-list{
  font-size: 1em;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2em 2em;
}
.resetZindex {
  .portfolio-list__item{
    z-index: 1;
  }
}
.portfolio-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
  &:nth-of-type(1){
    grid-row: 1/3;
    grid-column: 1/3;
    & .portfolio-preview__img{
      height: 45.6em;
    }
  }
  &:nth-of-type(2){
    grid-row: 1;
    grid-column: 3/5;
  }
  &:nth-of-type(3){
    grid-row: 2;
    grid-column: 3;
  }
  &:nth-of-type(4){
    grid-row: 2;
    grid-column: 4;
  }
  &:nth-of-type(5){
    grid-row: 3;
    grid-column: 1;        
  }
  &:nth-of-type(6){
    grid-row: 3;
    grid-column: 2/4;
  }
  &:nth-of-type(7){
    grid-row: 3/5;
    grid-column: 4;
    & .portfolio-preview__img{
      height: 45.6em;
    }
  }
  &:nth-of-type(8){
    grid-row: 4;
    grid-column: 1;
  }
  &:nth-of-type(9){
    grid-row: 4;
    grid-column: 2;
  }
  &:nth-of-type(10){
    grid-row: 4;
    grid-column: 3;
  }
}
.portfolio-preview__img{
  position: relative;
  overflow: hidden;
  transition: inherit;
  height: 18em;
  & img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: inherit;
  }
  &:before{
    content: '';
    display: block;
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
}
.portfolio-preview, .portfolio-preview:visited{
  display: block;
  height: 100%;
  text-decoration: none;
  transition: .3s;
  &:hover,
  &:focus{
    & .portfolio-preview__img{
        & img{
          transform: scale(1.2);
        }
    }
    & .portfolio-preview__date{
      color: var(--blue);
    }
  }
}
.portfolio-preview__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 1;
  color: var(--blue);
}
.portfolio-preview__date{
  font-size: 14px;
  line-height: 1.71;
  color: var(--gray);
  margin: 1.14em 0 0;
  transition: inherit;
}
@media screen and (max-width: 992px) {
  .portfolio-preview__date{
    line-height: 1.14;
  }
  .portfolio-preview__date{
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .portfolio-preview__title{
    font-size: 18px;
    line-height: 1.33;
  }
  .portfolio-preview__date{
    font-size: 14px;
    margin: 1.14em 0 .28em;
  }
  .portfolio-list{
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-preview__img{
    height: 36em;
  }
  .portfolio-list__item{
    &:nth-of-type(1){
      grid-row: 1;
      grid-column: 1;
      & .portfolio-preview__img{
        height: 36em;
      }
    }
    &:nth-of-type(2){
      grid-row: 1;
      grid-column: 2;
    }
    &:nth-of-type(3){
      grid-row: 2;
      grid-column: 1;
    }
    &:nth-of-type(4){
      grid-row: 2;
      grid-column: 2;
    }
    &:nth-of-type(5){
      grid-row: 3;
      grid-column: 1;        
    }
    &:nth-of-type(6){
      grid-row: 3;
      grid-column: 2;
    }
    &:nth-of-type(7){
      grid-row: 4;
      grid-column: 1;
      & .portfolio-preview__img{
        height: 36em;
      }
    }
    &:nth-of-type(8){
      grid-row: 4;
      grid-column: 2;
    }
    &:nth-of-type(9){
      grid-row: 5;
      grid-column: 1;
    }
    &:nth-of-type(10){
      grid-row: 5;
      grid-column: 2;
    }
  }
}
@media screen and (max-width: 576px) {
  .portfolio-list{
    grid-template-columns: 1fr;
    grid-gap: 6.4em;
  }
  .portfolio-list__item{
    &:nth-of-type(1){
      grid-row: 1;
      grid-column: 1;
    }
    &:nth-of-type(2){
      grid-row: 2;
      grid-column: 1;
    }
    &:nth-of-type(3){
      grid-row: 3;
      grid-column: 1;
    }
    &:nth-of-type(4){
      grid-row: 4;
      grid-column: 1;
    }
    &:nth-of-type(5){
      grid-row: 5;
      grid-column: 1;        
    }
    &:nth-of-type(6){
      grid-row: 6;
      grid-column: 1;
    }
    &:nth-of-type(7){
      grid-row: 7;
      grid-column: 1;
    }
    &:nth-of-type(8){
      grid-row: 8;
      grid-column: 1;
    }
    &:nth-of-type(9){
      grid-row: 9;
      grid-column: 1;
    }
    &:nth-of-type(10){
      grid-row: 10;
      grid-column: 1;
    }
  }
}
</style>