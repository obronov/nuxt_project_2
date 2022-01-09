<template>
  <div>
    <client-only>
      <TitleBoxSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <TitleBoxContent v-if="meta && !getStateSkeleton()" :meta="meta" :title="title"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    meta: Array,
    title: String
  }
}
</script>

<style lang="scss" scoped>


</style>
