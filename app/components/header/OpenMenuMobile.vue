<template>
  <div class="open-menu">
    <div class="open-menu__inner container">
        <NuxtLink class="logoLink" :to="getRootLink()" :title="translate('title_logo')">
          <img class="logoImg" :src="require('~/assets/images/content/logo_blue.png')" :alt="translate('name_company')" loading='lazy'>
        </NuxtLink>
        <a :href="changeLang" class="langLink langLink_mobile">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.14565 0 0 3.14587 0 7C0 10.8543 3.14587 14 7 14C10.8543 14 14 10.8541 14 7C14 3.14565 10.8541 0 7 0ZM4.91198 1.18371C4.43171 1.79432 4.0827 2.54926 3.8412 3.28125H2.06776C2.78589 2.33116 3.77166 1.59433 4.91198 1.18371ZM1.54361 4.09883H3.6091C3.42355 4.8764 3.31401 5.7205 3.2877 6.58984H0.834258C0.893156 5.69551 1.14305 4.84988 1.54361 4.09883ZM1.54361 9.89844C1.14305 9.14739 0.893156 8.30449 0.834258 7.41016H3.2877C3.31401 8.2795 3.42355 9.12086 3.6091 9.89844H1.54361ZM2.06776 10.7188H3.84117C4.08261 11.4506 4.43163 12.2056 4.91198 12.8163C3.77166 12.4057 2.78589 11.6688 2.06776 10.7188ZM6.58984 13.1101C5.67407 12.8022 5.04268 11.6266 4.7092 10.7188H6.58984V13.1101ZM6.58984 9.89844H4.45389C4.25455 9.13186 4.13643 8.28833 4.10834 7.41016H6.58984V9.89844ZM6.58984 6.58984H4.10834C4.13645 5.71167 4.25458 4.86814 4.45389 4.10156H6.58984V6.58984ZM6.58984 3.28125H4.7092C5.04265 2.37346 5.67407 1.19777 6.58984 0.88993V3.28125ZM12.4564 4.10156C12.857 4.85261 13.1068 5.69551 13.1657 6.58984H10.7123C10.686 5.7205 10.5765 4.87914 10.3909 4.10156H12.4564ZM11.9322 3.28125H10.1588C9.91739 2.54945 9.56837 1.79441 9.08802 1.18371C10.2283 1.59433 11.2141 2.33116 11.9322 3.28125ZM7.41016 0.88993C8.32593 1.19777 8.95732 2.37344 9.2908 3.28125H7.41016V0.88993ZM7.41016 4.10156H9.54611C9.74545 4.86814 9.86357 5.71167 9.89166 6.58984H7.41016V4.10156ZM7.41016 7.40742H9.89166C9.86355 8.28559 9.74542 9.13186 9.54611 9.89844H7.41016V7.40742ZM7.41016 13.1101V10.716H9.2908C8.95735 11.6238 8.32593 12.8022 7.41016 13.1101ZM9.08802 12.8163C9.56829 12.2057 9.9173 11.448 10.1588 10.716H11.9322C11.2141 11.6661 10.2283 12.4057 9.08802 12.8163ZM12.4564 9.89844H10.3909C10.5765 9.12086 10.686 8.27676 10.7123 7.40742H13.1657C13.1068 8.30175 12.8569 9.14739 12.4564 9.89844Z" fill="#0057B8"/>
          </svg>
          <span>{{translate('lang')}}</span>
        </a>
        <button class="btnToggleMenu" type="button" @click="$emit('onclick', false); closeItemNav()">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6485 17.9883L11.6563 10.0005L19.6485 2.07142C20.049 1.60753 20.0273 0.911385 19.5987 0.473678C19.1701 0.0359716 18.479 0.00426739 18.0127 0.400914L9.99706 8.27113L2.12168 0.342093C1.66594 -0.114031 0.929898 -0.114031 0.474157 0.342093C0.252954 0.562984 0.12853 0.863671 0.12853 1.17735C0.12853 1.49102 0.252954 1.79171 0.474157 2.0126L8.33785 9.92987L0.345627 17.8471C0.124424 18.068 0 18.3687 0 18.6824C0 18.9961 0.124424 19.2968 0.345627 19.5177C0.566136 19.7379 0.864651 19.8606 1.17523 19.8588C1.48011 19.8607 1.77363 19.7424 1.99315 19.5294L9.99706 11.5886L18.0127 19.6588C18.2332 19.879 18.5317 20.0018 18.8423 20C19.1488 19.9987 19.4425 19.8762 19.6602 19.6588C19.8798 19.4364 20.0022 19.1348 20 18.8211C19.9978 18.5074 19.8712 18.2076 19.6485 17.9883Z" fill="#0057B8"/>
          </svg>
        </button>
        <BtnOrder class="btnOrder_external" :caption="common.header.request_button_text" :number="$store.getters.countProducts" />
        <nav class="nav-second">
          <ul class="nav-second__items">
            <li class="nav-second__item" v-for="(item, index) in common.header_drop_down_menu" :key="'first' + index">
              <button 
                @click="selectedFirst = 'first' + index"
                v-if="(item.submenu != undefined && item.submenu.length > 0)"
                class="nav-second__link" 
                type="button">
                {{item.name}}
              </button>
              <NuxtLink 
                v-else
                class="nav-second__link" 
                :to="getRootLink() + item.slug">
                {{item.name}}
              </NuxtLink>
              <ul class="nav-second__submenu-items" v-show="(item.submenu != undefined && selectedFirst == 'first' + index && item.submenu.length > 0)">
                <li class="nav-second__submenu-item" v-for="(subItem, index) in item.submenu" :key="'second' + index">
                  <button 
                    @click="selectedSecond = 'second' + index"
                    v-if="(subItem.submenu != undefined && subItem.submenu.length > 0)"
                    class="nav-second__submenu-link" 
                    type="button">
                    {{subItem.name}}
                  </button>
                  <NuxtLink 
                    v-else
                    class="nav-second__submenu-link" 
                    :to="getRootLink() + item.slug + '/' + subItem.slug">
                    {{subItem.name}}
                  </NuxtLink>
                  <ul class="nav-third__submenu-items" v-show="(subItem.submenu != undefined && selectedSecond == 'second' + index && subItem.submenu.length > 0)">
                    <li class="wrap-btnBack">
                      <button 
                        @click="selectedSecond = null"
                        class="btnBack" 
                        type="button">
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11764 9.99952C3.11778 10.1652 3.18393 10.3241 3.30154 10.4412L9.15316 16.2745C9.31444 16.4308 9.54711 16.4895 9.76353 16.4284C9.97995 16.3673 10.1473 16.1958 10.2024 15.9784C10.2576 15.761 10.1922 15.5308 10.0309 15.3745L4.63906 9.99952L10.0309 4.62452C10.1986 4.46871 10.2677 4.23405 10.211 4.01261C10.1542 3.79116 9.98077 3.61825 9.75863 3.56169C9.53649 3.50514 9.3011 3.57397 9.1448 3.74118L3.29318 9.57452C3.18264 9.68881 3.11988 9.84076 3.11764 9.99952Z" fill="#0057B8"/>
                            <path d="M3.12584 10C3.13034 10.3433 3.40842 10.6205 3.7528 10.625L16.292 10.625C16.516 10.625 16.723 10.5059 16.8349 10.3125C16.9469 10.1191 16.9469 9.88088 16.8349 9.6875C16.723 9.49412 16.516 9.375 16.292 9.375L3.7528 9.375C3.40842 9.37949 3.13034 9.6567 3.12584 10Z" fill="#0057B8"/>
                            <path d="M3.11764 9.99952C3.11778 10.1652 3.18393 10.3241 3.30154 10.4412L9.15316 16.2745C9.31444 16.4308 9.54711 16.4895 9.76353 16.4284C9.97995 16.3673 10.1473 16.1958 10.2024 15.9784C10.2576 15.761 10.1922 15.5308 10.0309 15.3745L4.63906 9.99952L10.0309 4.62452C10.1986 4.46871 10.2677 4.23405 10.211 4.01261C10.1542 3.79116 9.98077 3.61825 9.75863 3.56169C9.53649 3.50514 9.3011 3.57397 9.1448 3.74118L3.29318 9.57452C3.18264 9.68881 3.11988 9.84076 3.11764 9.99952Z" fill="#0057B8"/>
                            <path d="M3.12584 10C3.13034 10.3433 3.40842 10.6205 3.7528 10.625L16.292 10.625C16.516 10.625 16.723 10.5059 16.8349 10.3125C16.9469 10.1191 16.9469 9.88088 16.8349 9.6875C16.723 9.49412 16.516 9.375 16.292 9.375L3.7528 9.375C3.40842 9.37949 3.13034 9.6567 3.12584 10Z" fill="#0057B8"/>
                          </svg>

                          {{translate('back')}}
                      </button>
                    </li>
                    <li class="nav-second__item nav-second__item_color">
                      <NuxtLink 
                        class="nav-second__link" 
                        :to="getRootLink() + item.slug + '/' + subItem.slug">
                        {{subItem.name}}
                      </NuxtLink>
                    </li>
                    
                    <li class="nav-third__submenu-item" v-for="(thirdItem, index) in subItem.submenu" :key="'third' + index">
                      <NuxtLink class="nav-third__submenu-link" :to="getRootLink() + item.slug + '/' + subItem.slug + '/' + thirdItem.slug">{{thirdItem.name}}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="wrap-call">
          <button class="btnCall btnCall_mobile" type="button" :title="translate('title_call')" @click="$store.commit('showModal', 'formConsultation'); $store.commit('setToggleMenu', false)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3913 12.8307C15.096 12.6847 13.6447 11.9797 13.3738 11.8823C13.1033 11.785 12.9062 11.7363 12.7094 12.0283C12.5127 12.3203 11.9469 12.9767 11.7746 13.1714C11.6023 13.366 11.43 13.3902 11.1351 13.2442C10.8398 13.0982 9.88844 12.7906 8.76082 11.7971C7.88318 11.0239 7.29059 10.0693 7.11829 9.7777C6.94599 9.48571 7.09976 9.32804 7.24761 9.18282C7.38048 9.05201 7.54292 8.84217 7.69038 8.67204C7.83784 8.5019 7.88712 8.38005 7.98569 8.18578C8.08425 7.99112 8.03497 7.82099 7.96124 7.675C7.88751 7.529 7.2969 6.09398 7.05087 5.51039C6.81115 4.94199 6.56789 5.01908 6.38652 5.01012C6.21462 5.00156 6.01749 5 5.82074 5C5.624 5 5.30425 5.0728 5.03338 5.36479C4.76291 5.65678 4 6.36183 4 7.79685C4 9.23187 5.05783 10.6182 5.20568 10.8125C5.35314 11.0072 7.28743 13.9516 10.2492 15.2145C10.9538 15.5151 11.5034 15.6941 11.9323 15.8285C12.6397 16.0504 13.2831 16.0192 13.7921 15.9441C14.3595 15.8604 15.5387 15.239 15.7848 14.5581C16.0308 13.8772 16.0308 13.2932 15.9571 13.1718C15.8833 13.0499 15.6866 12.9767 15.3913 12.8307Z"/>
            </svg>
          </button>
          <div class="wrap-phone">
            <a class="phone phone_mobile" v-if="common.contact.phone" rel="nofollow noopener" :href="`tel:+${convertPhone(common.contact.phone)}`">
              <span>{{common.contact.phone}}</span> <span class="phone__caption-add">{{common.contact.add_number}}</span>
            </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import BtnOrder from "~/components/utilities/BtnOrder";
import global from "~/mixins/global";
export default {
  components:{BtnOrder},
  mixins: [global],
  data(){
    return{
      selectedFirst: null,
      selectedSecond: null
    }
  },
  props:{
    common: Object
  },
  methods:{
    closeItemNav(){
      this.selectedFirst = null;
      this.selectedSecond = null;
    }
  },
  watch:{
    $route(){
      this.selectedFirst = null;
      this.selectedSecond = null;
    }
  }
}

</script>

<style lang='scss' scoped>
.open-menu{
  position: fixed;
  top: 0;
  left: 0;
  background: var(--white);
  width: 100%;
  min-height: 100vh;
  z-index: 40;
  border-top: 1px solid var(--gray);
}
.open-menu__inner{
  height: 100%;
  padding: 2.6em 15px;
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  grid-gap: 5em 3em;
  align-items: center;
}
.logoLink{
  height: 100%;
  max-width: 27.4em;
}
.wrap-call{
  grid-column: 1/4;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 3em;
  align-items: center;
  justify-content: start;
}
.btnToggleMenu{
  border: none;
  background: none;
  padding: 0;
  width: 4em;
  height: 4em;
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
.langLink{
  text-decoration: none;
  font-family: var(--font-second);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .28em;
  align-items: center;
  font-weight: 500;
  font-size: 2.8em;
  line-height: 121%;
  color: var(--blue);
  & svg{
    display: block;
    width: 1em;
    height: 1em;
  }
}
.btnOrder_external{
  grid-row: 2;
  grid-column: 1/4;
  font-size: 3.2em;
}
.nav-second {
  grid-column: 1/4;
  position: relative;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
}
.nav-second__items,
.nav-second__submenu-items,
.nav-third__submenu-items{
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1em;
  padding: 2em 0 2em;
  width: 100%;
}

.nav-third__submenu-items {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  height: 100%;
  padding: 0;
}
.nav-second__items{
  & li{
    color: var(--blue);
  }
  & .nav-third__submenu-item{
    color: var(--dark_gray);
    
  }
  & li:hover{
    color: var(--blue);
  }
  & .nav-second__item:hover > ul{
    display: block;
  }
  .nav-second__item_color{
    color: var(--blue);
    margin: 0 0 4em;
  }
}
.nav-second__item,
.nav-second__submenu-item{
  position: static;
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.nav-third__submenu-item{
  padding: 0 0 0 3em;
  &:before{
    width: 1em;
    height: 1em;
    top: 2em;
    border: .3em solid var(--blue);
  }
}
.nav-second__item{
  margin: 0 0 3.2em;
  &:last-child{
    margin: 0;
  }
}
.nav-second__submenu-item,
.nav-third__submenu-item{
  margin: 0 0 1.6em;
  &:last-child{
    margin: 0;
  }
}

.nav-second__items{
  padding: 4em 0;
}
.nav-second__submenu-items {
  & li{
    color: var(--gray)
  }
}
.nav-second__link, .nav-second__link:visited,
.nav-second__submenu-link, .nav-second__submenu-link:visited,
.nav-third__submenu-link, .nav-third__submenu-link:visited{
  border: none;
  padding: 0;
  background: none;
  color: inherit;
  transition: .3s;
  text-decoration: none;
}
.nav-second__link, .nav-second__link:visited{
  font-weight: 700;
  font-size: 3.6em;
  line-height: 133%;
  font-family: var(--font-second);
}
.nav-second__submenu-link, .nav-second__submenu-link:visited{
  font-weight: 700;
  font-size: 2.8em;
  line-height: 114%;
  font-family: var(--font-second);
}
.nav-third__submenu-link, .nav-third__submenu-link:visited{
  font-size: 2.8em;
  line-height: 171%;
}
.btnBack{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.8em;
  line-height: 200%;
  color: var(--blue);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .71em;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  margin: 1.35em 0 1.43em;
  & svg{
    display: block;
    width: 1.5em;
    height: 1.42em;
  }
}
.wrap-btnBack{
  margin: 0 0 3.2em;
  padding: 0;
  &:last-child{
    margin: 0;
  }
  &:before{
    display: none;
  }
}
.btnCall{
  font-size: 1em;
  border: 1px solid  var(--blue);
  background: transparent;
  width: 8.6em;
  height: 8.6em;
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
    width: 4em;
    height: 4em;
    transition: inherit;
    fill: var(--blue);
  }
}
.phone{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 2.3em;
  line-height: 1.21;
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
</style>