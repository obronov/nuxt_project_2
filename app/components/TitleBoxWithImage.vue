<template>
  <div>
    <client-only>
      <TitleBoxWithImageSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <TitleBoxWithImageContent 
      v-if="meta && info && !getStateSkeleton()" 
      :meta="meta" 
      :showLink="showLink" 
      :image="{src:info.img_src, alt:info.img_alt}" 
      :title="title"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
import TitleBoxWithImageContent from '@/components/TitleBoxWithImageContent'
import TitleBoxWithImageSkeleton from '@/components/TitleBoxWithImageSkeleton'
export default {
  mixins: [global],
  components: {
    TitleBoxWithImageContent, TitleBoxWithImageSkeleton
  },
  props: {
    meta: Array,
    title: String,
    info: Object,
    showLink: Boolean
  }
}
</script>

<style lang="scss" scoped>


</style>
