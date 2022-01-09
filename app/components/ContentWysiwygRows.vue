<template>
  <div class='content-wysiwyg-rows'>
    <div class="rows">
      <h2 class="rows__title" v-if="info.title" v-html="info.title"></h2>
      <div class="rows-table">
        <div class="rows-table__row" v-for="(item, index) in info.items" :key="'row' + index">
          <div class="rows-table__row-name" v-html="item.name"></div>
          <div class="rows-table__row-text" v-html="item.text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    info: Object
  }
}

</script>

<style lang='scss' scoped>
  .content-wysiwyg-rows{
    max-width: 793px;
  }
  .rows__title{
    color: var(--blue);
  }

  .rows-table__row{
    border-top: 1px solid var(--blue);
    padding: 1.6em 0;
    display: grid;
    grid-template-columns: 3fr 5.8fr;
    grid-gap: 0 2em;
    align-items: center;
    &:hover .rows-table__row-name,
    &:focus .rows-table__row-name{
      color: var(--blue);
    }
    &:last-child{
      border-bottom: 1px solid var(--blue);
    }
  }
  .rows-table__row-name{
    font-family: var(--font-second);
    font-weight: bold;
    font-size: 2.4em;
    line-height: 133%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--blue);
    transition: .3s;
  }
   @media (hover: hover){
    .rows-table__row-name{
      color: var(--gray);
    }
  }
  .rows-table__row-name::v-deep *{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
  .rows-table__row-text{
    font-size: 1.4em;
    line-height: 142%;
    color: var(--dark_gray);
  }
  .rows-table__row-text::v-deep *{
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
 
  @media screen and (max-width: 1366px) {
    .rows-table__row-text{
      font-size: 1.55em;
    }
  }
  @media screen and (max-width: 1200px) {
    .rows-table__row-text{
      font-size: 1.75em;
    }
  }
  @media screen and (max-width: 992px) {
    .rows-table__row-text{
      font-size: 2.57em;
    }
    .rows-table__row-name{
      font-size: 3em;
    }
  }
  @media screen and (max-width: 768px) {
    .rows-table__row-name{
      font-size: 3em;
    }
    .rows-table__row-text{
      font-size: 2.33em;
    }
    .rows-table__row{
      padding: 3.2em 0 4.8em;
      grid-template-columns: 1fr;
      grid-gap: 1.6em 0;
    }
  }
  @media screen and (max-width: 576px) {
    .rows-table__row-name{
      font-size: 3.6em;
    }
    .rows-table__row-text{
      font-size: 2.8em;
    }
  }
</style>