<template>
  <div class="news-list">
    <div class="news-item" v-for="item in news" :key="item.slug" itemscope itemtype="https://schema.org/Article">
      <NuxtLink :to="`${getRootLink()}company/news/${item.slug}`">
        <div class="news-item__img">
          <img loading='lazy' :src="item.img_src" :alt="item.img_alt" itemprop="image">
        </div>
        <time class="news-item__date"
          itemprop="datePublished"
          :datetime="dateTimeFormat(item)"
        >
          {{ new Date(item.date * 1000).toLocaleString( $store.state.lang, {year: 'numeric', month: 'long', day:'numeric'}) }}
        </time>
        <h2 class="news-item__title" itemprop="headline">{{ item.title }}</h2>
        <meta itemprop="description" :content="item.title">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    news: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 -1%;
}

.news-item {
  width: 31.3%;
  margin: 0 1% 40px;
  transition: .3s;

  &:hover {
    .news-item__img img {
      opacity: 0.6;
      transform: scale(1.2);
    }

    time.news-item__date {
      color: var(--blue);
    }
  }

  a {
    display: block;
    color: var(--blue);
    text-decoration: none;
  }
}

.news-item__img {
  /* max-height: 310px; */
  height: 100%;
  background: #000;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    transition: .3s;
    display: block;
  }
}

time.news-item__date {
  margin: 0;
  padding: 28px 0 16px;
  font-size: 1.4rem;
  color: var(--gray);
  transition: .3s;
}

h2.news-item__title {
  margin-bottom: 0;
  font-size: 2.4rem;
  line-height: 120%;
}

@media (max-width: 1024px) {
  /* .news-item__img {
    max-height: 240px;
  } */

  time.news-item__date {
    padding: 18px 0 9px;
  }

  h2.news-item__title {
  font-size: 2.1rem;
}
}

@media (max-width: 768px) {

  .news-item {
    width: 48%;
    margin: 0 1% 30px;
  }

  time.news-item__date {
    padding: 16px 0 4px;
  }

  h2.news-item__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .news-item {
    width: 100%;
    margin: 0 0 30px;
  }

  /* .news-item__img {
    max-height: 180px;
  } */
}
</style>
