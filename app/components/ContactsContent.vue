<template>
  <div class="contacts__wrapper">
    <div class="container">
      <div class="contacts__row">
        <div class="contacts__info" itemscope itemtype="https://schema.org/Organization">
          <meta itemprop="name" :content="translate('name_company')">
          <h2 class="contacts__title" v-html="cnangeColorTitle(25, contactsBranche.title)"></h2>

          <div class="contacts__list">

            <div class="contacts__item" v-if="!isEmptyArr(contactsBranche.info_office)">
              <p class="contacts__item-title" v-if="titles.title_office">{{titles.title_office}}</p>
              <div class="contacts__item-office" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" v-for="(item, index) in contactsBranche.info_office" :key="'office' + index">
                <p class="contacts__item-adress" itemprop="streetAddress">{{ item.address }}</p>
                <button class="contacts__item-map" type="button" @click="coords = item.coords" v-if="titles.btn_name_show_marker">{{titles.btn_name_show_marker}}</button>
              </div>              
            </div>

            <div class="contacts__item" v-if="!isEmptyArr(contactsBranche.info_production)">
              <p class="contacts__item-title" v-if="titles.title_production">{{titles.title_production}}:</p>
              <div class="contacts__item-production" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress" v-for="(item, index) in contactsBranche.info_production" :key="'production' + index">
                <p class="contacts__item-adress" itemprop="streetAddress">{{ item.address }}</p>
                <button class="contacts__item-map" type="button" @click="coords = item.coords" v-if="titles.btn_name_show_marker">{{titles.btn_name_show_marker}}</button>
              </div>
              
            </div>

            <div class="contacts__item"  v-if="!isEmptyArr(contactsBranche.info_legal_address)">
              <p class="contacts__item-title" v-if="titles.title_legal_address">{{titles.title_legal_address}}</p>
              <p class="contacts__item-adress" 
                itemprop="address"
                itemscope itemtype="https://schema.org/PostalAddress"
                v-for="(item, index) in contactsBranche.info_legal_address" 
                :key="'legal_address' + index">
                <span itemprop="streetAddress">{{ item.address }}</span>                
              </p>
            </div>

            <div class="contacts__item" v-if="!isEmptyArr(contactsBranche.info_mailing_address)">
              <p class="contacts__item-title" v-if="titles.title_mailing_address">{{titles.title_mailing_address}}</p>
              <p class="contacts__item-adress" 
                itemprop="address"
                itemscope itemtype="https://schema.org/PostalAddress"
                v-for="(item, index) in contactsBranche.info_mailing_address" 
                :key="'mailing_address' + index">                
                <span itemprop="streetAddress">{{ item.address }}</span>
              </p>
            </div>
          </div>

          <div class="contacts__list">

            <div class="contacts__item" v-if="!isEmptyArr(contactsBranche.info_phone)">
              <p class="contacts__item-title" v-if="titles.title_phone">{{titles.title_phone}}</p>
              <div class="" v-for="(item, index) in contactsBranche.info_phone"  :key="'phone' + index">
                <a :href="`tel:${convertPhone(item.phone)}`" itemprop="telephone" class="contacts__item-link">
                  {{ item.phone + ' ' + item.add_number }}
                </a>
              </div>
              
            </div>

            <div class="contacts__item" v-if="!isEmptyArr(contactsBranche.info_email)">
              <p class="contacts__item-title" v-if="titles.title_email">{{titles.title_email}}</p>
              <div class="" v-for="(item, index) in contactsBranche.info_email" :key="'email' + index">
                <a :href="`mailto:${item.email}`" itemprop="email" class="contacts__item-link">
                  {{ item.email }}
                </a>
              </div>
            </div>

          </div>

          <div class="contacts__wrap-member" v-if="!isEmptyArr(contactsBranche.director)">
            <div class="contacts__member" v-for="(persone, index) in contactsBranche.director" :key="'member' + index">
              <div class="contacts__member-left">
                <img :src="persone.photo" :alt="persone.name" loading="lazy">
              </div>
              <div class="contacts__member-right">
                <h3 class="contacts__member-name">{{ persone.name }}</h3>
                <p class="contacts__member-position">{{ persone.position }}</p>
                <a :href="`mailto:${persone.email}`" class="contacts__member-link">
                  {{persone.email}}
                </a>
              </div>
            </div>
          </div>

        </div>

        <client-only>
          <div class="contacts-map" v-if="!isEmptyArr(contactsBranche.info_office) || !isEmptyArr(contactsBranche.info_production)">
            <yandex-map 
              :coords="coords" 
              zoom=10 
              :controls=[] 
              :show-all-markers="true"
              :init-without-markers="false"
              :settings="settings"
            >

              <ymap-marker
                v-for="(item, index) in coordinates"
                :key="'map' + index" 
                :coords="item.coords"
                :marker-id="'map' + index"
                :icon="markerIcon"
              />

            </yandex-map>
          </div>          
        </client-only>

      </div>

    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    titles: Object,
    contactsBranche: Object
  },
  data () {
    return {
      coords: [56.052524903725796,92.89133958993524],
      coordsActive: null,
      markerIcon: {
        layout: 'default#image',
        imageHref: require('@/assets/images/design/marker-map.svg'),
        imageSize: [25, 41]
      }
    }
  },
  computed: {
    coordinates(){
      let coordinates = []

      if(!this.isEmptyArr(this.contactsBranche.info_office)){
        this.contactsBranche.info_office.forEach(element => {
          coordinates.push({"coords": element.coords})
        });
      }

      if(!this.isEmptyArr(this.contactsBranche.info_production)){
        this.contactsBranche.info_production.forEach(element => {
          coordinates.push({"coords": element.coords})
        });
      }

      return coordinates
    },
    settings(){
      let settings = {}

      if(this.$store.state.lang == 'en'){
        settings.lang = 'en_US'
      }else{
        settings.lang = 'ru_RU'
      }
      return settings
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts__wrapper {
  background-color: var(--bright_gray);
  border-bottom: 1px solid #d8d8d8;
  overflow: hidden;
}

.contacts__row {
  display: flex;
  flex-wrap: wrap;
}

.contacts__info {
  width: 50%;
  padding: 61px 50px 81px 0;
}

.contacts__title {
  margin-bottom: 40px;
  font-size: 4rem;
  color: var(--blue);
  &::v-deep b{
    color: var(--gray);
  }
}

.contacts__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1%;
}

.contacts__item {
  width: 48%;
  margin: 0 1% 32px 1%;

  a,
  p {
    margin: 0;
  }
}

.contacts__item-title {
  padding-bottom: 12px;
  font-family: var(--font-second);
  font-size: 1.6rem;
  line-height: 100%;
  font-weight: 700;
  color: var(--blue);
}

.contacts__item-adress {
  font-size: 1.6rem;
}

.contacts__item-map {
  color: var(--gray);
  text-decoration: underline;
  cursor: pointer;
  transition: .3s;
  border: none;
  background: none;
  padding: 0;
  font-size: 14px;
  line-height: 2;
  &:focus,
  &:hover {
    color: var(--dark_gray);
  }
}

.contacts__item-link, .contacts__item-link:visited {
  color: var(--dark_gray);
  text-decoration: none;
  transition: .3s;
  &:hover {
    color: var(--blue);
  }
}

.contacts__member {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 9px 0 20px;
  background: #fff;  
  &:last-child{
    margin: 9px 0 0;
  }
}

.contacts__member-left {
  width: 39.3%;
  height: inherit;
  overflow: hidden;
  img {
    display: block;
    max-width: 216px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.contacts__member-right {
  width: 60.7%;
  padding: 25px 30px;
}

.contacts__member-name {
  margin-bottom: 15px;
  font-size: 2.4rem;
  color: var(--blue);
}

.contacts__member-position {
  margin: 0;
  padding-bottom: 30px;
  font-size: 1.6rem;
  line-height: 1.5;
}

.contacts__member-link {
  font-size: 14px;
  line-height: 171%;
  text-decoration: none;
}

.contacts-map {
  position: relative;
  height: inherit;
  width: 50%;
  min-height: 0px;
  min-width: 0px;
  .ymap-container {
    height: 100%;
    width: 50vw;
    overflow-y: hidden;
    overflow-x: visible;
  }
}

@media (max-width: 1200px) {
  h2.contacts__title {
    font-size: 3.2rem;
  }

  .contacts__member-name {
    font-size: 2rem;
  }

  .contacts__member-position {
    font-size: 1.4rem;
  }
}

@media (max-width: 992px) {
  .contacts__member {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .contacts__member-left,
  .contacts__member-right {
    width: auto;
  }
  
  .contacts__info {
    width: 100%;
    padding: 40px 0 60px 0;
  }

  .contacts__member-name {
    font-size: 2.4rem;
  }

  .contacts-map {
    position: relative;
    width: calc(100% + 30px);
    height: 400px;
    margin: 0 -15px;
    overflow: hidden;

    .ymap-container {
      height: 100%;
      width: 100vw;
    }
  }
}

@media (max-width: 768px) {
  .contacts__info{
    padding: 40px 0;
  }

}

@media (max-width: 576px) {
  .contacts__info{
    padding: 32px 0 24px;
  }

  .contacts__item-link, .contacts__item-link:visited {
    font-size: 14px;
    line-height: 1.42;
  }
  .contacts__item-adress{
    padding-bottom: 8px;
    font-size: 1.4rem;
    line-height: 142%;
  }
  .contacts__info[data-v-441d2938] {
    padding: 30px 0;
  }

  h2.contacts__title {
    margin-bottom: 30px;
    font-size: 2.4rem;
  }

  .contacts__item {
    width: 100%;
    margin: 0 0 24px;
  }

  .contacts__item-title {
    font-size: 1.4rem;
    padding-bottom: 4px;
    line-height: 114%;
  }

  .contacts__member {
    margin-top: 0;
  }

  .contacts__member-right {
    padding: 16px 16px 8px;
  }

  .contacts__member-name {
    font-size: 1.4rem;
    line-height: 1.14;
    margin-bottom: 10px;
  }

  .contacts__member-position {
    font-size: 1rem;
    padding-bottom: 16px;
    line-height: 1.2;
  }

  .contacts__member-link {
    font-size: 1.2rem;
    line-height: 2;
  }

  .contacts-map {
    height: 40vh;
  }
  .contacts__member-left {
    img {
      max-width: 124px;
    }
  }
}
</style>
