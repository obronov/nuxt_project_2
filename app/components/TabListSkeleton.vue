<template>
  <div class="tab-wrapper">
    <div class="container">
      <div class="scroll-bar">
        <SkeletonScaffold :primary="getColor('bright_gray')" :padding="'20px'">
          <ul class="tab-list">
            <li v-mBox v-mDark class="tab-item" v-for="(item, index) in categories" :key="index"></li>
          </ul>
        </SkeletonScaffold>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"

export default {
  mixins: [global],
  props: {
    categories: {
      type: Array
    }
  },
}
</script>

<style lang="scss" scoped>


.tab-wrapper {
  padding: 16px 0;
}

ul.tab-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

li.tab-item {
  width: 20%;
  margin: 0;
  list-style-type: none;
  border-right: 1px solid var(--blue);

  &.tab-item--active {
    a {
      color: var(--blue);
    }
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

</style>
