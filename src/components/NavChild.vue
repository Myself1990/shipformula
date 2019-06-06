<template>
  <ul class="nav_child">
    <ol>
        <li v-for="data in navChild" v-on:click="setNavChild(data.mainPage,data.secondaryPage,data.icon)" v-bind:class="secondaryPage == data.secondaryPage?'nav_child_one':''"><i :class="data.icon"></i>{{data.secondaryPage}}<i v-on:click.stop="closeNavChild(data.secondaryPage)" :class="data.secondaryPage == '工作台'?'':'iconfont icon-close'"></i></li>
    </ol>
  </ul>
</template>

<script>


export default {
  name: 'NavChild',
  data () {
    return {
      input: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    navChild(){
      return this.$store.state.allPage;
    },
    secondaryPage() {
      return this.$store.state.page.secondaryPage;
    }
  },
  created(text){
    
  },
  methods:{
    setNavChild(mainPage,secondaryPage,icon){
        this.$store.commit('mainPageFun',mainPage)

        this.$store.commit('secondaryPageFun',{
          mainPage : mainPage,
          text : secondaryPage,
          icon : icon
        })
    },
    closeNavChild(text){
      this.$store.commit('closeNavChildFun',text);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav_child{
  height: 45px;
  background-color: #eaedf1;
  ol{
    width: 90%;
    overflow: hidden;
    li{
      width: 150px;
      height: 45px;
      float: left;
      line-height: 45px;
      color: #666666;
      padding-left: 20px;
      box-sizing: border-box;
      border-right: 1px dashed #e1e1e1;
      cursor: pointer;
      i:first-child{
        margin-right: 10px;
        float: left;
      }
      i:last-child{
        float: right;
        font-size: 12px;
        margin-right: 10px;
        display: none;
      }
      &:hover{
        background-color: #ffffff;
        i{
          display: block !important;
        }
      }
    }

    .nav_child_one{
      background-color: #ffffff;
      i{
        display: block !important;
      }
    }
  }
}
</style>
