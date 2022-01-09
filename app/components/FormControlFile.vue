<template>
  <div class="form-control-file">
    <div class="form-control-file__info" :class="{twoColumns: control.showBtnDelete}">
      <div class="form-control-file__name-file">
        <span v-if="control.fileName">{{control.fileName}}</span>
        <!-- <span v-else>{{control.placeholder}}</span> -->
      </div>
      <button v-if="control.showBtnDelete" class="form-control-file__btn-delete-file" type="button" @click="deleteFile()">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.50328 8.72755L5.77357 4.99989L9.50328 1.29967C9.6902 1.08319 9.68008 0.758321 9.48005 0.554058C9.28003 0.349795 8.95753 0.334999 8.73989 0.520101L4.99928 4.19287L1.3241 0.492651C1.11142 0.279793 0.767937 0.279793 0.555257 0.492651C0.452029 0.595734 0.393965 0.736054 0.393965 0.882436C0.393965 1.02882 0.452029 1.16914 0.555257 1.27222L4.22498 4.96695L0.495277 8.66167C0.392049 8.76476 0.333984 8.90508 0.333984 9.05146C0.333984 9.19784 0.392049 9.33816 0.495277 9.44124C0.598181 9.54401 0.737488 9.6013 0.882425 9.60045C1.0247 9.60131 1.16168 9.54615 1.26412 9.44673L4.99928 5.74103L8.73989 9.50712C8.84279 9.60989 8.9821 9.66717 9.12704 9.66633C9.27008 9.66572 9.40717 9.60855 9.50873 9.50712C9.61124 9.40331 9.66833 9.26258 9.6673 9.11619C9.66628 8.96981 9.60723 8.8299 9.50328 8.72755Z"/>
        </svg>
      </button>
    </div>

    <label class="form-control_btn-add-file">
      <input 
        ref='file'
        :type="control.type"
        :name="control.name"
        @change="getNameFile($event, control)"
        accept=".pdf, .doc, .docx, .jpg"
        >
        <span class="btn-file">{{info.btn_name_file}}</span>
    </label>
    <div class="form-control-file__prompt" v-if="info.file_info" v-html="info.file_info"></div>
    <!-- <div class="error" v-if="info.error">{{info.error}}</div> -->
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    info: Object
  },
  data(){
    return{
      showBtnDelete: ''
    }
  },
  methods:{
    deleteFile(){
      this.$refs.file.value = null;
      this.control.fileName = this.control.placeholder;
      this.control.showBtnDelete = false;
    },
    getNameFile(event, info){
      this.control.fileName = event.target.files[0].name.slice(0, 7) + '...';
      this.control.showBtnDelete = true;
    }
  },
  computed:{
    control(){
      let control = {};

      this.info.controls.forEach(element => {
        if(element.type == 'file'){
          this.$set(element, 'fileName', element.placeholder)
          this.$set(element, 'showBtnDelete', false)
          control = element;
        }
      });

      return control;
    }
  }
}

</script>

<style lang='scss' scoped>
.form-control-file{
  display: grid;
  grid-template-columns: 1fr 2.4fr;
  grid-gap: 8px 32px;
}
.form-control-file__info{
  align-self: center;
  justify-self: end;

  &.twoColumns{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 15px;
    align-items: center;
  }
}
.form-control-file__name-file{
  font-size: 14px;
  line-height: 1.1;
  color: var(--gray);

}
.form-control_btn-add-file{

  cursor: pointer;
  position: relative;

  &:hover .btn-file{
    color: var(--white);
    background: var(--blue);
  }
  &:active .btn-file{
    color: var(--white);
    background: var(--dark_blue);
  }
  &:focus-within .btn-file{
    color: var(--white);
    background: var(--blue);
  }
  & input{
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
  }
}
.btn-file{
  background: var(--white);
  padding: 4px 10px 6px;
  color: var(--blue);
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-control-file__prompt{
  grid-column: 1/3;
  font-size: 12px;
  line-height: 16px;
  color: var(--gray);
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
.form-control-file__btn-delete-file{
  display: block;
  width: 10px;
  height: 10px;
  border: none;
  background: none;
  padding: 0;
  &:hover,
  &:focus{
    & svg{
      fill: var(--dark_gray)
    }
  }
  & svg{
    transition: .3s;
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--blue)
  }
}

@media screen and (max-width: 576px){
  .form-control-file{
    grid-template-columns: 1fr;
  }
  .form-control-file__prompt{
    grid-column: inherit;
  }
  .form-control-file__info{
    justify-self: start;
  }
  .form-control_btn-add-file{
    max-width: 231px;
  }
}

</style>