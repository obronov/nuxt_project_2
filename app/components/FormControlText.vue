<template>
  <div class="form-control-text">
    <input 
      v-model="info.value"
      :placeholder="placeholder"
      :type="info.type"
      class="form-control-text__input"
      :class="{isError: info.error, isFull: info.value}"
      :name="info.name"
      >
    <div class="error" v-if="info.error"></div>
  </div>
</template>

<script>

export default {
  props:{
    info: Object
  },
  computed:{
    placeholder(){
      let placeholder = '';
      if(this.info.required){
        placeholder = this.info.placeholder + ' *';
      }else{
        placeholder = this.info.placeholder;
      }

      return placeholder;
    }
      
  
  }
}

</script>

<style lang='scss' scoped>
.form-control-text__input{
  border: none;
  padding: 0 0 8px;
  border-bottom: 1px solid var(--gray);
  font-size: 14px;
  line-height: 24px;
  color: var(--dark_gray);
  transition: .3s;
  width: 100%;
  background: none;
  &:focus{
    border-color: var(--blue);
    color: var(--blue);
  }
  &::placeholder{
    color: var(--gray);
    opacity: 1;
  }
  &.isError{
    &:focus{
      border-color: #E30D13;
      color: var(--dark_gray);
    }
    border-color: #E30D13;
  }
  &.isError:disabled{
    border-color: var(--gray);
  }
  &.isFull:not(:focus):not(.isError){
    border-color: var(--dark_gray);
  }
}
</style>