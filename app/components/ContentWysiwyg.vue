<template>
  <div class="content-wysiwyg">
    <div class="content-wysiwyg__item" v-for="(item, index) in content" :key="`${index}`">
      <ContentWysiwygText v-if="item.type == 'text' && Boolean(item.content)" :info="item"/>
      <ContentWysiwygSlider v-if="item.type == 'slider' && !isEmptyArr(item.items)" :info="item" :idSlider="Date.now()"/>
      <ContentWysiwygVideo v-if="item.type == 'video' && Boolean(item.video_id)" :info="item"/>
      <ContentWysiwygFile v-if="item.type == 'single_file' && Boolean(item.link)" :info="item"/>
      <ContentWysiwygRows v-if="item.type == 'row' && !isEmptyArr(item.items)" :info="item"/>
      <ContentWysiwygDocument v-if="item.type == 'document' && !isEmptyArr(item.items)" :info="item"/>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    content: Array
  },
  mounted() {
    this.$nextTick(function () {
      this.adaptTable();
    });
  },
}

</script>

<style lang='scss' scoped>
.content-wysiwyg{
  font-size: 1rem;  
}
.content-wysiwyg__item{
  margin: 0 0 3em;
  &:last-child{
    margin: 0;
  }
}
@media screen and (max-width: 1366px) {
  .content-wysiwyg {
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .content-wysiwyg {
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .content-wysiwyg {
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .content-wysiwyg {
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .content-wysiwyg {
    font-size: .5rem;
  }
  .content-wysiwyg__item{
    margin: 0 0 6em;
  }
}
</style>