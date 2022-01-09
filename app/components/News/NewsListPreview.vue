<template>
  <div class="news-list">
    <div class="news-item" v-for="item in news" :key="item.slug">
      <SkeletonScaffold :primary="getColor('blue')">
        <div v-mCardImg class="news-item__img"></div>
        <div v-mBox v-mDark class="skeleton-date"></div>
        <div v-mBox v-mLight v-mRandomWidth></div>
        <div v-mBox v-mLight v-mRandomWidth></div>
        <div v-mBox v-mLight v-mRandomWidth></div>
      </SkeletonScaffold>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
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
  padding: 80px 0 60px;
}

.news-item {
  width: 31.3%;
  margin: 0 1% 40px;
  transition: .3s;
}

.skeleton-date {
  width: 30%;
  margin: 20px 0 30px;
}


@media (max-width: 1024px) {
  .news-item__img {
    max-height: 240px;
  }

  time.news-item__date {
    padding: 18px 0 9px;
  }

  h2.news-item__title {
  font-size: 2.1rem;
}
}

@media (max-width: 768px) {
  .news-list {
    padding: 60px 0 40px;
  }

  .news-item {
    width: 48%;
    margin: 0 1% 20px;
  }

  h2.news-item__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .news-list {
    padding: 40px 0 20px;
  }

  .news-item {
    width: 100%;
    margin: 0 0 20px;
  }
}
</style>
