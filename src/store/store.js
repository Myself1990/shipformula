import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //当前选择页面
        page:{
            state:window.localStorage.pageState||2,
            mainPage:'工作台',
            secondaryPage:'工作台',
        },
        //点击历史页面记录
        allPage:[
            {
                mainPage:'工作台',
                secondaryPage:'工作台',
                icon:'iconfont icon-diannao',
                data:[]
            }
        ]
    },
    mutations:{
        //设置一级类目名
        mainPageFun(state,parameter){
            console.log(parameter);
            if(parameter == "工作台"){
                state.page.secondaryPage = '工作台';
            }
            state.page.mainPage = parameter;
        },
        //设置二级类目名
        secondaryPageFun(state,parameter){
            console.log(parameter);
            state.page.secondaryPage = parameter.text;
            //添加到历史页面记录
            let exists = true; 
            for(let i=0;i<state.allPage.length;i++){
                if(state.allPage[i].secondaryPage == parameter.text){
                    exists = false;
                }
            }
            if(exists){
                var obj = {
                    mainPage:state.page.mainPage,
                    secondaryPage:parameter.text,
                    icon:parameter.icon,
                    data:[]
                }
                state.allPage.push(obj)
                console.log(state.allPage)
            }
        },
        //设置用户选择类目样式状态
        handoverStateFun(state){
            let result = state.page.state == 1 ? 2 : 1;
            state.page.state = result;
            window.localStorage.pageState = result;
        },
        //删除历史导航
        closeNavChildFun(state,text){
            let date = state.allPage;
            for(let i=0;i<date.length;i++){
                if(text == date[i].secondaryPage){
                    if(date.length == 2 || i+1 ==date.length){
                        state.page.mainPage = date[i-1].mainPage
                        state.page.secondaryPage = date[i-1].secondaryPage
                    }else{
                        state.page.mainPage = date[i+1].mainPage
                        state.page.secondaryPage = date[i+1].secondaryPage
                    }
                    date.splice(i,1); 

                }
            }
        }
    }
})

export default store;