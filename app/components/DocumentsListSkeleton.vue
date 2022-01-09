<template>
  <div class="documents-wrapper">
    <div class="container">
      <div class="documents-list">
        <div class="documents-item" v-for="(item, index) in [1,2,3]" :key="index">
          <SkeletonScaffold :primary="getColor('super_bright_gray')">
            <div class="text-skeleton">
              <div v-mBox v-mLight v-mRandomWidth></div>
              <div v-mBox v-mLight v-mRandomWidth></div>
              <div v-mBox v-mLight v-mRandomWidth></div>
              <div v-mBox v-mLight v-mRandomWidth></div>
              <div v-mBox v-mLight v-mRandomWidth></div>
            </div>
          </SkeletonScaffold>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
}
</script>

<style lang="scss" scoped>
.text-skeleton {
  padding: 40px 0;
}

.documents-wrapper {
    background: var(--bright_gray);
    padding: 80px 0;
}

.documents-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1% 20px -1%;
}

.documents-item {
  width: 31.3%;
  margin: 0 1% 30px 1%;
}

@media (max-width: 1200px) {
  .documents-item {
    margin-bottom: 20px;
  }
}

@media (max-width: 992px) {

  .documents-wrapper {
    padding: 60px 0;
  }

  .documents-item {
    width: 48%;
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {

  .documents-wrapper {
    padding: 40px 0;
  }
}

@media (max-width: 576px) {

  .documents-wrapper {
    padding: 30px 0;
  }

  .documents-item {
    width: 100%;
    margin: 0 0 15px;
  }
}
</style>
