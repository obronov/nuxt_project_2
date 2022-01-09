<template>
  <div>
    <client-only>
      <TitleBoxWTitleSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <TitleBoxWTitleContent v-if="meta && !getStateSkeleton()" :meta="meta" :title="title" :showLinkBack="showLinkBack"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
import TitleBoxWTitleContent from '@/components/TitleBoxWTitleContent.vue'
import TitleBoxWTitleSkeleton from '@/components/TitleBoxWTitleSkeleton.vue'
export default {
  mixins: [global],
  components: {
    TitleBoxWTitleContent, TitleBoxWTitleSkeleton
  },
  props: {
    meta: Array,
    title: String,
    showLinkBack: Boolean
  }
}
</script>

<style lang="scss" scoped>


</style>
