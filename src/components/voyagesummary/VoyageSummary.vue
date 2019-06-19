<template>
  <div>
    <div ref="searchHeight">
      <Common :message=search></Common>
    </div>
    <div class="table_box">
      <template>
        <el-table 
          ref="singleTable" 
          :height="tableHeight" 
          :data="tableData.data" 
          highlight-current-row stripe border 
          @current-change="handleCurrentChange" 
          :header-cell-style="{background:'#eaedf1',color:'#333333',borderRight:'1px #dddddd solid'}"
          >
          <el-table-column type="state" label="状态" width="50"></el-table-column>
          <el-table-column property="shipName" label="船名" width="120"></el-table-column>
          <el-table-column property="voyageNo" label="航次" width="120"></el-table-column>
          <el-table-column property="cargoName" label="货品" width="120"></el-table-column>
          <el-table-column property="loadingPort" label="装港" width="120"></el-table-column>
          <el-table-column property="PortDischarge" label="卸港" width="120"></el-table-column>
          <el-table-column property="freightRates" label="运价" width="120"></el-table-column>
          <el-table-column property="contractTypes" label="合同类型" width="120"></el-table-column>
          <el-table-column property="operatingDays" label="运营天" width="120"></el-table-column>
          <el-table-column property="tce" label="TCE(USD)" width="120"></el-table-column>
          <el-table-column property="operator" label="操作人" width="120"></el-table-column>
          <el-table-column property="remark" label="备注"></el-table-column>
        </el-table>
      </template>
    </div>
    <el-pagination background :page-size="20" :pager-count="7" layout="prev, pager, next" :total="tableData.count"></el-pagination>
    <el-dialog
      title="航次总结（）"
      :visible.sync="detailStatus"
      :before-close="handleClose"
      modal-append-to-body
      :modal="false"
      width="auto"
      top="105px"
      style="left:180px;"
      custom-class="voyage_detail"
      left>
      <div :style="'height:'+contentHeight+'px;'"><VoyageSummayDetail ref="childDetail"></VoyageSummayDetail></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="submitDetail">保存</el-button>
        <el-button type="info" size="small" @click="detailStatus = false">提交</el-button>
        <el-button type="info" size="small" @click="detailStatus = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Common from '@/common/Common'   //搜索组件
import VoyageSummayDetail from './VoyageSummaryDetail'
export default {
  name: 'VoyageSummary',
  data () {
    return {
      search:['ships','voyageNo','voyageSummaryStatus','time','cargos'],
      tableHeight:window.innerWidth > 1261 ? window.innerHeight - 60 - 60 - 50 - 30 : window.innerHeight - 60 - 105 - 50 - 30,
      contentHeight:window.innerHeight - 60 - 70 - 48 - 55,
      detailStatus:false,
      tableData: {
        count : 5,
        data:[{
          state : 1,
          shipName : '轩宁',
          voyageNo : 'V1901',
          cargoName : 'PX(1000MT)',
          loadingPort : '南京',
          PortDischarge : 'Yosu',
          freightRates : '$35,000.00',
          contractTypes : '现货',
          operatingDays : '10.00',
          tce : '$19,059.15',
          operator: '王小虎',
          remark: '备舱延迟'
        },{
          state : 1,
          shipName : '轩宁',
          voyageNo : 'V1901',
          cargoName : 'PX(1000MT)',
          loadingPort : '南京',
          PortDischarge : 'Yosu',
          freightRates : '$35,000.00',
          contractTypes : '现货',
          operatingDays : '10.00',
          tce : '$19,059.15',
          operator: '王小虎',
          remark: '备舱延迟'
        },{
          state : 1,
          shipName : '轩宁',
          voyageNo : 'V1901',
          cargoName : 'PX(1000MT)',
          loadingPort : '南京',
          PortDischarge : 'Yosu',
          freightRates : '$35,000.00',
          contractTypes : '现货',
          operatingDays : '10.00',
          tce : '$19,059.15',
          operator: '王小虎',
          remark: '备舱延迟'
        },{
          state : 1,
          shipName : '轩宁',
          voyageNo : 'V1901',
          cargoName : 'PX(1000MT)',
          loadingPort : '南京',
          PortDischarge : 'Yosu',
          freightRates : '$35,000.00',
          contractTypes : '现货',
          operatingDays : '10.00',
          tce : '$19,059.15',
          operator: '王小虎',
          remark: '备舱延迟'
        },{
          state : 1,
          shipName : '轩宁',
          voyageNo : 'V1901',
          cargoName : 'PX(1000MT)',
          loadingPort : '南京',
          PortDischarge : 'Yosu',
          freightRates : '$35,000.00',
          contractTypes : '现货',
          operatingDays : '10.00',
          tce : '$19,059.15',
          operator: '王小虎',
          remark: '备舱延迟'
        }],
        currentRow: null
      }
    }
  },
  components:{
    Common,
    VoyageSummayDetail
  },
  methods:{
    handleCurrentChange(val) {
      this.tableData.currentRow = val;
      this.detailStatus = true;
      console.log(val);
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    submitDetail(){
      console.log(this.$refs.childDetail.detail_date);
    }
  },
  /*
   * 挂载结束状
  */
  mounted() {
    //监控浏览器变化，更新框架高度
    window.addEventListener('resize', () => {
      let searchHeights = this.$refs.searchHeight.offsetHeight;
      this.tableHeight = window.innerHeight - 60 - searchHeights - 50 - 30; 
      this.contentHeight = window.innerHeight - 60 - 70 - 48 - 55;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table_box{
  overflow: hidden;
  padding: 0 10px;;
}
</style>
