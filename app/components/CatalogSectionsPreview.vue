<template>
  <div class="catalog-preview">
    <div class="catalog-preview__header">
      <div class="catalog-preview__title h3">
        <NuxtLink :to="$route.path + '/' + catalogSectionPreview.slug">
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
          :to="$route.path + '/' + catalogSectionPreview.slug + '/' + submenu.slug">
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
  display: none;
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
}

.catalog-preview{
  background: var(--super_bright_gray);
  padding: 4em;
  height: 100%;
}

.catalog-preview__title{
  margin: 0;
  text-transform: uppercase;
  max-width: 10.4em;
  & a, & a:visited{
    text-decoration: none;
  }
}
.catalog-preview__link, .catalog-preview__link:visited{
  text-decoration: none;
  font-size: 1.6em;
  line-height: 1.25;
  color: var(--dark_gray);
  transition: .3s;
  &:hover,
  &:focus{
    font-weight: 700;
    color: var(--blue);
  }
}
.catalog-preview__item{
  margin: 0;
}
.catalog-preview__items{
  padding: 0;
  margin: 0;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4em 3.3em;
  margin: 3.2em 0 0;
}
.oneColumn .catalog-preview__items{
  grid-template-columns: 1fr;
}
@media screen and (max-width: 992px) {
  .catalog-preview__items{
    grid-gap: 2em 1em;
  }
  .catalog-preview__link, .catalog-preview__link:visited{
    font-size: 14px;
    line-height: 1.71;
    &:hover,
    &:focus{
      font-weight: 400;
      color: var(--blue);
    }
  }
}
@media screen and (max-width: 768px) {
  .catalog-preview__header{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 2em;
  }
  .catalog-preview__btn{
    display: block;
  }
  .catalog-preview__title{
   color: var(--gray)
  }
  .catalog-preview__items{
    display: none;
  }
  .isOpen {
    .catalog-preview__items{
      display: block;
      margin: 1.6em 0 0;
    }
    .catalog-preview__item{
      margin: 0 0 16px;
    }
    .catalog-preview__btn{
      transform: rotate(90deg);
    }
  }

  .catalog-preview{
    padding: 1.8em 2.4em;
  }
}
</style>
