<template>
  <div>
    <div class="modal-title h2" v-if="form.title" v-html="cnangeColorTitle(20, form.title)"></div>
    <div class="modal-description" v-if="form.description" v-html="form.description"></div>
    <form action="/" @submit.prevent="onSubmit($event,{mailing_type:mailingType})" novalidate>
      <FormControlList class='controls_consultation' :form="form"/>
      <div class="form-privacy-policy">
        <FormPrivacyPolicy @changeState='changeState' :text="form.privacy_policy_text"/>
      </div>
      <button class="btn btn_consultation" type="submit" :disabled="disabledSubmit">{{form.btn_name}}</button>
    </form>
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
      form: this.formConsultation,
      disabledSubmit: true
    }
  },
  methods:{
    changeState($event){
      this.disabledSubmit = !$event;
    }
  },
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