<template>
  <section>
    <div class="portfolio__inner ">
      <div class="portfolio__header-isMobile container" v-if="!$device.isDesktop">
        <h2 class="portfolio__title" v-if="portfolio.title" v-html=" cnangeColorTitle(30, portfolio.title)"></h2>
        <Link class="portfolio__link" :url="getRootLink() + 'company/portfolio/'" :text="portfolio.link_name" direction="right"/>
      </div>
      <ul class="portfolio-list container" :class="{isMobile: !$device.isDesktop}">
        <li class="portfolio-list__item" v-if="$device.isDesktop" :class="{isMobile: !$device.isDesktop}">
          <h2 class="portfolio__title" v-if="portfolio.title" v-html=" cnangeColorTitle(30, portfolio.title)"></h2>
          <Link class="portfolio__link" :url="getRootLink() + 'company/portfolio/'" :text="portfolio.link_name" direction="right"/>
        </li>
        <li class="portfolio-list__item" v-for="preview in portfolio.items" :key="preview.slug">
          <NuxtLink class="portfolio-preview" :to="getRootLink() + 'company/portfolio/' + preview.slug">
            <div class="portfolio-preview__img">
              <img :src="preview.img_src" :alt="preview.img_alt" loading='lazy'>
            </div>
            <time class="portfolio-preview__date"
              :datetime="dateTimeFormat(preview)"
            >
              {{ new Date(preview.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day:'numeric'}) }}
            </time>
            <div class="portfolio-preview__title">{{preview.title}}</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    portfolio: Object
  }
}

</script>

<style lang='scss' scoped>
.portfolio__title{
  margin: 0 0 .65em;
  &::v-deep b{
    color: var(--gray)
  }
}

.portfolio__inner{
  max-width: 1440px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: 0 163px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZUAAAE+CAYAAABFgI0WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARPSURBVHgB7d3BTQNBEAXRhZyJj9AMIoZya4Z+T/L1X0tz8PbzfH2//n4Ve/bs2bN35t6AzwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg7N5/t2bNnb8feADfqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABggJvP9uw99uyt2BvgRj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxw89mePXv2duwNcKMeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGuPlsz549ezv2BrhRDwAAAAAAAAAAAAAAAAAAAAAAADM+Ht7u9esBWMAHJQHIiAoAGVEBICMqAGREBYCMqACQ+XTz+bA9gIt5qQCQ8efHAf78CGzhpQJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQMaN+tP2AC7mpQJAxo36AW7UA1t4qQCQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkHGj/rQ9gIt5qQCQcaN+gBv1wBZeKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZNyoP20P4GJeKgBk3Kgf4EY9sIWXCgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGTfqT9sDuJiXCgAZN+oHuFEPbOGlAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJAxo360/YALualAkDGjfoBbtQDW3ipAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQcaP+tD2Ai3mpAJBxo36AG/XAFl4qAGREBYCMqACQERUAMqICQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBk3Kg/bQ/gYl4qAGTcqB/gRj2whZcKABlRASAjKgBkRAWAjKgAkBEVADKiAkBGVADIiAoAGVEBICMqAGREBYCMqACQERUAMqICQEZUAMiICgAZN+pP2wO4mJcKABk36ge4UQ9s4aUCQEZUAMiICgAZUQEgIyoAZEQFgIyoAJARFQAyogJARlQAyIgKABlRASAjKgBkRAWAjKgAkBEVADKiAkDGjfrT9gAu5qUCQMaN+gFu1ANbeKkAkBEVADKiAkBGVADIiAoAAAAAAAAAAAAAAAAAAAAAAAAAwHXclLdnz569HXsDfKUYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/5wdmbf7ScnHhxQAAAABJRU5ErkJggg==');
}
.portfolio-list{
  font-size: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2em 2em;
  &.isMobile{
    display: flex;
    flex-flow: row nowrap;
    grid-gap: 0;
    margin: 0;
    overflow-x: auto;
    width: 100vw;
    padding: 0 15px 0 7.5px;
    & .portfolio-list__item{
      width: 269px;
      margin: 0 7.5px;
      flex: none;
      & .portfolio-preview__img{
        height: 170px;
      }
    }
  }
}

.portfolio-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
  &:nth-of-type(1){
    grid-row: 1;
    grid-column: 1;
  }
  &:nth-of-type(2){
    grid-row: 1;
    grid-column: 2/4; 
    & .portfolio-preview__img{
      height: 20.4em;
    }
  }
  &:nth-of-type(3){
    grid-row: 1/3;
    grid-column: 4;
    & .portfolio-preview__img{
      height: 48em;
    }
  }
  &:nth-of-type(4){
    grid-row: 2;
    grid-column: 1;
  }
  &:nth-of-type(5){
    grid-row: 2;
    grid-column: 2;
  }
  &:nth-of-type(6){
    grid-row: 2;
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
.portfolio__link{
  font-size: 1.6em;
}
.portfolio__header-isMobile{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 32px;
}
@media screen and (max-width: 1440px) {
  .portfolio__inner{
    background: none;
  }
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
  .portfolio__title{
    margin: 0;
  }
  .portfolio-preview__title{
    font-size: 18px;
    line-height: 1.11;
  }
  .portfolio-preview__date{
    font-size: 14px;
    margin: 1.14em 0 0;
    line-height: 1.71;
  }
  .portfolio-list{
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-preview__img{
    height: 20.4em;
  }
  .portfolio-list__item{
    &:nth-of-type(1){
      grid-row: 1;
      grid-column: 1/3;
      & .portfolio-preview__img{
        height: 20.4em;
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6){
      grid-row: initial;
      grid-column: initial;
      & .portfolio-preview__img{
        height: 20.4em;
      }
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
      grid-row: initial;
      grid-column: initial;
    }
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6){
      & .portfolio-preview__img{
        height: 34em;
      }
    }
  }
  .portfolio__link{
    font-size: 2em;
  }
}
</style>