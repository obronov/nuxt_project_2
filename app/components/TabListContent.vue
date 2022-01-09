<template>
  <div class="tab-wrapper">
    <div class="container">
      <div class="scroll-bar">
        <ul class="tab-list">
          <li class="tab-item"  v-for="(item, index) in sections" :key="index">
            <NuxtLink :to="url(item.slug)">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sections: Array,
    getParam: String,
    rootParam: String
  },
  methods:{
    url(slug){
      if(this.getParam){
        return this.$route.path + '?' + this.getParam + '=' + slug;
      }else{
        if(this.rootParam){
          return this.rootParam + '/' + slug;
        }else{
          return this.$route.path + '/' + slug;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrapper {
  padding: 32px 0 8px;
}

ul.tab-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
}

li.tab-item {
  margin: 0 0 24px;
  padding: 0 50px;
  list-style-type: none;
  border-right: 1px solid var(--blue);

  & .nuxt-link-exact-active {
    color: var(--blue);
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }

  &::before {
    display: none;
  }

  a {
    font-weight: 700;
    color: var( --dark_gray);
    text-decoration: none;
    transition: .3s;

    &:hover {
      color: var(--blue);
    }
  }
}

@media (max-width: 1200px) {
  li.tab-item {
    padding: 0 20px;
  }
}

@media (max-width: 992px) {
  .scroll-bar {
    overflow-x: scroll;
  }

  ul.tab-list {
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: calc(100vw - 30px);
  }

  li.tab-item {
    a {
      white-space: nowrap;
    }
  }
}

@media (max-width: 576px) {

  .tab-wrapper {
    padding: 16px 0 0;
  }

  ul.tab-list {
    padding-bottom: 16px;
  }

  li.tab-item {
    margin-bottom: 0;

    a {
      font-size: 1.4rem;
    }
  }
}

</style>
