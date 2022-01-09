<template>
  <div class="feedback"> не использую
    <div class="title h2" v-html="info.title"></div>
    <form class="feedback__form" action="/" @submit.prevent="onSubmit($event,{form_handle:formHandle,request:request})">
      <div class="form-group" v-for="(item, index) in form" :key="index">
        <div class="form-group__inner" v-if="index != 'comment'">
          <input 
            v-model="item.value"
            :placeholder="item.placeholder"
            :type="item.type"
            class="form-control"
            :name="index"
            >
          <div class="error" v-if="item.error">{{item.error}}</div>
        </div>
        <div class="form-group__inner" v-if="index == 'comment'">
          <textarea 
            :placeholder="item.placeholder"
            :type="item.type"
            class="form-control_textarea"
            :name="index">
          </textarea>
          <div class="error" v-if="item.error">{{item.error}}</div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn" type="submit" :disabled="disabledSubmit">{{info.controls.btn_name}}</button>
      </div>
      <div class="form-group">
        <PrivacyPolicyFeedback @changeState='changeState' :text="info.controls.privacy_policy"/>
      </div>
    </form>
  </div>
</template>

<script>
import global from "~/mixins/global";

export default {
  mixins: [global],
  props:{
    request: String,
    formHandle: String,
    info: Object,
    fields: Object
  },
  data(){
    return{
      disabledSubmit: true
    }
  },
  methods:{
    changeState($event){
      this.disabledSubmit = !$event;
    },
    getNameFile(event, item){
      item.fileName = event.target.files[0].name;
    }
  },
  computed:{
    form(){
      let form = {};
      let self = this;

      for (const key in self.fields) {
        if (Object.hasOwnProperty.call(self.fields, key)) {
          const element = self.fields[key];
          form[key] = element;
          form[key]['placeholder'] = self.info.controls[key];
        }
      }

      return form;
    }
  }
}

</script>

<style lang='scss' scoped>
.feedback{
  font-size: 1rem;
  padding: 5em;
  background: #FFFFFF;
  border-radius: .4em;
}
.error{
  color: var(--color-3);
  font-size: 14px;
  line-height: 130%;
}
.title{
  margin: 0 0 1.03em;
  text-transform: uppercase;
}

.feedback__form{
  font-size: 1em;
}

.form-control{
  padding: 0 .5em .125em;
  border: none;
  border-bottom: 1px solid var(--color-5);
  color: var(--color-2);
  font-size: 2.4em;
  line-height: 121%;
  background: none;
  width: 100%;
}
.form-control_textarea{
  padding: 1em .7em;
  border: 1px solid var(--color-5);
  color: var(--color-2);
  font-size: 2.4em;
  line-height: 121%;
  background: none;
  width: 100%;
  resize: none;
  height: 7.04em;
  width: 100%;
  border-radius: .16em;
}
.form-control::placeholder,
.form-control_textarea::placeholder{
  font-size: 1em;
  line-height: 121%;
  color: var(--color-2);
  opacity: .5;
}
.form-group{
  margin: 0 0 4em;
  &:nth-last-child(-n+2){
    margin: 0 0 2.2em;
  }
  &:last-child{
    margin: 0;
  }
}

@media screen and (max-width: 1200px) {
  .feedback{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1100px) {
  .feedback{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .feedback{
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 768px) {
  .feedback{
    font-size: 0.6rem;
  }

}
@media screen and (max-width: 600px) {
  .feedback{
    font-size: 0.5rem;
  }

  .form-control{
    padding: 0 0 .5em;
    font-size: 2.8em;
  }
  
  .btn {
    font-size: 2.4em;
    margin: 0 auto;
    display: block;
  }
  .error{
    font-size: 12px;
  }
}
</style>