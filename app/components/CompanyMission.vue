<template>
  <div class="mission">
    <div class="mission__inner container">
      <h2 class="mission_title" v-if="info.title" v-html="info.title"></h2>
      <div class="mission__description" v-if="info.description" v-html="info.description"></div>
      <ul class="mission__awwards" v-if="!isEmptyArr(info.awards)">
        <li class="mission__awwards-item" v-for="(item, index) in info.awards" :key="index">
          <img class="mission__awwards-img" :src="item.img_src" :alt="item.img_alt" loading='lazy'>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global"
export default {
  mixins: [global],
  props:{
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.mission{
  font-size: 1rem;
  background: var(--super_bright_gray);
  padding: 8em 0 8.4em;
}
.mission__awwards-img{
  display: block;
  width: 100%;
  width: 5.8em;
}
.mission_title{
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue);
  grid-column: 1;
  grid-row: 1;
  margin: 0;
  align-self: center;
}
.mission__description{
  font-family: var(--font-second);
  font-size: 3.6em;
  line-height: 1.11;
  grid-row: 2;
  &::v-deep *{
    font-size: inherit;
    line-height: inherit;
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}
.mission__inner{
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-gap: 2em;
}
.mission__awwards{
  padding: 0;
  margin: 0 -23px 0 -8px;
  grid-row: 1/3;
  grid-column: 2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  font-size: 1em;

}
.mission__awwards-item{
  padding: 0;
  margin: 0 8px 8px;
  &:before{
    display: none;
  }
}
@media screen and (max-width: 1200px){
  .mission{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .mission{
    font-size: .7rem;
  }

}
@media screen and (max-width: 768px){
  .mission{
    font-size: .6rem;
  }

}
@media screen and (max-width: 576px){
  .mission{
    font-size: .5rem;
    padding: 3.2em 0 6.4em;
  }
  .mission__inner{
    grid-template-columns: 8fr 3fr;
    grid-gap: 0 2em;
  }
  .mission__awwards-img{
    width: 5em;
  }
  .mission__awwards{
    margin: 0 -20px 0 -5px;
    grid-row: 1;
  }
  .mission__awwards-item{
    margin: 0 5px 5px;
  }
  .mission__description{
    grid-column: 1/3;
    line-height: 1.33;
  }
  .mission_title{
    font-size: 10px;
    line-height: 12px;
  }
}
</style>