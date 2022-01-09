<template>
  <div>
    <div class="modal-title h2" v-if="form.title" v-html="cnangeColorTitle(20, form.title)"></div>
    <div class="modal-description" v-if="form.description" v-html="form.description"></div>
    <form action="/" @submit.prevent="onSubmit($event,{mailing_type:mailingType})" novalidate>
    {{links}}
      <FormControlList class='controls_buy' :form="form"/>
      <div class="products-list" v-if="$store.getters.countProducts"> 
        <input type="text" hidden name="links" :value="links">
        <div class="products-list__item" v-for="item in $store.state.products" :key="item.uuid">
          <img class="products-list__img" :src="item.img_src_catalog" :alt="item.name">
          <div class="products-list__name">{{item.name}}</div>
          <button class="products-list__btn" type="button" @click="deleteProduct(item.uuid)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z"/>
            </svg>
          </button>
        </div>
      </div>
      <NuxtLink v-else class="form-link"  :to="'/catalog'">
        <div class="form-link__icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9391 20.9771L11.9367 11.9374L20.9431 11.9732C21.4321 11.9373 21.8136 11.5313 21.8188 11.0412C21.8239 10.5511 21.4509 10.1423 20.9627 10.1028L11.9763 10.0206L12.0067 1.08024C12.0069 0.564414 11.5905 0.148047 11.0747 0.148264C10.8246 0.148087 10.5841 0.247797 10.4067 0.425239C10.2293 0.602681 10.1295 0.84316 10.1297 1.09325L10.0994 10.0203L1.09965 9.97791C0.849562 9.97773 0.609083 10.0774 0.431641 10.2549C0.254199 10.4323 0.154489 10.6728 0.154666 10.9229C0.154835 11.1722 0.254258 11.4105 0.43097 11.5852C0.602394 11.7587 0.835305 11.8579 1.07999 11.8615L10.0997 11.8972L10.0688 20.9967C10.069 21.246 10.1684 21.4843 10.3451 21.659C10.5192 21.8317 10.7547 21.9285 11.0008 21.9287C11.2509 21.9271 11.4907 21.8257 11.6669 21.647C11.8431 21.4684 11.9411 21.2272 11.9391 20.9771Z"/>
          </svg>
        </div>
        <div class="form-link__text" v-html="form.add_product_buy"></div>
      </NuxtLink>


      <div class="form-footer">
        <div class="form-privacy-policy">
          <FormPrivacyPolicy @changeState='changeState' :text="form.privacy_policy_text"/>
        </div>
        <button class="btn btn_buy" type="submit" :disabled="disabledSubmit">{{form.btn_name}}</button>
      </div>
    </form>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    formBuy: Object,
    mailingType: String
  },
  data(){
    return{
      form: this.formBuy,
      disabledSubmit: true
    }
  },
  methods:{
    changeState($event){
      this.disabledSubmit = !$event;
    },
    deleteProduct(uuid){
      let newList = []

      this.$store.state.products.forEach(element => {
        if(uuid != element.uuid){
          newList.push(element);
        }
      });

      console.log('uuid', uuid)
      console.log('newList', newList)
      this.$store.commit('setProducts', newList)
    }
  },
  computed:{
    links(){
      let links = '';

      this.$store.state.products.forEach(element => {
        links += element.url + ','
      });

      return links
    }
  }
}

</script>

<style lang='scss' scoped>
.controls_buy{
  margin: 4.8em 0 0;
  display: grid;
  grid-gap: 32px 2em;
  grid-template-columns: 1fr 1fr;
}
.form-footer{
  margin: 32px 0 0;
  display: grid;
  grid-gap: 0 2em;
  grid-template-columns: 1fr 1fr;
}
.form-privacy-policy{
  grid-column: 2;
}
.btn_buy{
  font-size: 16px;
  grid-row: 1;
}
.form-link, .form-link:visited{
  background: var(--super_bright_gray);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 2em;
  align-items: center;
  padding: 2em;
  text-decoration: none;
  color: var(--dark_gray);
  margin: 32px 0 0;
  &:hover,
  &:focus{
    .form-link__icon{
    background: var(--blue);
      & svg{
        fill: var(--white);
      }
    }
  }
}
.form-link__icon{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 5.2em;
  height: 5.2em;
  border-radius: 100%;
  background: var(--white);
  transition: .3s;
  & svg{
    display: block;
    transition: inherit;
    width: 2.2em;
    height: 2.2em;
    fill: var(--blue);
  }
}
.form-link__text{
  font-size: 1.6em;
  line-height: 1.5;
  &::v-deep *{
    font-size: inherit;
    line-height: inherit;
  }
}
.products-list__item{
  margin: 0 0 8px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 0 1.6em;
  padding: 1.6em;
  background: var(--super_bright_gray);
  &:last-child{
    margin: 0;
  }
}
.products-list__img{
  display: block;
  max-width: 60px;
}
.products-list__name{
  font-size: 14px;
  line-height: 1.14;
}
.products-list__btn{
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  padding: 0;
  &:hover,
  &:focus{
    & svg{
      fill: var(--blue);
    }
  }
  & svg{
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--gray);
    transition: .3s;
  }
}
.products-list{
  max-height: 206px;
  overflow-y: auto;
  margin: 32px 0 0;
  scrollbar-width: thin;
  scrollbar-color: var(--blue) var(--super_bright_gray);
}
@media screen and (max-width: 768px){
  .products-list__img{
    max-width: 56px;
  }
  .products-list__name{
    font-size: 12px;
    line-height: 1.33;
  }
  .products-list__btn{
    width: 20px;
    height: 20px;
  }
  .products-list__item{
      padding: 2em;
      grid-gap: 0 2em;
  }
}
@media screen and (max-width: 576px){
  .controls_buy{
    grid-template-columns:  1fr;
  }
  .form-footer{
    grid-gap: 6em 0;
    grid-template-columns: 1fr;
  }
  .form-privacy-policy{
    grid-column: initial;
  }
  .btn_buy{
    grid-row: initial;
  }
}
</style>