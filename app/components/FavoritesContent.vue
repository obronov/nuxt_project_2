<template>
  <div class="other-pages__wrapper">
    <div class="sidebar-title" >{{ info.page_settings.title_fav }}</div>

    <div class="other-pages">
      <div class="other-page" v-for="page in info.favorites.items" :key="page.slug">
        <NuxtLink class="other-page__title" :to="page.slug">{{ page.title }}</NuxtLink>
        <time class="other-page__date" v-if="page.date" :datetime="dateTimeFormat(page.date)">
          {{ new Date(page.date * 1000).toLocaleString($store.state.lang, {year: 'numeric', month: 'long', day: 'numeric'}) }}
        </time>
      </div>
    </div>

    <Link :url="url" :text="info.page_settings.link_name" direction="right"/>

  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props:{
    info: Object,
    url: String
  }
}

</script>

<style lang='scss' scoped>
.sidebar-title {
  margin-top: 0;
  font-family: var(--font-second);;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: var(--blue);
  margin: 0 0 1em;
}
.other-pages{
  margin: 0 0 16px;
}
.other-page {
  padding: 24px 0;
  border-top: 1px solid #e3e3e3;
  & :last-child{
    margin: 0;
  }
}
.other-page__title, .other-page__title:visited{
  color: var(--dark_gray);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.71;
  transition: .3s;
  text-decoration: none;
  margin: 0 0 .57em;
  display: inline-block;
}
.other-page__date{
  font-size: 12px;
  line-height: 1.16;
  color: var(--gray);
}
@media screen and (max-width: 992px) {
  .other-pages{
    margin: 0 0 8px;
  }
  .other-page{
    padding: 16px 0 24px;
  }
}
</style>