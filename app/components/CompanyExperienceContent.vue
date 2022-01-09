<template>
  <div class="company-experience-content">
      <div class="company-experience-content__inner">
        <div class="experience">
          <div class="experience__number">{{history.number}}</div>
          <div class="experience__text">{{history.number_caption}}</div>
        </div>
        <div class="experience-description" v-html="history.description"></div>
      </div>
  </div>
</template>

<script>

import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    history: Object
  },
}

</script>

<style lang='scss' scoped>
.company-experience-content{
  padding: 7.7em 0 9em;
  font-size: 1rem;
  background: var(--blue);
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnQAAACbCAYAAADr5AaxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgB7cwxEQAwCASwv/r3TBcEMMCWCEiypFqW+Hw+n8/n8/lm3wsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV6plic/n8/l8Pp9v9r0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcKValvh8Pp/P5/P5Zt8LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFeqZYnP5/P5fD6fb/a9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHClWpb4fD6fz+fz+WbfCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXqmWJz+fz+Xw+n2/2vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwpVqW+Hw+n8/n8/lm3wsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV6plic/n8/l8Pp9v9r0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXPq0Tbi66ejR2gAAAABJRU5ErkJggg==');
  background-position: left bottom;
  background-repeat: no-repeat;
  min-height: 41.9em;
}
.company-experience-content__inner{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 0 8.6em;
  max-width: 824px;
  padding: 0 15px;
  margin: 0 auto;
}
.experience__number{  
  font-size: 14.4em;
  line-height: .8;
  letter-spacing: -0.03em; 
  grid-row: 1/3;
}
.experience__text{
  font-size: 2.4em;
  line-height: 1.16;
  grid-row: 2;
  grid-column: 2;
}
.experience{
  font-weight: 900;
  color: var(--white);
  display: grid;
  grid-template-columns: auto 12em;
  grid-template-rows: auto 1fr;
  grid-gap: 1em;
  justify-content: end;
  &:before{
    content: '+';
    display: block;
    font-size: 12em;
    line-height: .55;
    grid-row: 1;
    grid-column: 2;
  }
}
.experience-description{
  font-size: 1.6em;
  line-height: 1.75;
  color: var(--white);
  background: var(--blue);
  &::v-deep *{
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0 0 1em;
    &:last-child{
      margin: 0;
    }
  }
}
@media screen and (max-width: 1366px) {
  .company-experience-content{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1200px) {
  .company-experience-content{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .company-experience-content{
    font-size: .7rem;
    background-image: none;
    min-height: auto;
  }
  .experience__number{  
    font-size: 14.4em;
    line-height: .8;
  }
  .experience-description{
    font-size: 14px;
    line-height: 1.42;
  }
}
@media screen and (max-width: 768px) {
  .company-experience-content{
    font-size: .6rem;    
  }
  .company-experience-content__inner{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3.2em;
  }
  .company-experience-content__number-text{
    height: 16.8em;
  }
  .company-experience-content__description-text{
    height: 1.4em;
  }
  .experience{
    justify-content: start;
    grid-gap: 1.6em;
  }

}
@media screen and (max-width: 576px) {
  .company-experience-content{
    font-size: .5rem;
    padding: 4em 0 6.4em;
  }

}
</style>