<template>
  <ul class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">  
    <li class="breadcrumbs-item" 
      v-if="item.add" 
      v-for="(item, index) in crumbs" 
      :key="index" 
      itemprop="itemListElement" 
      itemscope 
      itemtype="https://schema.org/ListItem">
      <NuxtLink class="breadcrumbs-link" itemprop="item" v-if="!item.last" :to="item.route">
        <span itemprop="name">{{item.name}}</span>
        <meta itemprop="position" :content="index + 1">
      </NuxtLink>
      <div class="breadcrumbs-link breadcrumbs-link_last" itemprop="item" v-if="item.last">
        <span itemprop="name">{{(item.name) ? item.name : title}}</span>
        <meta itemprop="position" :content="index + 1">
      </div>
      
    </li>
  </ul>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    meta: Array,
    title: String
  },
  computed:{
    crumbs(){
      let self = this;
      let path = '';
      const fullPath = self.$route.path;
      const params = fullPath.split('/');
      const crumbs = [];

      params.shift();

      params.forEach((param, index) => {        
          let added = false;
          let crumbsItem = {
            route: '',
            name: '',
            add: true,
            last: false
          };

          path = `${path}/${param}`;

          crumbsItem.route = path;

          let paramMeta = param;

          /* Для языковых версий показываем инфу из мета для главной страницы */
          if(param == 'en'){
            paramMeta = "index";
          }

          self.meta.forEach(element => {          
            if(element.page == paramMeta){
              crumbsItem.name = element.title;
              crumbsItem.add = element.add_to_breadcrumbs;
            }
          });

            crumbs.push(crumbsItem);
        
      });

        /* Только для русской версии добавляем таким образом главную в хлебные крошки */
        if(this.$store.state.lang == 'ru'){
          self.meta.forEach(element => {
            if(element.page == "index"){
              let crumbsItemMain = {
                route: '',
                name: '',
                add: false,
                last: false
              };
              crumbsItemMain.route = self.getRootLink();
              crumbsItemMain.name = element.title;
              crumbsItemMain.add = element.add_to_breadcrumbs;
              crumbs.unshift(crumbsItemMain);
            }
          });
        }

      crumbs[crumbs.length  - 1].last = true;
      return crumbs
    }
  }
}

</script>

<style lang='scss' scoped>
.breadcrumbs{
  font-size: 1rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  margin: 2.4em 0;
  &.second .breadcrumbs-item{
    color: var(--gray);
    &:first-child{
      color: var(--blue);
    }
    &:after{
      background: var(--gray);
    }
  }
}
.breadcrumbs-item{
  font-weight: normal;
  font-size: 1em;
  line-height: 120%;
  text-transform: uppercase;
  color: var(--white);
  opacity: .5;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 .9em;
  margin: 0 0.9em 0 0;
  &:last-child{
    margin: 0;
  }
  &:first-child{
    opacity: 1;
  }
  &:before{
    display: none;
  }
  &:after{
    content: '';
    display: block;
    width: 6px;
    height: 1px;
    align-self: center;
    opacity: .5;
    background: var(--white);
  }
  &:last-child:after{
    display: none;
  }
}

.breadcrumbs-link, .breadcrumbs-link:visited{
  text-decoration: none;
  color: inherit;
}
@media screen and (max-width: 992px){
  .breadcrumbs{
    margin: 1.6em 0;
  }
}
</style>