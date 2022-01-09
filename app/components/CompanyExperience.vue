<template>
  <div class="company-experience">
    <client-only>
      <CompanyExperienceSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <CompanyExperienceContent 
      v-if="!isEmpty(history) && showHistory && !getStateSkeleton()" 
      :history="history" 
    />
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    history: Object
  },
  computed:{
    showHistory(){
      let info = true;
      try {
        if(!this.isEmpty(this.history)){
          if(this.history.number  && this.history.number_caption && this.history.description ){
            info = true;
          }else{
            info = false;
          }
        }
      } catch (error) {
        info = false
      }
      return info
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
