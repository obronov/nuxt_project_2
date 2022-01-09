<template>
  <div>
    <div class="modal-title h2" v-if="successMsg.title" v-html="cnangeColorTitle(20, successMsg.title)"></div>
    <div class="modal-description" v-if="successMsg.description" v-html="successMsg.description"></div>    
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    formConsultation: Object,
    mailingType: String
  },
  data(){
    return{
      title: this.$store.state.successMsg.title,
      description: this.$store.state.successMsg.description
    }
  },
  computed:{
    successMsg(){
      let successMsg = {
        'title': '',
        'description': ''
      }

      if(!this.isEmpty(this.$store.state.successMsg)){
        successMsg = {          
          'title': this.$store.state.successMsg.title,
          'description': this.$store.state.successMsg.description
        }
      }

      return successMsg
    }
  }

}

</script>

<style lang='scss' scoped>
.controls_consultation{
  margin: 4.8em 0 0;
  display: grid;
  grid-gap: 32px 0;
}
.form-privacy-policy,
.btn_consultation{
  margin: 32px 0 0;
}
.btn_consultation{
  font-size: 16px;
}
</style>