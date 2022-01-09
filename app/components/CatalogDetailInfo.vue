<template>
  <div class="detail-info">
    <div class="detail-info__tabs">
      <TabList :sections="sections" :getParam="'detailInfo'"/> 
    </div>

    <div class="detail-info__content container" v-show="selected == 'tech'">
      <CatalogDetailInfoTable
        v-if="!isEmptyArr(info.characteristics)"
        :info="info.characteristics"
      />
    </div>
    <div class="detail-info__content container" v-show="selected == 'desk'">
      <CatalogDetailInfoText 
        :text="info.full_description"
        :img="info.img_src_description"
        :alt="info.img_alt_description"
      />
    </div>
    <div class="detail-info__content container" v-show="selected == 'certificates'">
      <CatalogDetailInfoDocument :documents="info.documents"/>
    </div>

  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    info: Object
  },
  data(){
    return{
      selected: 'tech'
    }
  },
  computed:{
    sections(){
      let sections = null
      try {
        sections = [
          {
            "title": this.info.page_settings.title_tech,
            "slug": "tech"
          },
          {
            "title": this.info.page_settings.title_desk,
            "slug": "desk"
          },
          {
            "title": this.info.page_settings.title_certificates,
            "slug": "certificates"
          },
        ]
      } catch (error) {}

      return sections
    }
  },
  watch:{
    $route(){
      this.selected = this.$route.query.detailInfo;
    }
  }
}

</script>

<style lang='scss' scoped>
.detail-info__tabs{
  background: var(--super_bright_gray);
}
.detail-info__content{
  padding: 5.6em 15px 8em;
  font-size: 1rem;
}
@media screen and (max-width: 1366px) {
  .detail-info__content{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .detail-info__content{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .detail-info__content{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .detail-info__content{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .detail-info__content{
    font-size: .5rem;
    padding: 4.8em 15px 9.6em;
  }

}
</style>