<template>
  <div class="nav_parent">
    <!-- 第一种菜单样式 -->
    <ul class="first_nav" v-if="navState == '1'">
      <ol v-for="data in navList">
        <!-- 判断是否是工作台，是否需要加路由 -->
        <router-link v-if="data.resourceName == '工作台'" v-bind:to="{path: data.linkUrl}">
          <div 
            :class="mainPageData == data.resourceName?'first_title this_one':'first_title'"
            v-bind:data-value="data.resourceName" 
            v-on:click="lastNavLeft(data.resourceName,data.resources.length)"
          >
            <i v-bind:class="data.iconClass"></i>{{data.resourceName}}
          </div>
        </router-link>
        <div v-else
            :class="mainPageData == data.resourceName?'first_title this_one':'first_title'"
            v-bind:data-value="data.resourceName" 
            v-on:click="lastNavLeft(data.resourceName,data.resources.length)"
          >
            <i v-bind:class="data.iconClass"></i>{{data.resourceName}}
        </div>
        <!-- 刷新二级菜单 -->
        <transition name="fnav">
        <ul v-show="data.resourceName == mainPageData?show2:''" class="first_child">
            <router-link v-for="childData in data.resources" v-bind:to="{path: childData.linkUrl}">
              <li v-bind:class="childData.resourceName == secondaryPage?'this_one':''" v-on:click="lastNavRight(childData.resourceName,childData.iconClass)">
                <i v-bind:class="childData.iconClass"></i>{{childData.resourceName}}
              </li>
            </router-link>
        </ul>
        </transition>
      </ol>
    </ul>

    <ul class="last_nav"  v-if="navState == '2'">
        <ol class="last_nav_left">
          <router-link v-if="datas.resourceName == '工作台'" v-for="datas in navList" v-bind:to="{path: datas.linkUrl}">
            <li 
               
              v-bind:data-value="datas.resourceName" 
              v-bind:class="datas.resourceName == mainPageData?'this_one':''" 
              v-bind:title="datas.resourceName" 
              v-on:click="lastNavLeft(datas.resourceName)"
            >
              <i v-bind:class="datas.iconClass"></i>
            </li>
          </router-link>
          <li 
              v-else
              v-bind:data-value="datas.resourceName" 
              v-bind:class="datas.resourceName == mainPageData?'this_one':''" 
              v-bind:title="datas.resourceName" 
              v-on:click="lastNavLeft(datas.resourceName)"
            >
              <i v-bind:class="datas.iconClass"></i>
            </li>
        </ol>
        <transition name="draw">
        <ol v-show="show2" class="last_nav_right">
            <div v-for="datas in navList" v-if="datas.resources.length" v-bind:class="datas.resourceName == mainPageData?'two_display':''" v-bind:data-child="datas.resourceName">
                <div class="child_title">{{datas.resourceName}}</div>
                <router-link v-for="dataChild in datas.resources" v-bind:to="{path: dataChild.linkUrl}">
                  <li v-bind:class="dataChild.resourceName == secondaryPage?'this_two':''" v-on:click="lastNavRight(dataChild.resourceName,dataChild.iconClass)">{{dataChild.resourceName}}</li>
                </router-link>
            </div>
        </ol>
        </transition>
    </ul>
  </div>
<!-- 
    <ol>
      <li><router-link to="/workbench">工作台</router-link></li>
      <li><router-link to="/coa">COA</router-link></li>
      <li><router-link to="/cargopallet">货盘</router-link></li>
      <li><router-link to="/shippallet">船盘</router-link></li>
      <li><router-link to="/cargomatching">船货匹配</router-link></li>
      <li><router-link to="/cargolist">派货清单</router-link></li>
      <li><router-link to="/bidhistory">成交记录</router-link></li>
    </ol>
    <ol>
      <li><router-link to="/voyagesettlement">航次结算</router-link></li>
      <li><router-link to="/shipearnings">单船收益</router-link></li>
      <li><router-link to="/incomedistribution">收益分配</router-link></li>
      <li><router-link to="/benchmarktce">基准TCE评估</router-link></li>
      <li><router-link to="/theratingreport">评级报表</router-link></li>
    </ol>
    <ol>
      <li><router-link to="/emailconfiguration">邮箱配置</router-link></li>
      <li><router-link to="/cargoemail">货盘邮件</router-link></li>
    </ol>
    <ol>
      <li><router-link to="/contractdata">合同数据</router-link></li>
      <li><router-link to="/voyagetce">航次TCE数据</router-link></li>
      <li><router-link to="/outcomes">运营数据</router-link></li>
    </ol> -->


</template>

<script>


export default {
  name: 'Nav',
  data () {
    return {
      show2:false,
      navList:''
    }
  },
  created(){
    this.nav()
  },
  computed: {
    navState(){
      return this.$store.state.page.state;
    },
    mainPageData() {
      this.$store.state.page.mainPage == "工作台"?this.show2 = false:this.show2 = true;
      return this.$store.state.page.mainPage;
    },
    secondaryPage() {
      return this.$store.state.page.secondaryPage;
    }
  },
  methods:{
    nav(){

      //调用左侧菜单ajax，预留口
      //GET -->   http://localhost:8080/web/index/getCurrentUserResources?isPage=0&_=1559100155674
      //需要考虑传参，用户权限

      let navData = [{
	"resources": [],
	"resourceName": "工作台",
	"iconClass": "iconfont icon-diannao",
	"linkUrl": "/workbench",
}, {
  "resourceName": "运营管理",
	"iconClass": "iconfont icon-yunyingguanli",
	"resources": [{
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "COA",
		"iconClass": "iconfont icon-experiment",
		"linkUrl": "/coa",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "货盘",
		"iconClass": "iconfont icon-experiment",
		"linkUrl": "/cargopallet",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "船盘",
		"iconClass": "iconfont icon-ship",
		"linkUrl": "/shippallet",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "船期",
	    "iconClass": "iconfont icon-ship",
		"linkUrl": "/shippingdate",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "船货匹配",
		"iconClass": "iconfont icon-chuanhuopipei",
		"linkUrl": "/cargomatching",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "派货清单",
		"iconClass": "iconfont icon-snippets",
		"linkUrl": "/cargolist",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "成交记录",
		"iconClass": "iconfont icon-tianshenpi",
		"linkUrl": "/bidhistory",
	}, {
		"parentResourceName": "运营管理",
		"resources": [],
		"resourceName": "报文管理",
		"iconClass": "iconfont icon-gongdan",
		"linkUrl": "/adminpacket",
	}],

}, {
  	"resourceName": "POOL结算",
	"iconClass": "iconfont icon-Dollar",
	"resources": [{
		"parentResourceName": "POOL结算",
		"resources": [],
		"resourceName": "航次结算",
		"iconClass": "iconfont icon-jiesuan",
		"linkUrl": "/voyagesettlement",
	}, {
		"parentResourceName": "POOL结算",
		"resources": [],
		"resourceName": "单船收益",
		"iconClass": "iconfont icon-jiesuan",
		"linkUrl": "/shipearnings",
	}, {
		"parentResourceName": "POOL结算",
		"resources": [],
		"resourceName": "收益分配",
		"iconClass": "iconfont icon-guize1",
		"linkUrl": "/incomedistribution",
	}, {
		"parentResourceName": "POOL结算",
		"resources": [],
		"resourceName": "基准TCE评估规则",
		"iconClass": "iconfont icon-chuanbobiaoxianfenxi",
		"linkUrl": "/benchmarktce",
	}, {
		"parentResourceName": "POOL结算",
		"resources": [],
		"resourceName": "评级报表",
		"iconClass": "iconfont icon-certificate",
		"linkUrl": "/theratingreport",
	}],
}, {
  	"resourceName": "邮件解析",
	"iconClass": "iconfont icon-youjianguanli",
	"resources": [{
		"parentResourceName": "邮件解析",
		"resources": [],
		"resourceName": "邮箱配置",
		"iconClass": "iconfont icon-mail",
		"linkUrl": "/emailconfiguration",
	}, {
		"parentResourceName": "邮件解析",
		"resources": [],
		"resourceName": "货盘邮件",
		"iconClass": "iconfont icon-huopanmail",
		"linkUrl": "/cargoemail",
	}],
}, {
	"resourceName": "经营数据",
	"iconClass": "iconfont icon-kpi",
	"resources": [{
		"parentResourceName": "经营数据",
		"resources": [],
		"resourceName": "合同数据",
		"iconClass": "iconfont icon-parcel",
		"linkUrl": "/contractdata",
	}, {
		"parentResourceName": "经营数据",
		"resources": [],
		"resourceName": "航次TCE数据",
		"iconClass": "iconfont icon-TCE",
		"linkUrl": "/voyagetce",
	}, {
		"parentResourceName": "经营数据",
		"resources": [],
		"resourceName": "运营数据",
		"iconClass": "iconfont icon-operation",
		"linkUrl": "/outcomes",
	}],
}, {
  	"resourceName": "权限管理",
	"linkUrl": "",
	"resources": [{
		"parentResourceName": "权限管理",
		"resources": [],
		"resourceName": "公司管理",
		"linkUrl": "/auth/toCompanyPage",
	}, {
		"parentResourceName": "权限管理",
		"resources": [],
		"resourceName": "部门管理",
		"linkUrl": "/auth/toDeptPage",
	}, {
		"parentResourceName": "权限管理",
		"resources": [],
		"resourceName": "资源管理",
		"linkUrl": "/auth/toResourcePage",
	}, {
		"parentResourceName": "权限管理",
		"resources": [],
		"resourceName": "角色管理",
		"linkUrl": "/auth/toRolePage",
	}, {
		"parentResourceName": "权限管理",
		"resources": [],
		"resourceName": "用户管理",
		"linkUrl": "/auth/toUserPage",
	}],

}];
      this.navList =  navData;
      console.log(this.navList);
    },
    lastNavLeft(text){
      this.$store.commit('mainPageFun',text);
    },
    lastNavRight(text,icon){
      console.log(icon);
      this.$store.commit('secondaryPageFun',{
        text,
        icon
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav_parent{
    width: 100%;
    height: 100%;
  }
  .first_nav{
    width: 180px;
    height: 100%;
    overflow: hidden;
    background-color: #353544;

    .first_title{
      height: 40px;
      line-height: 40px;
      padding-left: 8%;
      color: #ffffff;
      cursor: pointer;
      i{
        margin-right: 10px;
        float: left;
        color: #ffffff !important;
      }
      &:hover{
        background-color: #18212A;
        color: #00c1de;
      }
    }

    .first_child{
      overflow: hidden;
      li{
        height: 40px;
        line-height: 40px;
        padding-left: 15%;
        color: #ffffff;
        cursor: pointer;
        i{
          margin-right: 10px;
          float: left;
          color: #ffffff !important;
        }
        &:hover{
          background-color: #18212A;
          color: #00c1de;
        }
      }
    }
  }

  .last_nav{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .last_nav_left{
      width: 50px;
      height: 100%;
      float: left;
      background: #353544;
      color: #fff;
      li{
        width: 50px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
        &:hover{
          background-color: #18212A;
          color: #00c1de;
        }
      }
      
    }
    .last_nav_right{
      height: 100%;
      float: left;
      background-color: #eaedf1;
      overflow: hidden;
      div{
        display: none;
      }
      .child_title{
        display: block;
        height: 45px;
        border-bottom: 1px #e1e1e1 solid;
        line-height: 45px;
        font-weight: bold;
        padding-left: 8%;
      }
      li{
        width: 92%;
        height: 40px;
        line-height: 40px;
        color: #333;
        padding-left: 8%;
        cursor: pointer;
        &:hover{
          background-color: #ffffff;
          color: #00c1de;
        }
      }
    }

    .last_nav_right_none{
      width: 0px;
      height: 100%;
      float: left;
      div{
        display: none;
      }
    }
  }

  .this_one{
    background-color: #00c1de;
    color: #fff;
  }
  .this_two{
    background-color: #ffffff;
    color: #00c1de !important;
  }
  .this_twos{
    height: auto !important;
  }
  .two_display{
    display: block !important;
  }



.last_nav_right{
    width:130px;
    height: 100%;
    background-color:black;
}
.draw-enter-active,.draw-leave-active {
    transition: all 0.5s ease;
}
.draw-enter,.draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
    width: 0;
}

.first_child{
    max-height:400px;
}
.fnav-enter,.fnav-leave-to /* .fade-leave-active below version 2.1.8 */ {
    max-height: 0;
}
.fnav-enter-active,.fnav-leave-active {
    transition: all 0.5s ease;
}


</style>
