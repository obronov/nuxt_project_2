<template>
  <div>
    <client-only>
      <GalleryDetailSkeleton v-if="getStateSkeleton()" :gallery="[1,2,3,4,5,6]"/>
    </client-only>

    <GalleryDetailContent 
      v-if="gallery && sections && !getStateSkeleton()" 
      :gallery="gallery" 
      :sections="sections"
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
import GalleryDetailSkeleton from '@/components/GalleryDetailSkeleton'
import GalleryDetailContent from '@/components/GalleryDetailContent'
export default {
  components: {
    GalleryDetailContent, GalleryDetailSkeleton
  },
  mixins: [global],
  props: {
    gallery: Object,
    sections: Array
  }
}
</script>

<style lang="scss" scoped>


</style>
