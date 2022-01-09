<template>
  <div class='content-wysiwyg-text' v-html="info.content"></div>
</template>

<script>

export default {
  props:{
    info: Object
  }
}

</script>
<style lang="scss" scoped>
  .content-wysiwyg-text{  
    &::v-deep *{
      margin: 0 0 1em;
      &:last-child{
        margin: 0;
      }
    }
    &::v-deep iframe{
      max-width: 100%;
      height: 40vh;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .content-wysiwyg-text::v-deep img {
      margin: 0 -15px;
      width: calc(100% + 30px);
      max-width: calc(100% + 30px);
      &:last-of-type{
        margin: 0 -15px;
      }
    }
  }

</style>