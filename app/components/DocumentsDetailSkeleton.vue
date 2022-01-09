<template>
  <div class="documents-detail__wrapper">

    <SkeletonScaffold :primary="getColor('super_bright_gray')">
      <div class="skeleton-wrapper">
        <div class="skeleton-left">
          <div v-mBox v-mDark v-mRandomWidth class="skeleton-title"></div>
          <div v-mBox v-mDark v-mRandomWidth class="skeleton-title"></div>
          <div v-mBox v-mDark v-mRandomWidth class="skeleton-title"></div>
          <div v-mBox v-mLight class="skeleton-img-mobile"></div>
          <div class="skeleton-text">
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
            <div v-mBox v-mLight v-mRandomWidth></div>
          </div>
        </div>
        <div class="skeleton-right">
          <div v-mBox v-mLight class="skeleton-img-desktop"></div>
        </div>
      </div>
    </SkeletonScaffold>

  </div>
</template>

<script>
import global from '~/mixins/global'

export default {
  mixins: [global],
}
</script>

<style lang='scss' scoped>
.skeleton-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skeleton-left {
  width: 70%;
}

.skeleton-title {
  height: 3em;
}

.skeleton-img-mobile {
  display: none;
}

.skeleton-text {
  margin-top: 6em;
}

.skeleton-right {
  width: 25%;
}

.skeleton-img-desktop {
  width: 100%;
  height: 100%;
}


.documents-detail__wrapper {
  display: block;
  padding: 2.5em 0 8em;
  font-size: 1rem;
}


@media (max-width: 992px) {
  .skeleton-left {
    width: 70%;
    padding-right: 5%;
  }

  .skeleton-right {
    width: 30%;
  }
  .documents-detail__wrapper {
    font-size: .8rem;
  }
}

@media (max-width: 768px) {

  .skeleton-left {
    width: 100%;
    padding-right: 0;
  }

  .skeleton-right {
    display: none;
  }

  .skeleton-img-mobile {
    display: block;
    margin-top: 3em;
    min-height: 30em;
  }
  .documents-detail__wrapper {
    font-size: .5rem;
  }
}
</style>
