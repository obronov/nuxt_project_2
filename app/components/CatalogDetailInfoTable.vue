<template>
  <div class="wrap-table">
    <table class="detail-info-table">
      <tr class="detail-info-table__tr"   
        v-for="(item, index) in infoTable"  
        :key="'tr' + index"
      >
        <td class="detail-info-table__td"   
          v-for="(value, indexTd) in item"  
          :key="'td' + index + indexTd">
          {{value}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  props:{
    info: Array
  },
  computed:{
    infoTable(){
      let title = [];
      let column = this.info.length;
      let row = 0;
      let arrTemplate = []

      this.info.forEach(element => {
        title.push(element.title);
        if(element.values.length > row){
          row = element.values.length
        }
      });

      for (let index = 0; index < row; index++) {
        arrTemplate.push(new Array(column))
      }

      this.info.forEach((element, columnLocal) => {
        element.values.forEach((values, rowLocal) => {
          arrTemplate[rowLocal][columnLocal] = values.value;
        });
      });

        arrTemplate.unshift(title)
       return arrTemplate

    }
  }
}

</script>

<style lang='scss' scoped>
.detail-info-table{
  width: auto;
}
.detail-info-table__tr{
  &:first-of-type{
    font-family: var(--font-second);
    font-weight: 700;
    background: var(--super_bright_gray);
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--blue);
    border: 1px solid var(--white);
  }

}
</style>
