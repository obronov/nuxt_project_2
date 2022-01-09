<template>
  <div class="error">
    <h1 class="error__title">{{error.title}}</h1>
    <div class="error__description" v-if="error.description">{{error.description}}</div>
    <div class="error__wrap-link" v-if="error.link">
      <Link :url="error.link" :text="error.link_name"/>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link';
export default {
  components: { Link },
  props: {
    error: Object
  }
}

</script>

<style lang='scss' scoped>
.error{
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 3.2em 2.1em;
  justify-content: center;
  align-items: center;
  margin: 13.3em auto 15.7em;
  max-width: 88.4em;
  padding: 0 15px;
}
.error__title{
  grid-row: 1/3;
  font-weight: bold;
  font-size: 24em;
  line-height: 120%;
  color: var(--blue);
  margin: .03em 0 0;
}
.error__description{
  font-weight: bold;
  font-size: 2.4em;
  line-height: 100%;
  color: var(--dark_gray);
  align-self: end;
  margin: -2.4em 0 0;
}

.error__wrap-link{
  align-self: start;
}
@media screen and (max-width: 1200px) {
  .error{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .error{
    font-size: .6rem;
  }
}
@media screen and (max-width: 768px) {
  .error{
    font-size: .5rem;
    grid-template-columns: 1fr;
    grid-gap: 6.4em 0;
    margin: 8em auto 23.4em;
  }
  .error__title{
    margin: 0;
    font-size: 30.8em;
    grid-row: auto;
  }
  .error__description{
    font-size: 4.8em;
    line-height: 116%;
    margin: 0;
  }
}
</style>