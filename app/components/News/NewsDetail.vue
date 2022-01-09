<template>
  <div class="news-detail__wrapper">
    <div class="news-detail__content" itemscope itemtype="https://schema.org/Article">

      <h1 class="news-detail__title" itemprop="headline">{{ newsDetail.title }}</h1>

      <time class="news-detail__date" itemprop="datePublished" :datetime="dateTimeFormat(newsDetail)">
        {{ new Date(newsDetail.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day: 'numeric'}) }}
      </time>

      <ContentWysiwyg v-if="!isEmptyArr(newsDetail.content)" :content="newsDetail.content"/>


      <div class="page-nav">
        <div class="page-nav__prev" v-if="newsDetail.prev != null">
          <Link :url="`${newsDetail.prev}`" :text="translate('prev_news')" direction="left"/>
        </div>
        <div class="page-nav__next" v-if="newsDetail.next != null">
          <Link :url="`${newsDetail.next}`" :text="translate('next_news')" direction="right"/>
        </div>
      </div>

    </div>
    <div class="news-detail__sidebar">

      <div class="other-pages__wrapper" v-if="!isEmpty(newsDetail.favorites.items)">

        <p class="sidebar-title" >
          {{ newsDetail.page_settings.title_fav }}
        </p>

        <div class="other-pages">
          <div class="other-page" v-for="page in newsDetail.favorites.items" :key="page.slug">
            <NuxtLink :to="page.slug">
              <h3 class="other-page__title">{{ page.title }}</h3>
            </NuxtLink>
            <time class="other-page__date" :datetime="dateTimeFormat(page.date)">
              {{ new Date(page.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day: 'numeric'}) }}
            </time>
          </div>
        </div>

        <Link :url="getRootLink() + 'company/news'" :text="newsDetail.page_settings.link_name" direction="right"/>

      </div>

    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global],
  props: {
    newsDetail: Object    
  }
}
</script>

<style lang='scss' scoped>

.news-detail__wrapper{
  font-size: 1rem;
  display: grid;
  grid-template-columns: 8fr 1fr 3fr;
  grid-gap: 2em;
  margin: 0 auto 9.6em;
}

.news-detail__content{
  grid-column: 1;
}
.news-detail__sidebar{
  grid-column: 3;
}

.news-detail__back {
  padding: 26px 0;
}

.news-detail__title {
  margin-bottom: 16px;
  color: var(--blue);
}

time.news-detail__date {
  color: var(--gray);
}

.news-detail__text {
  padding-top: 20px;
}

.page-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #e3e3e3;
}

.sidebar-title {
  margin-top: 0;
  font-family: var(--font-second);;
  font-weight: 700;
  color: var(--blue);
}

.other-page {
  padding: 24px 0;
  border-top: 1px solid #e3e3e3;

  a {
    text-decoration: none;
  }
}

h3.other-page__title {
  margin-bottom: 8px;
  color: var(--dark_gray);
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.4rem;
  transition: .3s;

  &:hover {
    color: var(--blue);
  }
}

time.other-page__date {
  font-size: 1.2rem;
  color: var(--gray);
}

@media screen and (max-width: 1200px) {
  .news-detail__wrapper{
    font-size: .9rem;
    grid-template-columns: 9fr 3fr;
    margin: 0 auto;
  }

  .news-detail__sidebar{
    grid-column: 2;    
  }
}
@media screen and (max-width: 992px) {
  .news-detail__wrapper{
    font-size: .8rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }

  .news-detail__sidebar{
    grid-column: 1;
    padding: 32px 15px;
    margin: 40px -15px 0;
    background: var(--super_bright_gray);
    border-bottom: 1px solid var(--gray);
  }

}
@media screen and (max-width: 768px) {
  .news-detail__wrapper{
    font-size: .7rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}
@media screen and (max-width: 576px) {
  .news-detail__wrapper{
    font-size: .5rem;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}


</style>
