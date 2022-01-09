<template>
  <div>
      <SkeletonScaffold :primary="getColor('super_bright_gray')">
        <div v-mBox v-mDark class="skeleton-title"></div>
        <div class="news-detail__date">
          <div v-mBox v-mDark class="skeleton-date"></div>
        </div>
        <div class="news-detail__text">
          <div v-mBox v-mLight v-mRandomWidth></div>
          <div v-mBox v-mLight v-mRandomWidth></div>
          <div v-mBox v-mLight v-mRandomWidth></div>
          <div v-mBox v-mLight v-mRandomWidth></div>
          <div v-mBox v-mLight class="skeleton-img"></div>
        </div>
      </SkeletonScaffold>
  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global]
}
</script>

<style lang='scss' scoped>

.skeleton-title {
  height: 4em;
}

.skeleton-date {
  width: 10em;
}

.skeleton-img {
  position: relative;
  height: 30em;
  margin-top: 4em;
}

.news-detail__date {
  color: var(--gray);
}

.news-detail__text {
  padding-top: 2em;
}

@media (max-width: 992px) {

  .skeleton-img {
    height: 15em;
  }
}

</style>
