<template>
  <div>
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
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global]
}
</script>

<style lang='scss' scoped>

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

</style>
