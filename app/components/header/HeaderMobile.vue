<template>
<div class="mobile">
  <NuxtLink class="logoLink" :to="getRootLink()" :title="translate('title_logo')">
    <img v-if="$route.name == 'index'" class="logoImg" :src="require('~/assets/images/content/logo_white.png')" :alt="translate('name_company')" loading='lazy'>
    <img v-else class="logoImg" :src="require('~/assets/images/content/logo_blue.png')" :alt="translate('name_company')" loading='lazy'>
  </NuxtLink>
  <a class="phone" v-if="common.contact.phone" rel="nofollow noopener" :href="`tel:+${convertPhone(common.contact.phone)}`">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3913 12.8307C15.096 12.6847 13.6447 11.9797 13.3738 11.8823C13.1033 11.785 12.9062 11.7363 12.7094 12.0283C12.5127 12.3203 11.9469 12.9767 11.7746 13.1714C11.6023 13.366 11.43 13.3902 11.1351 13.2442C10.8398 13.0982 9.88844 12.7906 8.76082 11.7971C7.88318 11.0239 7.29059 10.0693 7.11829 9.7777C6.94599 9.48571 7.09976 9.32804 7.24761 9.18282C7.38048 9.05201 7.54292 8.84217 7.69038 8.67204C7.83784 8.5019 7.88712 8.38005 7.98569 8.18578C8.08425 7.99112 8.03497 7.82099 7.96124 7.675C7.88751 7.529 7.2969 6.09398 7.05087 5.51039C6.81115 4.94199 6.56789 5.01908 6.38652 5.01012C6.21462 5.00156 6.01749 5 5.82074 5C5.624 5 5.30425 5.0728 5.03338 5.36479C4.76291 5.65678 4 6.36183 4 7.79685C4 9.23187 5.05783 10.6182 5.20568 10.8125C5.35314 11.0072 7.28743 13.9516 10.2492 15.2145C10.9538 15.5151 11.5034 15.6941 11.9323 15.8285C12.6397 16.0504 13.2831 16.0192 13.7921 15.9441C14.3595 15.8604 15.5387 15.239 15.7848 14.5581C16.0308 13.8772 16.0308 13.2932 15.9571 13.1718C15.8833 13.0499 15.6866 12.9767 15.3913 12.8307Z" fill="#0057B8"/>
    </svg>
  </a>
  <NuxtLink class="searchLink" :to="getRootLink() +'search'">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0887 13.1763C14.2712 12.1041 15.0112 10.572 15.0112 8.87097C15.0112 5.62852 12.3224 3 9.0056 3C5.6888 3 3 5.62852 3 8.87097C3 12.1134 5.6888 14.7419 9.0056 14.7419C10.5823 14.7419 12.0172 14.1479 13.0887 13.1763ZM13.0887 13.1763L17 17" stroke="#0057B8" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </NuxtLink>
  <button class="btnToggleMenu" type="button" @click="$store.commit('setToggleMenu', true)" :class="{notice:$store.getters.countProducts}">
    <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22.8862" height="2.44443" rx="1" fill="#0057B8"/>
      <rect y="5.77864" width="22.8862" height="2.44443" rx="1" fill="#0057B8"/>
      <rect y="11.5555" width="22.8862" height="2.44443" rx="1" fill="#0057B8"/>
    </svg>
  </button>
  <transition name="slide-menu">
    <OpenMenuMobile v-show="$store.state.toggleMenu" :common="common" @onclick="(value) => $store.commit('setToggleMenu', value)"/>
  </transition>
</div>
</template>

<script>
import OpenMenuMobile from "~/components/header/OpenMenuMobile";
import global from "~/mixins/global";
export default {
  components:{ OpenMenuMobile},
  mixins: [global],
  props:{
    common: Object
  }
}

</script>

<style lang='scss' scoped>
.mobile{
  font-size: .5rem;
  padding: 2.6em 0;
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: 0 3em;
  align-items: center;
}
.logoLink{
  height: 100%;
  max-width: 27.4em;
}
.phone{
  display: block;
  width: 4em;
  height: 4em;
  font-size: 1em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.searchLink{
  display: block;
  width: 4em;
  height: 4em;
  font-size: 1em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.btnToggleMenu{
  border: none;
  background: none;
  padding: 0;
  width: 4.6em;
  height: 2.8em;
  font-size: 1em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
  &.notice{
    position: relative;
    overflow: visible;
    &:after{
      content: '';
      display: block;
      border-radius: 100%;
      background: var(--gray);
      width: 1.6em;
      height: 1.6em;
      position: absolute;
      right: 0.2em;
      bottom: -0.6em;
    }
  }
}
@media screen and (min-width: 550px){
  .mobile{
      font-size: .7rem;
  }
}
@media screen and (min-width: 768px){
  .mobile{
      font-size: .8rem;
  }
}
@media screen and (min-width: 992px){
  .mobile{
      font-size: .9rem;
  }
}
@media screen and (min-width: 1024px){
  .mobile{
      font-size: 1rem;
  }
}



</style>