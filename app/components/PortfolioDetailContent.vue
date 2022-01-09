<template>
  <div itemscope itemtype="https://schema.org/Article">

    <h1 class="page-detail__title" itemprop="headline">{{ info.title }}</h1>

    <time class="page-detail__date" itemprop="datePublished" :datetime="dateTimeFormat(info)">
      {{ new Date(info.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day: 'numeric'}) }}
    </time>

    <ContentWysiwyg class='page-detail__content' v-if="!isEmptyArr(info.content)" :content="info.content"/>
    

    <div class="page-nav">
      <div class="page-nav__prev" v-if="info.prev != null">
        <Link :url="`${info.prev}`" :text="translate('prev_project')" direction="left"/>
      </div>
      <div class="page-nav__next" v-if="info.next != null">
        <Link :url="`${info.next}`" :text="translate('next_project')" direction="right"/>
      </div>
    </div>

  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global],
  props: {
    info: Object
  }
}
</script>

<style lang='scss' scoped>
.page-detail__content{
  margin: 40px 0 0;
}
.page-detail__title {
  margin: 0 0 .4em;
  font-size: 4rem;
  color: var(--blue);
}

.page-detail__date {
  color: var(--gray);
  font-size: 16px;
  line-height: 1.5;
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


@media (max-width: 992px) {

  .page-detail__title {
    font-size: 3.8rem;
  }

}

@media (max-width: 768px) {
  .page-detail__title {
    font-size: 2.4rem;
  }
  .page-nav {
    margin-top: 16px;
    padding-top: 24px;
  }
 .page-detail__content{
    margin: 24px 0 0;
  }
}
</style>
