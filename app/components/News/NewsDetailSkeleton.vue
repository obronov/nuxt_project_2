<template>
  <div class="news-detail__wrapper" :primary="getColor('blue')">
    <div class="news-detail__content">

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

    <div class="news-detail__sidebar">

      <SkeletonScaffold class="skeleton-sidebar" :primary="getColor('super_bright_gray')">
        <div class="sidebar-title" style="max-width: 160px; margin-bottom: 15px;">
          <div v-mBox v-mDark></div>
        </div>
        <div class="other-pages">
          <div class="other-page">
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mDark class="skeleton-date"></div>
          </div>
          <div class="other-page">
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mDark class="skeleton-date"></div>
          </div>
          <div class="other-page">
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mDark class="skeleton-date"></div>
          </div>
        </div>
      </SkeletonScaffold>
    </div>
  </div>
</template>

<script>
import global from '~/mixins/global'
import Link from '@/components/Link'

export default {
  mixins: [global],
  components: { Link }
}
</script>

<style lang='scss' scoped>
.skeleton-sidebar {
  margin-bottom: 20px;
}

.skeleton-title {
  height: 40px;
}

.skeleton-date {
  width: 100px;
}

.skeleton-img {
  position: relative;
  height: 300px;
  margin-top: 40px;
}

.news-detail__wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
  padding-bottom: 80px;
}

.news-detail__content {
  width: 73%;
  margin: 0 1%;
  padding-right: 10%;
}

.news-detail__back {
  padding: 26px 0;
}

.news-detail__title {
  margin-bottom: 16px;
  font-size: 4.8rem;
  color: var(--blue);
}

.news-detail__date {
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

.news-detail__sidebar {
  width: 23%;
  margin: 0 1%;
  padding-top: 80px;
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
}

.other-page__title {
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

.other-page__date {
  font-size: 1.2rem;
  color: var(--gray);
}

@media (max-width: 992px) {
  .news-detail__content {
    width: 68%;
    padding-top: 30px;
  }

  .news-detail__title {
    font-size: 3.8rem;
  }

  .news-detail__sidebar {
    width: 28%;
  }

  .skeleton-img {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .news-detail__back {
    display: none;
  }

  .news-detail__wrapper {
    padding-bottom: 0;
  }

  .news-detail__content {
    width: 100%;
    margin: 0;
    padding-right: 0;
  }

  .news-detail__title {
    margin-bottom: 8px;
    padding-top: 24px;
    font-size: 2.4rem;
  }

  .news-detail__sidebar {
    width: calc(100% + 30px);
    margin: 40px -15px 0 -15px;
    padding: 32px 15px;
    border-bottom: 1px solid #e3e3e3;
    background: var(--bright_gray);
  }
}
</style>
