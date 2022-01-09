<template>
  <div class='transportsCompanies'>
    <client-only>
      <TransportsCompaniesSkeleton v-if="getStateSkeleton()"/>
    </client-only>
    <TransportsCompaniesContent v-if="!isEmpty(info) && !getStateSkeleton()" :info="info"/>
  </div>
</template>

<script>
import global from '~/mixins/global'
export default {
  mixins: [global],
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.transportsCompanies{
  background: var(--super_bright_gray);
  font-size: 1rem;
}

@media screen and (max-width: 992px) {
 .transportsCompanies{
    font-size: .8rem;
  }
}

@media screen and (max-width: 768px) {
 .transportsCompanies{
    font-size: .7rem;
  }
}
@media screen and (max-width: 600px) {
 .transportsCompanies{
    font-size: .5rem;
  }
}

</style>
