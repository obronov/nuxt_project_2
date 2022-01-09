<template>
  <div class="awards-content">
    <div class="awards-list">
      <SkeletonScaffold class="awards-item" v-for="item in items" :key="item.index" :primary="getColor('blue')">
        <div v-mSquare style="border-radius: 100%; margin: 10px auto;"></div>
        <div v-mBox v-mDark style="margin: 10px auto;"></div>
        <div v-mBox v-mLight style="margin: 10px auto;"></div>
        <div v-mBox v-mLight style="margin: 10px auto;"></div>
        <div v-mBox v-mLight style="margin: 10px auto;"></div>
      </SkeletonScaffold>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.awards-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
  padding: 80px 0 40px;
}

.awards-item {
  width: 14.6%;
  margin: 0 1% 25px 1%;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .awards-list {
    padding: 60px 0 30px;
  }

  .awards-item {
    width: 23%;
    margin: 0 1% 15px 1%;
  }
}

@media screen and (max-width: 576px) {
  .awards-list {
    padding: 30px 0;
    margin: 0 -2%;
  }

  .awards-item {
    width: 46%;
    margin: 0 2% 15px 2%;
  }
}
</style>
