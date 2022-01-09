<template>
  <div class="catalog-preview">
    <div class="catalog-preview__header">
      <div class="catalog-preview__title">
        <NuxtLink :to="getRootLink() + 'catalog/' + catalogSectionPreview.slug">
          {{catalogSectionPreview.name}}
        </NuxtLink>
      </div>
      <button class="catalog-preview__btn" type="button" @click="$emit('clickBtn')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.0501 16.57C18.0528 16.7697 17.9747 16.9621 17.8334 17.1033C17.6922 17.2446 17.4998 17.3227 17.3001 17.32C16.8859 17.32 16.5501 16.9842 16.5501 16.57V8.5L7.22012 17.84C7.03314 18.0407 6.75156 18.1232 6.48583 18.0554C6.22009 17.9875 6.01259 17.78 5.94473 17.5143C5.87687 17.2486 5.95946 16.967 6.16012 16.78L15.5001 7.44H7.43012C7.0159 7.44 6.68012 7.10421 6.68012 6.69C6.68012 6.27579 7.0159 5.94 7.43012 5.94H17.3101C17.7243 5.94 18.0601 6.27579 18.0601 6.69L18.0501 16.57Z" fill="#0057B8"/>
        </svg>
      </button>
    </div>
    <ul class="catalog-preview__items">
      <li class="catalog-preview__item" v-for="submenu in catalogSectionPreview.submenu" :key="submenu.slug">
        <NuxtLink class="catalog-preview__link" 
          :to="getRootLink() + 'catalog/' + catalogSectionPreview.slug + '/' + submenu.slug">
          {{submenu.name}}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props:{
    catalogSectionPreview: Object
  }
}
</script>

<style lang="scss" scoped>
.catalog-preview__btn{
  border: none;
  background: none;
  padding: 0;
  width: 24px;
  height: 24px;
  font-size: 1em;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
  }
}

.catalog-preview{
  padding: 2em;
  height: 100%;
}

.catalog-preview__title{
  font-family: var(--font-second);
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  & a, & a:visited{
    text-decoration: none;
  }
}
.catalog-preview__link, .catalog-preview__link:visited{
  text-decoration: none;
  font-size: 14px;
  line-height: 1.71;
  color: var(--dark_gray);
  transition: .3s;
  &:hover,
  &:focus{
    font-weight: 700;
    color: var(--blue);
  }
}
.catalog-preview__item{
  margin: 0 0 14px;
  &:last-child{
    margin: 0;
  }
}
.catalog-preview__items{
  padding: 0;
  margin: 0;
  font-size: 1rem;
  display: none;
  margin: 32px 0 0;
}

.isOpen {
  .catalog-preview__items{
    display: block;
    margin: 24px 0 0;
  }
  .catalog-preview__btn{
    transform: rotate(90deg);
  }
}

.catalog-preview__header{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
}


</style>
