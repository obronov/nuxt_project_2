<template>
  <div class="open-menu">
      <div class="open-menu__inner container">
        <NuxtLink class="logoLink" :to="getRootLink()" :title="translate('title_logo')">
          <img class="logoImg" :src="require('~/assets/images/content/logo_blue.png')" :alt="translate('name_company')" loading='lazy'>
        </NuxtLink>

        <FormSearch/>

        <BtnOrder class="btnOrder_internal" :caption="common.header.request_button_text" :number="$store.getters.countProducts" />
        <div class="wrap-btnCloseMenu">
          <button class="btnCloseMenu" type="button" @click="$emit('onclick', false)">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L17 17" stroke-width="3" stroke-linecap="round"/>
              <path d="M2 17L17 2" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <span>{{translate('close')}}</span>
          </button>
        </div>
        <nav class="nav-second">
          <ul class="nav-second__items">
            <li class="nav-second__item" v-for="(item, index) in common.header_drop_down_menu" :key="'first' + index">
              <NuxtLink class="nav-second__link" :to="getRootLink() + item.slug">{{item.name}}</NuxtLink>
              <ul class="nav-second__submenu-items" v-if="(item.submenu != undefined && item.submenu.length > 0)">
                <li class="nav-second__submenu-item" v-for="(subItem, index) in item.submenu" :key="'second' + index">
                  <NuxtLink class="nav-second__submenu-link" :to="getRootLink() + item.slug + '/' + subItem.slug">{{subItem.name}}</NuxtLink>
                  <ul class="nav-third__submenu-items" v-if="(subItem.submenu != undefined && subItem.submenu.length > 0)">
                    <li class="nav-third__submenu-item" v-for="(thirdItem, index) in subItem.submenu" :key="'third' + index">
                      <NuxtLink class="nav-third__submenu-link" :to="getRootLink() + item.slug + '/' + subItem.slug + '/' + thirdItem.slug">{{thirdItem.name}}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
  </div> 
</template>

<script>
import BtnOrder from "~/components/utilities/BtnOrder";
import global from "~/mixins/global";
export default {
  components:{BtnOrder},
  mixins: [global],
  props:{
    common: Object
  },
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
}
.open-menu__inner{
  height: 100%;
  padding: 2em 15px;
  display: grid;
  grid-template-columns: auto 6fr 22.4em;
  grid-gap: 3em 6.3em;
  align-items: end;
}
.logoLink{
  display: grid;
  align-items: center;
  height: 100%;
  max-width: 23.8em;
}

.slide-menu-enter-active, .slide-menu-leave-active {
  transition: opacity .1s;
}
.slide-menu-enter, .slide-menu-leave-to {
  opacity: 0;
}
.btnCloseMenu{
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .75em;
  font-family: var(--font-second);
  font-weight: 700;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--gray);
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  transition: .3s;
  &:hover,
  &:focus{
    color: var(--blue);
  }
  &:hover svg,
  &:focus svg{
    stroke: var(--blue);
  }
  & svg{
    display: block;
    width: 1.18em;
    height: 1.18em;
    stroke: var(--gray);
    transition: inherit;
  }
}
.nav-second {
  grid-column: 1/4;
  margin: 2.5em 0 0;
  position: relative;
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
  height: 50em;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--blue) var(--gray);
}
.nav-second__items{
  & ul{
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    height: 100%;
  }
  & li{
    color: var(--gray);
  }
  & li:hover{
    color: var(--blue);
  }
  & li:hover > ul{
    opacity: 1;
    visibility: visible;
  }
}
.nav-second__item,
.nav-second__submenu-item,
.nav-third__submenu-item{
  position: static;
  padding: 0;
  margin: 0;
  &:before{
    display: none;
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
  max-width: 33.5em;
  padding: 2em 3em 2em 0;
}
.nav-second__submenu-items{
  position: absolute;
  left: 33.5em;
  top: 0;
  max-width: 34.5em;
  border-left: 1px solid var(--gray);
  padding: 2em 6em 2em;
}

.nav-third__submenu-items{
  position: absolute;
  left: 34.5em;
  top: 0;
  max-width: 34.5em;
  border-left: 1px solid #A1A1A1;
  padding: 2em 0 2em 6em;
}

.nav-second__link, .nav-second__link:visited,
.nav-second__submenu-link, .nav-second__submenu-link:visited,
.nav-third__submenu-link, .nav-third__submenu-link:visited{
  color: inherit;
  transition: .3s;
  text-decoration: none;
}
.nav-second__link, .nav-second__link:visited{
  font-weight: 700;
  font-size: 4em;
  line-height: 100%;
  font-family: var(--font-second);
}
.nav-second__submenu-link, .nav-second__submenu-link:visited{
  font-weight: 700;
  font-size: 2.4em;
  line-height: 133%;
  font-family: var(--font-second);
}
.nav-third__submenu-link, .nav-third__submenu-link:visited{
  font-size: 1.4em;
  line-height: 171%;
  &:hover,
  &:focus,
  &.nuxt-link-active{
    font-weight: 700;
  }
}
@media screen and (max-width: 1200px){
  .open-menu__inner{
    grid-template-columns: auto 6fr 22.6em;
  }
}
@media screen and (max-width: 992px){
  .nav-third__submenu-link, .nav-third__submenu-link:visited {
    font-size: 1.5em;
  }
  .open-menu__inner{
    grid-template-columns: auto 6fr 22.9em;
  }
}
</style>