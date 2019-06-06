<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="logo" src="./assets/images/whitelogo.png">
        <button v-on:click="handoverState">切换</button>
      </el-header>
      <el-container :style="innerHeight">
          <el-aside class="nav_width">
            <Nav></Nav>
          </el-aside>
        <el-main>
          <NavChild></NavChild>
          <Index></Index>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Index from './components/index'
import Nav from './components/nav'
import NavChild from './components/NavChild'

export default {
  name: 'App',
  data(){
    return {
      //初始化框架高度
      innerHeight:{
        height: this.initialHeight()
      }
    }
  },
  components:{
    Index,
    Nav,
    NavChild
  },
  computed:{
    //初始化框架宽度
    // initialWidth(){
    //   var state = this.$store.state.page.state;
    //   var name = this.$store.state.page.mainPage;
    //   var widths = ''
    //   if(state == 1){
    //     this.show2 = false;
    //   }else{
    //     name == "工作台"?this.show2 = false:this.show2 = true;
    //   }
    //   //return widths;
    // },
  },
  methods:{
    //初始化框架高度
    initialHeight(){
      return window.innerHeight - 60 + "px";
    },
    //切换导航
    handoverState(){
      this.$store.commit('handoverStateFun');
    }
  },
  /*
   * 挂载结束状
  */
  mounted() {
    //监控浏览器变化，更新框架高度
    window.addEventListener('resize', () => {
      this.innerHeight.height = window.innerHeight - 60 + "px";
      this.initialHeight()
    })
  }
}
</script>

<style lang="scss">
  .el-header{
    height: 60px;
    background-color: #353544;
    padding: 0px;
    .logo{
      width: 180px;
    }
  }
  .el-aside{
    background-color: #fff;
  }
  .el-main{
    padding: 0px;
  }

  .nav_width{
    width:auto !important;
    height: 100%;
    background-color:black;
  }
</style>
