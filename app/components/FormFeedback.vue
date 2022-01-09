<template>
  <section class='feedback'>
    <div class="feedback__inner container">
      <h2 class="feedback__title" v-if="form.title" v-html="cnangeColorTitle(20, form.title)"></h2>
      <div class="feedback__description" v-if="form.description" v-html="form.description"></div>
    
      <form class="form-feedback" action="/" @submit.prevent="onSubmit($event,{mailing_type:mailingType})" novalidate>
        <FormControlList class='controls_feedback' :form="form"/>
        <div class="form-feedback__footer">
          <div class="form-privacy-policy">
            <FormPrivacyPolicy @changeState='changeState' :text="form.privacy_policy_text"/>
          </div>
          <button class="btn btn_feedback" type="submit" :disabled="disabledSubmit">{{form.btn_name}}</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    formInfo: Object,
    mailingType: String
  },
  data(){
    return{
      form: this.formInfo,
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
.feedback{
  font-size: 1em;
  background: var(--super_bright_gray);
  padding: 8em 0 9.6em;
}
.feedback__title{
  margin: 0 0 1.4em;
  &::v-deep b{
    color: var(--gray);
  }
}
.controls_feedback{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px 4.7em;
  & :nth-child(5){
    grid-column: 1/3;
  }
}
.form-feedback__footer{
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: 325px 231px;
  grid-gap: 32px 4.7em;
  justify-content: space-between;
}

.btn_feedback{
  font-size: 16px;
}
.form-feedback{
  max-width: 793px;
}
.feedback__description{
  font-size: 14px;
  line-height: 1.71;
  color: var(--dark_gray);
  margin: 0 0 32px;
  &::v-deep *{
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}
@media screen and (max-width: 1366px) {
  .feedback{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .feedback{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .feedback{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .feedback{
    font-size: .6rem;
  }
  .controls_feedback{
    grid-template-columns: 1fr;
    grid-gap: 32px 0;
    & :nth-child(5){
      grid-column: initial;
    }
  }
  .form-feedback__footer{
    margin: 32px 0 0;
    grid-template-columns: 1fr;
    grid-gap: 6.4em 0;
  }
  .feedback__description{
    line-height: 1.42;
  }
  .feedback__title{
    margin: 0 0 1.33;
  }
}
@media screen and (max-width: 576px) {
  .feedback{
    font-size: .5rem;
    padding: 6.4em 0 9.6em;
  }

}
</style>