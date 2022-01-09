<template>
  <div>
    <client-only>
      <TabListSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <TabListContent v-if="!isEmptyArr(sections) && !getStateSkeleton()" :rootParam="rootParam" :getParam="getParam" :sections="sections"/>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props: {
    sections: Array,
    getParam: String,
    rootParam: String
  }
}
</script>

<style lang="scss" scoped>

</style>
