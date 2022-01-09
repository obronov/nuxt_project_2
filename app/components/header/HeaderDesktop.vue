<template>
<div class="desktop">
  <div class="logoLink-btnChangeCity">    
    <NuxtLink class="logoLink" :to="getRootLink()" :title="translate('title_logo')">
      <img v-if="$route.name == 'index'" class="logoImg" :src="common.header.logo_header_main" :alt="common.header.logo_header_main_alt" loading='lazy'>
      <img v-else class="logoImg" :src="common.header.logo_header" :alt="common.header.logo_header_alt" loading='lazy'>
    </NuxtLink>
    <button class="btnChangeCity" type="button" @click="$store.commit('showModal', 'city')">{{common.contact.city}}</button>
  </div>
  <div class="wrap-phone">
    <a class="phone" v-if="common.contact.phone" rel="nofollow noopener" :href="`tel:+${convertPhone(common.contact.phone)}`">
      <span>{{common.contact.phone}}</span> <span class="phone__caption-add">{{common.contact.add_number}}</span>
    </a>
  </div>
  <button class="btnCall" type="button" :title="translate('title_call')" @click="$store.commit('showModal', 'formConsultation')">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3913 12.8307C15.096 12.6847 13.6447 11.9797 13.3738 11.8823C13.1033 11.785 12.9062 11.7363 12.7094 12.0283C12.5127 12.3203 11.9469 12.9767 11.7746 13.1714C11.6023 13.366 11.43 13.3902 11.1351 13.2442C10.8398 13.0982 9.88844 12.7906 8.76082 11.7971C7.88318 11.0239 7.29059 10.0693 7.11829 9.7777C6.94599 9.48571 7.09976 9.32804 7.24761 9.18282C7.38048 9.05201 7.54292 8.84217 7.69038 8.67204C7.83784 8.5019 7.88712 8.38005 7.98569 8.18578C8.08425 7.99112 8.03497 7.82099 7.96124 7.675C7.88751 7.529 7.2969 6.09398 7.05087 5.51039C6.81115 4.94199 6.56789 5.01908 6.38652 5.01012C6.21462 5.00156 6.01749 5 5.82074 5C5.624 5 5.30425 5.0728 5.03338 5.36479C4.76291 5.65678 4 6.36183 4 7.79685C4 9.23187 5.05783 10.6182 5.20568 10.8125C5.35314 11.0072 7.28743 13.9516 10.2492 15.2145C10.9538 15.5151 11.5034 15.6941 11.9323 15.8285C12.6397 16.0504 13.2831 16.0192 13.7921 15.9441C14.3595 15.8604 15.5387 15.239 15.7848 14.5581C16.0308 13.8772 16.0308 13.2932 15.9571 13.1718C15.8833 13.0499 15.6866 12.9767 15.3913 12.8307Z"/>
    </svg>
  </button>
  <BtnOrder class="btnOrder_external" :caption="common.header.request_button_text" :number="$store.getters.countProducts" />
  <button class="btnToggleMenu" type="button" @click="$store.commit('setToggleMenu', true)">
    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24.4441" height="2.61901" rx="1" fill="#0057B8"/>
      <rect y="6.19043" width="24.4441" height="2.61901" rx="1" fill="#0057B8"/>
      <rect y="12.3809" width="24.4441" height="2.61901" rx="1" fill="#0057B8"/>
    </svg>
  </button>
  <nav class="nav">
    <ul class="nav__items">
      <li class="nav__item" v-for="(item, index) in common.header.header_menu" :key="index">
        <NuxtLink class="nav__link" :to="getRootLink() + item.slug">{{item.name}}</NuxtLink>
      </li>
    </ul>
  </nav>
  <a :href="changeLang" class="langLink">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2C5.59503 2 2 5.59528 2 10C2 14.405 5.59528 18 10 18C14.405 18 18 14.4047 18 10C18 5.59503 14.4047 2 10 2ZM7.61369 3.35281C7.06481 4.05066 6.66594 4.91344 6.38994 5.75H4.36316C5.18388 4.66419 6.31047 3.82209 7.61369 3.35281ZM3.76412 6.68437H6.12469C5.91263 7.57303 5.78744 8.53772 5.75738 9.53125H2.95344C3.02075 8.50916 3.30634 7.54272 3.76412 6.68437ZM3.76412 13.3125C3.30634 12.4542 3.02075 11.4908 2.95344 10.4688H5.75738C5.78744 11.4623 5.91263 12.4238 6.12469 13.3125H3.76412ZM4.36316 14.25H6.38991C6.66584 15.0863 7.06472 15.9492 7.61369 16.6472C6.31047 16.1779 5.18388 15.3358 4.36316 14.25ZM9.53125 16.9829C8.48466 16.6311 7.76306 15.2875 7.38194 14.25H9.53125V16.9829ZM9.53125 13.3125H7.09016C6.86234 12.4364 6.72734 11.4724 6.69525 10.4688H9.53125V13.3125ZM9.53125 9.53125H6.69525C6.72738 8.52763 6.86237 7.56359 7.09016 6.6875H9.53125V9.53125ZM9.53125 5.75H7.38194C7.76303 4.71253 8.48466 3.36888 9.53125 3.01706V5.75ZM16.2359 6.6875C16.6937 7.54584 16.9792 8.50916 17.0466 9.53125H14.2426C14.2126 8.53772 14.0874 7.57616 13.8753 6.6875H16.2359ZM15.6368 5.75H13.6101C13.3342 4.91366 12.9353 4.05075 12.3863 3.35281C13.6895 3.82209 14.8161 4.66419 15.6368 5.75ZM10.4688 3.01706C11.5153 3.36888 12.2369 4.7125 12.6181 5.75H10.4688V3.01706ZM10.4688 6.6875H12.9098C13.1377 7.56359 13.2727 8.52763 13.3048 9.53125H10.4688V6.6875ZM10.4688 10.4656H13.3048C13.2726 11.4692 13.1376 12.4364 12.9098 13.3125H10.4688V10.4656ZM10.4688 16.9829V14.2469H12.6181C12.237 15.2843 11.5153 16.6311 10.4688 16.9829ZM12.3863 16.6472C12.9352 15.9493 13.3341 15.0834 13.6101 14.2469H15.6368C14.8161 15.3327 13.6895 16.1779 12.3863 16.6472ZM16.2359 13.3125H13.8753C14.0874 12.4238 14.2126 11.4592 14.2426 10.4656H17.0466C16.9792 11.4877 16.6937 12.4542 16.2359 13.3125Z" fill="#0057B8"/>
    </svg>
    <span>{{translate('lang')}}</span>
  </a>
  <NuxtLink class="searchLink" :to="getRootLink() +'search'">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0887 13.1763C14.2712 12.1041 15.0112 10.572 15.0112 8.87097C15.0112 5.62852 12.3224 3 9.0056 3C5.6888 3 3 5.62852 3 8.87097C3 12.1134 5.6888 14.7419 9.0056 14.7419C10.5823 14.7419 12.0172 14.1479 13.0887 13.1763ZM13.0887 13.1763L17 17" stroke="#0057B8" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <span>{{translate('search')}}</span>
  </NuxtLink>
  <transition name="slide-menu">  
    <OpenMenuDesktop v-show="$store.state.toggleMenu" :common="common" @onclick="(value) => $store.commit('setToggleMenu', value)"/>
  </transition>
</div>
</template>

<script>
import BtnOrder from "~/components/utilities/BtnOrder";
import OpenMenuDesktop from "~/components/header/OpenMenuDesktop";
import global from "~/mixins/global";
export default {
  components:{BtnOrder, OpenMenuDesktop},
  mixins: [global],
  props:{
    common: Object
  },
  methods:{

  }
}

</script>

<style lang='scss' scoped>
.fixed{
  & .phone,
  & .logoLink-btnChangeCity,
  & .langLink,
  & .searchLink{
    display: none;
  }
  & .desktop{
    grid-template-columns: auto 1fr auto 22.2em;
    padding: 1.4em 0 0;
    align-items: end;
  }
  & .btnToggleMenu{
    grid-row: 1;
    margin: 0 0 2.6em;
  }
  & .nav{
    grid-row: 1;
    grid-column: 2;
  }
  & .nav__link,
  & .nav__link:visited {
    padding: 0 0 1.31em;
  }
  & .btnCall{
    margin: 0 0 1.4em;
    grid-column: 3;
  }
  .btnOrder_external{
    grid-column: 4;
    margin: 0 0 .875em;
}
}
.desktop{
  font-size: 1rem;
  padding: 2em 0 0;
  display: grid;
  grid-template-columns: auto auto 1fr auto 12.2em;
  grid-gap: 2.8em 2em;
  align-items: center;
}
.logoLink{
  height: 100%;
  max-width: 23.8em;
}
.logoLink-btnChangeCity {
    grid-row: 1;
    grid-column: 1/3;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 3.3em;
    align-items: center;
}
.logoImg{
  display: block;
  max-width: 100%;
}
.btnOrder_external{  
  grid-row: 1;
  grid-column: 5/7;
}

.btnChangeCity{
  padding: 0;
  border: none;
  background: none;
  font-family: var(--font-second);
  font-size: 1.2em;
  line-height: 116%;
  color: var(--dark_gray);
  transition: .3s;
  &:hover,
  &:focus{
    color: var(--blue);
  }
}
.wrap-phone{
  grid-row: 1;
  grid-column: 3;
  display: flex;
  justify-content: flex-end;
}
.phone{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 1.6em;
  line-height: 118%;
  text-align: right;
  text-transform: uppercase;
  color: var(--blue);
  text-decoration: none;
  transition: .3s;
  &:hover,
  &:focus{
    color: var(--dark_blue);
  }
}
.phone__caption-add{
  text-transform: lowercase;
}
.btnCall{
  grid-row: 1;
  grid-column: 4;
  font-size: 1em;
  border: 1px solid  var(--blue);
  background: transparent;
  width: 4.3em;
  height: 4.3em;
  padding: 0;
  transition: .3s;
  &:hover,
  &:focus{
    background: var( --blue);
    color: var(--white);
  }
  &:hover svg,
  &:focus svg{
    fill: var(--white);
  }
  & svg{
    width: 2em;
    height: 2em;
    transition: inherit;
    fill: var(--blue);
  }
}
.langLink,
.searchLink{
  text-decoration: none;
  font-family: var(--font-second);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 1em;
  font-weight: 500;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--dark_gray);
  justify-self: end;
  margin: 0 0 .75em;
}
.langLink{
  grid-row: 2;
  grid-column: 5;
}
.searchLink{
  grid-row: 2;
  grid-column: 6;
}
.btnToggleMenu{
  grid-row: 2;
  grid-column: 1;
  border: none;
  background: none;
  padding: 0;
  width: 2.5em;
  height: 1.5em;
  font-size: 1em;
  margin: 0 0 1.2em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.nav{
  grid-row: 2;
  grid-column: 2/5;
}
.nav__items{
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  font-size: inherit;
  margin: 0 -2em;
}
.nav__item{
  padding: 0;
  margin: 0 2em;
  &:before{
    display: none;
  }
}
.nav__link, .nav__link:visited{
  font-family: var(--font-second);
  font-weight: 500;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--dark_gray);
  text-decoration: none;
  display: inline-block;
  border-bottom: 3px solid transparent;
  padding: 0 0 .75em;
  &.nuxt-link-exact-active,
  &:hover,
  &:focus{
    border-color: var(--blue);
    color: var(--blue);
  }
}

@media screen and (max-width: 1200px){
  .desktop{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .desktop{
    font-size: .8rem;
  }
  .btnChangeCity {
    font-size: 1.5em;
  }
}
</style>