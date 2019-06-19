<template>
  <ul class="search_title">
      <li v-for="data in message" :class="data == 'time'?'search_list_time':'search_list'">
        <!-- 船名 -->
        <div class="search_list_box" v-if="data == 'ships'">
            <label>船名</label>
            <template>
                <el-select v-model="ships.value" filterable clearable placeholder="请选择">
                    <el-option
                    v-for="item in ships.data"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>

        <!-- 货品名 -->
        <div class="search_list_box" v-if="data == 'cargos'">
            <label>货品</label>
            <template>
                <el-select v-model="cargos.value" filterable clearable placeholder="请选择">
                    <el-option
                    v-for="item in cargos.data"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>

        
        <!-- 航次号 -->
        <div class="search_list_box" v-if="data == 'voyageNo'">
            <label>航次号</label>
            <el-input placeholder="" v-model="voyageNo" clearable></el-input>
        </div>

        <!-- 航次总结状态 -->
        <div class="search_list_box" v-if="data == 'voyageSummaryStatus'">
            <label>状态</label>
            <template>
                <el-select v-model="voyageSummaryStatus.value" filterable clearable placeholder="请选择">
                    <el-option
                    v-for="item in voyageSummaryStatus.data"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>

        <!-- 开始时间~结束时间 -->
        <div class="search_list_box" v-if="data == 'time'">
            <label>时间</label>
            <template>
                <div class="block">
                    <el-date-picker
                        v-model="timeValue"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                    </el-date-picker>
                </div>
            </template>
        </div>
      </li>
      <button class="search_button">?</button>
  </ul>
</template>

<script>
export default {
  name: 'Common',
  props:[
      "message"
  ],
  data () {
    return {
      //船名
      ships: {
        data:
            [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
      },
      //货品
      cargos: {
        data:
            [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
      },
      //航次号
      voyageNo:'',
      //航次总结状态
      voyageSummaryStatus: {
        data:
            [{
                value: '0',
                label: '全部'
                }, {
                value: '1',
                label: '待确认'
                }, {
                value: '2',
                label: '待处理'
                }, {
                value: '3',
                label: '已确认'
                }, {
                value: '4',
                label: '已结束'
            }],
            value: ''
      },
      //开始时间~结束时间
      timeValue:''
        
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search_title{
    min-height: 60px;
    padding: 0 10px;
    overflow: hidden;
    .search_list{
        margin-top: 15px;
        padding-right: 10px;
        overflow: hidden;
        float: left;
        .search_list_box{
            width: 100%;
            height: 30px;
            overflow: hidden;
            label{
                float: left;
                line-height: 30px;
                margin-right: 10px;
            }
            div:last-child{
                width: 170px;
                // display: inline-block;
                overflow: hidden;
            }
        }
        

    }
    .search_list_time{
        width: 265px;
        margin-top: 15px;
        padding-right: 10px;
        overflow: hidden;
        float: left;
        .search_list_box{
            width: 100%;
            height: 30px;
            overflow: hidden;
            label{
                float: left;
                line-height: 30px;
                margin-right: 10px;
            }
            div:last-child{
                width: auto;
                // display: inline-block;
                overflow: hidden;
            }
        }
    }
    .search_button{
        border: 0px;
        float: right;
        text-align: center;
        overflow: hidden;
        line-height: 30px;
        height: 30px;
        width: 30px;
        border-radius: 0;
        color: #FFFFFF;
        background-color: #00c1de!important;
        font-size: 16px;
        margin: 15px 0;
    }
}
</style>
