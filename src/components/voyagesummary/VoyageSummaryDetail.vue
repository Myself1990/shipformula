<template>
  <div class="detail_content">
    <div class="detail_left">
      <ul class="income_box">
        <!-- 总收入 -->
        <ol>
          <li class="voyage_detail_title">
            <span>总收入</span>
            <input class="disables" type="text" readonly unselectable="on" v-model="totalIncome">
          </li>
          <li>
            <span>运费收入:</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.freight">
          </li>
          <li>
            <span>滞期费（应收）</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.edemurrage">
          </li>
          <li>
            <span>滞期费（实收）</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.demurrage">
          </li>
          <li>
            <span>其他收入</span>
            <input type="text" v-model="detail_date.baseBean.incomeOthers">
          </li>
          <li>
            <span>备注</span>
            <textarea v-model="detail_date.baseBean.incomeOthersRemark"></textarea>
          </li>
        </ol>
        <!-- 变动成本 -->
        <ol>
          <li class="voyage_detail_title">
            <span>变动成本</span>
            <input class="disables" v-model="variableCost">
          </li>
          <li>
            <span>佣金:</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.commission">
          </li>
          <li>
            <span>回佣:</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.addCommission">
          </li>
          <li>
            <span>港使费（预估）</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.epda">
          </li>
          <li>
            <span>港使费（实际）</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.pda">
          </li>
          <li>
            <span>燃油费</span>
            <input class="disables" type="text" v-model="fuelConsumption">
          </li>
          <li>
            <span>税金</span>
            <input class="disables" type="text" v-model="detail_date.baseBean.tax">
          </li>
        </ol>
        <!-- 净收入 -->
        <ol>
          <li class="voyage_detail_title">
            <span>净收入</span>
            <input class="disables" type="text" v-model="grossProfit">
          </li>
          <li>
            <span>不含滞期费TCE:</span>
            <input class="disables" type="text" v-model="tceWithoutDemurrage">
          </li>
          <li>
            <span>含滞期费TCE:</span>
            <input class="disables" type="text" v-model="tceWithDemurrage">
          </li>
          <li>
            <span>结算币种</span>
            <el-select v-model="detail_date.baseBean.currency" placeholder="请选择" style="width:60%;float:right;margin-right:2%;">
              <el-option
                v-for="item in currency1.data"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span>汇率</span>
            <input type="text" v-model="detail_date.baseBean.exchangeRate">
          </li>
        </ol>
      </ul>

      <ul class="contract_box">
        <div class="voyage_detail_title">合同信息(内贸)</div>
        <div v-for="(contractData,index) in this.detail_date.contractBeanList">
          <ol v-for="cargoData in contractData.contractCargoBeanList">
            <li>
              <span>货品</span>
              <input class="disables" type="text" v-model="cargoData.cargoDisplayName">
            </li>
            <li>
              <span>合同货量(MT)</span>
              <input class="disables" type="text" v-model="cargoData.qtty">
            </li>
            <li>
              <span>受载期</span>
              <el-date-picker v-model="cargoData.laydays" start-placeholde="开始时间" end-placeholde="结束时间" type="daterange" style="width:55%; height:40px;"></el-date-picker>
              <!--cargoData.laycan,cargoData.cancelDay -->
            </li>
            <li>
              <span>计价方式</span>
              <el-select v-model="cargoData.pricingMode" placeholder="请选择" style="width:55%;">
                <el-option
                  v-for="item in pricingMode.data"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  >
                </el-option>
              </el-select>
            </li>
            <li>
              <span>运价</span>
              <input class="disables" type="text" v-model="contractData.freight">
            </li>
            <li>
              <span>合同装卸时间</span>
              <input class="disables" type="text" v-model="cargoData.laytime">
            </li>
            <li>
              <span>合同日</span>
              <input class="disables" type="text" v-model="contractData.cpDate">
            </li>
            <li>
              <span>滞期费用(应收)</span>
              <input class="disables" type="text" v-model="contractData.edemurrage">
            </li>
            <li>
              <span>结算币种</span>
              <input class="disables" type="text" v-model="contractData.currency">
            </li>
            <li>
              <span>合同类型</span>
              <el-select v-model="contractData.contractType" placeholder="请选择" style="width:55%;">
                <el-option
                  v-for="item in contractType.data"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <span>滞期费率</span>
              <input class="disables" type="text" v-model="contractData.demurrageRate">
            </li>
            <li>
              <span>滞期费(实收)</span>
              <input class="disables" type="text" v-model="contractData.demurrage">
            </li>
            <li>
              <span>经纪人1</span>
              <input class="disables" type="text" v-model="contractData.brk1">
            </li>
            <li>
              <span>佣金率1</span>
              <input class="disables" type="text" v-model="contractData.comisionRate1">
            </li>
            <li>
              <span>经纪人2</span>
              <input class="disables" type="text" v-model="contractData.brk2">
            </li>
            <li>
              <span>佣金率2</span>
              <input class="disables" type="text" v-model="contractData.comisionRate2">
            </li>
            <li class="two_width">
              <span>租家</span>
              <input class="disables" type="text" v-model="contractData.charter">
            </li>
            <li class="two_width">
              <span>回佣率</span>
              <input class="disables" type="text" v-model="contractData.addComisionRate">
            </li>
            <div class="port_array">
              <div class="port_array_child">
                <li v-for="(zportData,index) in cargoData.contractPortBeanList" v-if="zportData.callingPurpose == 1">
                  <span>装港</span>
                  <input class="disables" type="text" v-model="zportData.portDisplayName">
                  <div v-if="index == 0 || index == 1" @click="addPort('z',cargoData,index)">+</div>
                  <div v-else @click="removePort('z',cargoData,index)">-</div>
                </li>
              </div>
              <div class="port_array_child">
                <li v-for="(xportData,index) in cargoData.contractPortBeanList" v-if="xportData.callingPurpose == 2">
                  <span>卸港</span>
                  <input class="disables" type="text" v-model="xportData.portDisplayName">
                  <div v-if="index == 0 || index == 1" @click="addPort('x',cargoData,index)">+</div>
                  <div v-else @click="removePort('z',cargoData,index)">-</div>
                </li>
              </div>
              <div class="port_array_child">
                <li v-for="(qtyData,index) in cargoData.sbillQtys">
                  <span>提单货量(MT)</span>
                  <input class="disables" type="text" v-model="cargoData.sbillQtys[index]">
                  <div v-if="index == 0" @click="addQtty(cargoData,index)">+</div>
                  <div v-else @click="removeQtty(cargoData,index)">-</div>
                </li>
              </div>
            </div>
          </ol>
        </div>
      </ul>

      <ul class="oil_box">
        <div class="voyage_detail_title">油耗信息</div>
        <ol>
          <li>
            <span>开始HSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.startRobHsfo">
          </li>
          <li>
            <span>结束HSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.endRobHsfo">
          </li>
          <li>
            <span>总用HSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.fuelConsumptionHsfo">
          </li>
          <li>
            <span>开始LSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.startRobLsfo">
          </li>
          <li>
            <span>结束LSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.endRobLsfo">
          </li>
          <li>
            <span>总用LSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.fuelConsumptionLsfo">
          </li>
          <li>
            <span>开始MDO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.startRobMdo">
          </li>
          <li>
            <span>结束MDO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.endRobMdo">
          </li>
          <li>
            <span>总用MDO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.fuelConsumptionMdo">
          </li>
          <li>
            <span>开始MGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.startRobMgo">
          </li>
          <li>
            <span>结束MGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.endRobMgo">
          </li>
          <li>
            <span>总用MGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.fuelConsumptionMgo">
          </li>
          <li>
            <span>开始LSMGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.startRobLsmgo">
          </li>
          <li>
            <span>结束LSMGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.endRobLsmgo">
          </li>
          <li>
            <span>总用LSMGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.fuelConsumptionLsmgo">
          </li>
        </ol>

        <ol>
          <li>
            <span>实补HSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.suppliedRobHsfo">
          </li>
          <li>
            <span>HSFO每吨价(新供应)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].hsfoPrice">
          </li>
          <li>
            <span>HSFO运费</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].hsfoBarge">
          </li>
          <li>
            <span>实补LSFO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.suppliedRobLsfo">
          </li>
          <li>
            <span>LSFO每吨价(新供应)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].lsfoPrice">
          </li>
          <li>
            <span>LSFO运费</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].lsfoBarge">
          </li>
          <li>
            <span>实补MDO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.suppliedRobMdo">
          </li>
          <li>
            <span>MDO每吨价(新供应)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].mdoPrice">
          </li>
          <li>
            <span>MDO运费</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].mdoBarge">
          </li>
          <li>
            <span>实补MGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.suppliedRobMgo">
          </li>
          <li>
            <span>MGO每吨价(新供应)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].mgoPrice">
          </li>
          <li>
            <span>MGO运费</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].mgoBarge">
          </li>
          <li>
            <span>实补LSMGO量(MT)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.suppliedRobLsmgo">
          </li>
          <li>
            <span>LSMGO每吨价(新供应)</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].lsmgoPrice">
          </li>
          <li>
            <span>LSMGO运费</span>
            <input class="disables" type="text" v-model="detail_date.bunkerBean.oilPriceBeanList[1].lsmgoBarge">
          </li>
        </ol>

        <ol>
          <li>
            <span>HSFO总成本</span>
            <input class="disables" type="text" v-model="hsfoConsumption">
          </li>
          <li>
            <span>LSFO总成本</span>
            <input class="disables" type="text" v-model="lsfoConsumption">
          </li>
          <li>
            <span>MSO总成本</span>
            <input class="disables" type="text" v-model="mdoConsumption">
          </li>
          <li>
            <span>MDO总成本</span>
            <input class="disables" type="text" v-model="mgoConsumption">
          </li>
          <li>
            <span>LSMGO总成本</span>
            <input class="disables" type="text" v-model="lsmgoConsumption">
          </li>
        </ol>
      </ul>

      <ul class="kpi_box">
        <div class="voyage_detail_title">航次KPI</div>
        <ol class="kpi_first">
          <li>
            <span>总航行里程（海里）</span>
            <input class="disables" type="text" v-model="totalRange">
          </li>
          <li>
            <span>Miss Laycan（天）</span>
            <input class="disables" type="text" v-model="missLaycan">
          </li>
          <li>
            <span>重载航行里程（海里）</span>
            <input class="disables" type="text" v-model="ladenRange">
          </li>
          <li>
            <span>等泊率</span>
            <input class="disables" type="text" v-model="waitingRate">
          </li>
        </ol>

        <ol class="kpi_last">
          <li>
            <span>预估TCE</span>
            <input class="disables" type="text" v-model="etce">
          </li>
          <li>
            <span>预算运营天</span>
            <input class="disables" type="text" v-model="evoyageDays">
          </li>
          <li>
            <span>航次航行率</span>
            <input class="disables" type="text" v-model="sailingRate">
          </li>
          <li>
            <span>实际TCE</span>
            <input class="disables" type="text" v-model="tceWithDemurrage">
          </li>
          <li>
            <span>实际运营天</span>
            <input class="disables" type="text" v-model="peratingDay">
          </li>
          <li>
            <span>重载航行率</span>
            <input class="disables" type="text" v-model="ladenRate">
          </li>
        </ol>

        <ol class="kpi_last">
          <li>
            <span>预估港使费占比</span>
            <input class="disables" type="text" v-model="epadRate">
          </li>
          <li>
            <span>预估佣金占比</span>
            <input class="disables" type="text" v-model="ecommisionRate">
          </li>
          <li>
            <span>预估油耗占比</span>
            <input class="disables" type="text" v-model="efuelConsumptionRate">
          </li>
          <li>
            <span>实际港使费占比</span>
            <input class="disables" type="text" v-model="padRate">
          </li>
          <li>
            <span>实际佣金占比</span>
            <input class="disables" type="text" v-model="commisionRate">
          </li>
          <li>
            <span>实际油耗占比</span>
            <input class="disables" type="text" v-model="fuelConsumptionRate">
          </li>
        </ol>
      </ul>

      <!-- 备注 -->
      <ul class="remark">
        <div class="voyage_detail_title">备注</div>
        <ol>
          <li>
            <span>备注</span>
            <input type="text" value="">
          </li>
        </ol>
      </ul>
    </div>
    <div class="detail_right">
      <ul class="sailingday_box">
        <div class="voyage_detail_title">
          <span>总航行天</span>
          <input class="disables" type="text" v-model="totalVoyageDays"/>
        </div>
        <ol>
        
          <li>
            <span>航次开始时间</span>
            <el-date-picker v-model="startDate" type="datetime" placeholder="选择日期" style="width:55%;"></el-date-picker>
          </li>
          <li>
            <span>航次结束时间</span>
            <el-date-picker v-model="endDate" type="datetime" placeholder="选择日期" style="width:55%;"></el-date-picker>
          </li>
          <li>
            <span>运营天</span>
            <input type="text" v-model="peratingDay"/>
          </li>
          <li>
            <span>Off Hire(天)</span>
            <input type="text" v-model="detail_date.baseBean.offhireDays"/>
          </li>
          <li>
            <span>Off Hire原因</span>
            <el-select v-model="offhire.value" placeholder="请选择" style="width:55%;">
              <el-option
                v-for="item in offhire.data"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span>重载航行天</span>
            <input type="text" v-model="detail_date.baseBean.ladenDays"/>
          </li>
          <li>
            <span>洗舱耗时(小时)</span>
            <input type="text" v-model="detail_date.baseBean.washingDays"/>
          </li>
          <li>
            <span>等泊时长(小时)</span>
            <input type="text" v-model="detail_date.baseBean.waitingDays"/>
          </li>
          <li>
            <span>作业时长(小时)</span>
            <input type="text" v-model="detail_date.baseBean.workingDays"/>
          </li>
        </ol>
      </ul>


      <ul class="affiliated_box">
        <div class="voyage_detail_title">
          <span>挂靠记录</span>
          <div class="add_detail" @click="addDetail(detail_date.operationPortBeanList)">+</div>
        </div>
        <ol v-for="(data,index) in detail_date.operationPortBeanList">
          <li>
            <span>港口</span>
            <input type="text" v-model="data.portDisplayName"/>
          </li>
          <li>
            <span>港口标志</span>
            <el-select v-model="data.callingPurpose" placeholder="请选择" style="width:55%;">
              <el-option
                v-for="item in callingPurpose.data"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span>到港时间</span>
            <el-date-picker
              v-model="data.ata"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>NOR时间</span>
            <el-date-picker
              v-model="data.norTender"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>靠泊时间</span>
            <el-date-picker
              v-model="data.atb"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>装/卸时间</span>
            <el-date-picker
              v-model="data.commerceCargoOperation"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>完货时间</span>
            <el-date-picker
              v-model="data.completeCargoOperation"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>离港时间</span>
            <el-date-picker
              v-model="data.atd"
              type="datetime"
              placeholder="选择日期" style="width:55%;">
            </el-date-picker>
          </li>
          <li>
            <span>拖轮使用</span>
            <input type="text" v-model="data.tugUse"/>
          </li>
          <li>
            <span>港使费(预估)</span>
            <input type="text" v-model="data.epda"/>
          </li>
          <li>
            <span>港使费(实际)</span>
            <input type="text" v-model="data.pda"/>
          </li>
          <li>
            <span>港口代理</span>
            <input type="text" v-model="data.portAgentName"/>
          </li>
          <div class="cargo_box" v-for="(cargoData,index) in data.operationCargoBeanList">
            <li>
              <span>货品</span>
              <input type="text" v-model="cargoData.cargoDisplayName"/>
            </li>
            <li>
              <span>装卸货量(MT)</span>
              <input type="text" v-model="cargoData.operationQty"/>
            </li>
            <li>
              <span>装卸标志</span>
              <el-select v-model="cargoData.callingPurpose" placeholder="请选择" style="width:55%;">
                <el-option
                  v-for="item in cargoAction.data"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <div class="operation" @click="addCargo(data,index)">+</div>
            <div class="operation" @click="removeCargo(data,index)">-</div>
          </div>
          <div class="delete" @click="removeDetail(detail_date.operationPortBeanList,index)">删除</div>
        </ol>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VoyageSummaryDetail',
  data () {
    return {
      /*-----总数据-----*/
        detail_date:'',

      /*-----结算币种、汇率更改-----*/
      firstComeIn:0,
      initialRate:0,

      /*-----净收入-----*/
        //结算币种
        currency1: {
          data:[{
            value: 1,
            label: '人民币'
          }, {
            value: 2,
            label: '美元'
          }],
          value:''
        },


      /*-----油耗信息-----*/
        hsfoConsumption:'',
        lsfoConsumption:'',
        mdoConsumption:'',
        mgoConsumption:'',
        lsmgoConsumption:'',


      /*-----KPI-----*/
        //总航行里程（海里）
        totalRange:'',
        //Miss Laycan（天）
        missLaycan:'',
        //重载航行里程（海里）
        ladenRange:'',
        //等泊率
        //waitingRate:'',
        //预估TCE
        etce:'',
        //预算运营天
        evoyageDays:'',
        //航次航行率
        //sailingRate:'',
        //实际TCE
        tce:'',
        //实际运营天
        //voyageDays:'',
        //重载航行率
        //ladenRate:'',
        //预估港使费占比
        //epadRate:'',
        //预估佣金占比
        ecommisionRate:'',
        //预估油耗占比
        efuelConsumptionRate:'',
        //实际港使费占比
        //padRate:'',
        //实际佣金占比
        //commisionRate:'',
        //实际油耗占比
        //fuelConsumptionRate:'',

      /*-----总航行天-----*/
        //航次开始时间
        startDate:'',
        //航次结束时间
        endDate:'',
        offhire : {
          data:[{
            value: 1,
            label: '无'
          }, {
            value: 2,
            label: '验舱未通过'
          }, {
            value: 3,
            label: '码头拥堵'
          }, {
            value: 4,
            label: '机械故障'
          }, {
            value: 5,
            label: '货损'
          }, {
            value: 6,
            label: '临时加油'
          }, {
            value: 7,
            label: '码头手续问题'
          }, {
            value: 8,
            label: 'PSC滞留'
          }, {
            value: 9,
            label: '夜航限制'
          }, {
            value: 10,
            label: '天气原因'
          }, {
            value: 11,
            label: '其他'
          }],
          value:''
        },



      /*-----挂靠记录-----*/

        //港口标志
        callingPurpose: {
          data:[{
            label: '装货',
            value:1
          }, {
            label: '卸货',
            value:2
          }, {
            value:3,
            label: '加油'
          }, {
            value:4,
            label: '装&卸'
          }, {
            value:5,
            label: '装&加油'
          }, {
            value:6,
            label: '卸&加油'
          }, {
            value:7,
            label: '装&卸&加油'
          }, {
            value:8,
            label: '空载'
          }, {
            value:9,
            label: '航修'
          }, {
            value:10,
            label: '船坞修理'
          }, {
            value:11,
            label: '转船'
          }, {
            value:12,
            label: '其他'
          }],
          value:''
        },

        cargoAction: {
          data:[{
            label: '装',
            value:1
          }, {
            label: '卸',
            value:2
          }],
          value:''
        },

        

      /*-----合同信息-----*/
      //计价方式 -- 货中的
      pricingMode:{
        data:[
          {
            label:'单吨价',
            value:1,
          },
          {
            label:'包干',
            value:2,
          }
        ],
        value:''
      },

      //合同类型
      contractType:{
        data:[
          {
            label:'现货',
            value:1,
          },
          {
            label:'COA',
            value:2,
          },
          {
            label:'期租',
            value:3,
          }
        ],
        value:'现货'
      },

    }
  },
  created:function(){
    this.detail_date = {
        "baseBean": {
          "totalVoyageDays":30,
          "addCommission": 1000, 
          "ballastDays": 5,   
          "commission": 500,     
          "companyId": "pool001",    
          "costOthers": 3000,    
          "costOthersRemark": "",  
          "currency": 2,      
          "demurrage": 15000,     
          "edemurrage": 10000,     
          "endDate": "2019-04-03", 
          "epda": 20000,          
          "exchangeRate": 6.8,  
          "freight": 50000,        
          "fuelConsumption": 20000,
          "grossProfit": 10000,    
          "incomeOthers": 5000,   
          "incomeOthersRemark": "",
          "ladenDays": 20,      
          "offhireDays": 5,   
          "offhireReason": 1,  
          "pda": 15000,          
          "reportListUuid": "listuuid",
          "startDate": "2019-03-15",
          "tax": 0,           
          "tceWithDemurrage": 50000, 
          "tceWithoutDemurrage": 30000, 
          "totalIncome": 150000,     
          "vesselDisplayName": "合众1", 
          "vesselImo": "9711884",     
          "voyageDays": 20,     
          "voyageNo": "V1901",     
          "waitingDays": 36,    
          "washingDays": 5,     
          "workingDays": 25,
          "dbVersion":0		
        },
        "bunkerBean": {
          "companyId": "pool001",       
          "endRobHsfo": 100,      
          "endRobLsfo": 80,      
          "endRobLsmgo": 70,     
          "endRobMdo": 60,      
          "endRobMgo": 50,       
          "fuelConsumptionHsfo": 30, 
          "fuelConsumptionLsfo": 40, 
          "fuelConsumptionLsmgo": 50,
          "fuelConsumptionMdo": 60,  
          "fuelConsumptionMgo": 700, 
          "oilPriceBeanList": [
              {
            "companyId": "pool001",
            "hsfoBarge": 300,   
            "hsfoCurrency": 1,
            "hsfoPrice": 500,  
            "lsfoBarge": 400,   
            "lsfoCurrency": 1,
            "lsfoPrice": 350,   
            "lsmgoBarge": 380,  
            "lsmgoCurrency": 1,
            "lsmgoPrice": 400,  
            "mdoBarge": 400,    
            "mdoCurrency": 1, 
            "mdoPrice": 400,   
            "mgoBarge": 500,    
            "mgoCurrency": 1, 
            "mgoPrice": 500,   
            "reportBaseUuid": "baseuuid",
            "reportBunkerUuid": "bunkeruuid",
            "uuid": "oilprice",   
            "hsfoConsumption":'',
            "lsfoConsumption":'',
            "mdoConsumption":'',
            "mgoConsumption":'',
            "lsmgoConsumption":'',           
          },
          {
            "companyId": "pool001", 
            "hsfoBarge": 500,   
            "hsfoCurrency": 2,
            "hsfoPrice": 350,   
            "lsfoBarge": 400,   
            "lsfoCurrency": 2,
            "lsfoPrice": 200,  
            "lsmgoBarge": 300,  
            "lsmgoCurrency": 2,
            "lsmgoPrice": 400, 
            "mdoBarge": 500,    
            "mdoCurrency": 2, 
            "mdoPrice": 500,    
            "mgoBarge": 300,    
            "mgoCurrency": 2, 
            "mgoPrice": 500,    
            "reportBaseUuid": "baseuuid", 
            "reportBunkerUuid": "bunkeruuid",
            "uuid": "bunkeruuidpre",
            "hsfoConsumption":'',
            "lsfoConsumption":'',
            "mdoConsumption":'',
            "mgoConsumption":'',
            "lsmgoConsumption":'',  
          }],
          "reportBaseUuid": "baseuuid", 
          "startRobHsfo": 100,   
          "startRobLsfo": 80,    
          "startRobLsmgo": 70,  
          "startRobMdo": 60,     
          "startRobMgo": 50,  
          "suppliedDate":"2019-04-01", 
          "suppliedPortDisplayName":"大连", 
          "suppliedPortId":"PT00012",         
          "suppliedRobHsfo":500,         
          "suppliedRobLsfo":400,        
          "suppliedRobLsmgo":350,        
          "suppliedRobMdo":200,           
          "suppliedRobMgo":100,           
          "uuid":"bunkeruuid",         
        },
        "contractBeanList": [{
          "bbs": "2/1",    
          "brk1": "经纪1",    
          "brk2": "经纪2",   
          "brkContractNo": "",  
          "charter": "租家",       
          "charterContractNo": "", 
          "coaContractNo": "",     
          "contractCargoBeanList": [{
            "bbs": "2/1",      
            "sbillQtys": [
              1000,
              1500
            ],   
            "cancelDay": "2019-04-03",  
            "cargoDisplayName": "SM",     
            "cargoEnquiryId": "CA201902160549122105",        
            "cargoId": "cg_0001",               
            "laytime": 5,               
            
            "contractPortBeanList": [{
              "callingPurpose": 1, 
              "portDisplayName": "漕泾",
              "portId": "PT00007",         
              "reportContractCargoUuid": "contractcargouuid",  
              "reportContractUuid": "contractuuid",      
              "seq": 2,             
              "uuid": "contractportlist1"            
            },{
              "callingPurpose": 2, 
              "portDisplayName": "釜山",
              "portId": "PT00008",         
              "reportContractCargoUuid": "contractcargouuid",  
              "reportContractUuid": "contractuuid",      
              "seq": 2,             
              "uuid": "contractportlist1"            
            }],
            "currency": 1,               
            "freight": 2000,               
            "inBulkWith5": 1,            
            "laydays":[
              '2019-03-20',
              '2019-04-03'
            ],
            "laycan": "2019-03-20",      
            "laytime": 6,                
            "payment": "",                
            "pricingMode": 2,            
            "qtty": 1000,                  
            "reportContractUuid": "contractuuid",     
            "uuid": "contractcargouuid"                  
          }],
          "contractNo": "CN201906011023535007",          
          "contractType": 1,       
          "cpDate": "2019-03-12",   
          "cpPerson": "签约人",            
          "currency": 1,            
          "demurrage": 1000,           
          "demurrageCurrency": 1,    
          "demurrageRate": 2.5,        
          "edemurrage": 250,           
          "freight": 10000,               
          "incomeOthers": 0,          
          "incomeOthersRemark": "",                 
          "l3c1st": "SM",              
          "l3c2nd": "ACT",              
          "l3c3rd": "ECH",              
          "laytime": 10,             
          "oos": 1,                   
          "ownershipMonth": "3",      
          "ownershipYear": "2019",       
          "payment": "",            
          "pricingMode": 1,           
          "realCharter": "真实租家",         
          "reportBaseUuid": "baseuuid",      
          "taxRate": 1.5,           
          "comisionRate1": 2.5,            
          "comisionRate2": 3,              
          "addComisionRate": 2.5,              
          "tcContractNo": "",        
          "timeBar": 0,               
          "tradeType": 1,            
          "uuid": "contractuuid",              
          "vesselDisplayName": "合众1",    
          "vesselImo": "9711884",           
          "voyageNo": "V1901"             
        },{
          "bbs": "2/1",    
          "brk1": "经纪1",    
          "brk2": "经纪2",   
          "brkContractNo": "",  
          "charter": "租家",       
          "charterContractNo": "", 
          "coaContractNo": "",     
          "contractCargoBeanList": [{
            "bbs": "2/1",      
            "sbillQtys": [
              1000,
              1500
            ],   
            "cancelDay": "2019-04-03",  
            "cargoDisplayName": "SM",     
            "cargoEnquiryId": "CA201902160549122105",        
            "cargoId": "cg_0001",               
            "laytime": 5,               
            
            "contractPortBeanList": [{
              "callingPurpose": 1, 
              "portDisplayName": "漕泾",
              "portId": "PT00007",         
              "reportContractCargoUuid": "contractcargouuid",  
              "reportContractUuid": "contractuuid",      
              "seq": 2,             
              "uuid": "contractportlist1"            
            },{
              "callingPurpose": 2, 
              "portDisplayName": "釜山",
              "portId": "PT00008",         
              "reportContractCargoUuid": "contractcargouuid",  
              "reportContractUuid": "contractuuid",      
              "seq": 2,             
              "uuid": "contractportlist1"            
            }],
            "currency": 1,               
            "freight": 2000,               
            "inBulkWith5": 1,            
            "laydays":[
              '2019-03-15',
              '2019-04-03'
            ],
            "laycan": "2019-03-15",      
            "laytime": 6,                
            "payment": "",                
            "pricingMode": 1,            
            "qtty": 1000,                  
            "reportContractUuid": "contractuuid",     
            "uuid": "contractcargouuid"                  
          }],
          "contractNo": "CN201906011023535007",          
          "contractType": 1,       
          "cpDate": "2019-03-12",   
          "cpPerson": "签约人",            
          "currency": 1,            
          "demurrage": 1000,           
          "demurrageCurrency": 1,    
          "demurrageRate": 2.5,        
          "edemurrage": 250,           
          "freight": 10000,               
          "incomeOthers": 0,          
          "incomeOthersRemark": "",                 
          "l3c1st": "SM",              
          "l3c2nd": "ACT",              
          "l3c3rd": "ECH",              
          "laytime": 10,             
          "oos": 1,                   
          "ownershipMonth": "3",      
          "ownershipYear": "2019",       
          "payment": "",            
          "pricingMode": 1,           
          "realCharter": "真实租家",         
          "reportBaseUuid": "baseuuid",      
          "taxRate": 1,           
          "comisionRate1": 2.5,            
          "comisionRate2": 3,              
          "addComisionRate": 2.5,              
          "tcContractNo": "",        
          "timeBar": 0,               
          "tradeType": 1,            
          "uuid": "contractuuid",              
          "vesselDisplayName": "合众1",    
          "vesselImo": "9711884",           
          "voyageNo": "V1901"             
        }],
        "kpiBean": {
          "commisionRate": 2,          
          "ecommisionRate": 2.5,         
          "efuelConsumptionRate": 3,   
          "epadRate": 4,              
          "etce": 30000,                   
          "evoyageDays": 25,           
          "fuelConsumptionRate": 4,    
          "ladenRange": 10000,             
          "ladenRate": 3.1,            
          "missLaycan": 0,             
          "padRate": 3.5,             
          "reportBaseUuid": "baseuuid",        
          "sailingRate": 5,           
          "tce": 50000,                  
          "totalRange": 15000,            
          "uuid": "kpiuuid",                
          "voyageDays": 23,           
          "waitingRate": 6          
        },
        "operationPortBeanList": [{
          "ata": "2019-03-19 17:00:00",   
          "atb": "2019-03-20 00:50:36",   
          "atd": "2019-03-21 14:25:00",   
          "epda": 15000,
          "callingPurpose": 1,             
          "operationCargoBeanList": [{
            "cargoDisplayName": "SM", 
            "cargoEnquiryId": "CA201902160549122105",   
            "cargoId": "cg_0001",        
            "operationQty": 1000,      
            "qtty": 1000,               
            "reportOperationPortUuid": "operationportuuid",  
            "uuid": "operationcargouuid",
            "callingPurpose": 1,                    
          }],
          "pda": 10000,               
          "portAgentId": "",         
          "portAgentName": "",       
          "portDisplayName": "大连",      
          "portId": "PT00012",             
          "reportBaseUuid": "baseuuid",      
          "seq": 1,                  
          "uuid": "operationportuuid",                
          "waitingDays": 5,         
          "washingDays": 6,           
          "workingDays": 8,         
          "norTender":     "2019-03-20 11:00:00",               
          "commerceCargoOperation":      "2019-03-20 00:11:00",
          "completeCargoOperation":      "2019-03-20 23:50:00",
              "tugUse":"1-2"                 
        },{
          "ata": "2019-03-19 17:00:00",   
          "atb": "2019-03-20 00:50:36",   
          "atd": "2019-03-21 14:25:00",   
          "epda": 15000,
          "callingPurpose": 1,             
          "operationCargoBeanList": [{
            "cargoDisplayName": "SM", 
            "cargoEnquiryId": "CA201902160549122105",   
            "cargoId": "cg_0001",        
            "operationQty": 1000,      
            "qtty": 1000,               
            "reportOperationPortUuid": "operationportuuid",  
            "uuid": "operationcargouuid",
            "callingPurpose": 1,                    
          }],
          "pda": 10000,               
          "portAgentId": "",         
          "portAgentName": "",       
          "portDisplayName": "大连",      
          "portId": "PT00012",             
          "reportBaseUuid": "baseuuid",      
          "seq": 1,                  
          "uuid": "operationportuuid",                
          "waitingDays": 5,         
          "washingDays": 6,           
          "workingDays": 8,         
          "norTender":     "2019-03-20 11:00:00",               
          "commerceCargoOperation":      "2019-03-20 00:11:00",
          "completeCargoOperation":      "2019-03-20 23:50:00",
              "tugUse":"1-2"                 
        }]
      }

      //总收入块
      //this.totalIncome = this.detail_date.baseBean.totalIncome;
      this.freight = this.detail_date.baseBean.freight;
      this.edemurrage = this.detail_date.baseBean.edemurrage;
      //this.demurrage = this.detail_date.baseBean.demurrage;
      this.incomeOthers = this.detail_date.baseBean.incomeOthers;
      this.incomeOthersRemark = this.detail_date.baseBean.incomeOthersRemark;
      //this.tax = this.detail_date.baseBean.tax;

      //变动成本
      //this.commission = this.detail_date.baseBean.commission;
      this.addCommission = this.detail_date.baseBean.addCommission;
      //this.epda1 = this.detail_date.baseBean.epda;
      //this.pda1 = this.detail_date.baseBean.pda;
      //this.fuelConsumption = this.detail_date.baseBean.fuelConsumption;
      //this.tax = this.detail_date.baseBean.tax;

      //净收入
      //this.grossProfit = this.detail_date.baseBean.grossProfit;
      //this.tceWithoutDemurrage = this.detail_date.baseBean.tceWithoutDemurrage;
      //this.tceWithDemurrage = this.detail_date.baseBean.tceWithDemurrage;
      this.currency1.value = this.detail_date.baseBean.currency;
      this.exchangeRate = this.detail_date.baseBean.exchangeRate;

      //KPI
      this.totalRange = this.detail_date.kpiBean.totalRange;
      this.missLaycan = this.detail_date.kpiBean.missLaycan;
      this.ladenRange = this.detail_date.kpiBean.ladenRange;
      //this.waitingRate = this.detail_date.kpiBean.waitingRate;
      this.etce = this.detail_date.kpiBean.etce;
      this.evoyageDays = this.detail_date.kpiBean.evoyageDays;
      //this.sailingRate = this.detail_date.kpiBean.sailingRate;
      this.tce = this.detail_date.kpiBean.tce;
      this.voyageDays = this.detail_date.kpiBean.voyageDays;
      //this.ladenRate = this.detail_date.kpiBean.ladenRate;
      //this.epadRate = this.detail_date.kpiBean.epadRate;
      this.ecommisionRate = this.detail_date.kpiBean.ecommisionRate;
      this.efuelConsumptionRate = this.detail_date.kpiBean.efuelConsumptionRate;
      //this.padRate = this.detail_date.kpiBean.padRate;
      //this.commisionRate = this.detail_date.kpiBean.commisionRate;
      //this.fuelConsumptionRate = this.detail_date.kpiBean.fuelConsumptionRate;


      //总航行天
      this.startDate = this.detail_date.baseBean.startDate;
      this.endDate = this.detail_date.baseBean.endDate;
      this.offhire.value = this.detail_date.baseBean.offhireReason;



  },
  watch:{

    "detail_date.baseBean.currency":{
      handler(newValue, oldValue){
        this.initialRate = this.detail_date.baseBean.exchangeRate
        if(this.firstComeIn++ != 0){
          console.log("执行了。")
          //其他费用
          let incomeOthers = this.detail_date.baseBean.incomeOthers;
          //滞期费实收
          let demurrage = this.detail_date.baseBean.demurrage;
          //滞期费应收
          let edemurrage = this.detail_date.baseBean.edemurrage;
          //运费收入
          let freight = this.detail_date.baseBean.freight;
          //佣金
          let commission = this.detail_date.baseBean.commission;
          //回佣
          let addcommission = this.detail_date.baseBean.addcommission;
          //预估港使费
          let epda = this.detail_date.baseBean.epda;
          //实际港使费
          let pda = this.detail_date.baseBean.pda;
          //燃油费
          let fuelConsumption = this.detail_date.baseBean.fuelConsumption;
          //税金
          let tax = this.detail_date.baseBean.tax;
          //合同
          let contractBeanList = this.detail_date.contractBeanList;
          //油价
          let oilPriceBeanList = this.detail_date.bunkerBean.oilPriceBeanList;
          //挂靠
          let operationPortBeanList = this.detail_date.operationPortBeanList;

          let currency = this.detail_date.baseBean.currency;
          if(currency == 1){
            this.detail_date.baseBean.incomeOthers = incomeOthers * this.initialRate;
            this.detail_date.baseBean.demurrage = demurrage * this.initialRate;
            this.detail_date.baseBean.edemurrage = edemurrage * this.initialRate;
            this.detail_date.baseBean.freight = freight * this.initialRate;
            this.detail_date.baseBean.commission = commission * this.initialRate;
            this.detail_date.baseBean.addcommission = addcommission * this.initialRate;
            this.detail_date.baseBean.epda = epda * this.initialRate;
            this.detail_date.baseBean.pda = pda * this.initialRate;
            this.detail_date.baseBean.fuelConsumption = fuelConsumption * this.initialRate;
            this.detail_date.baseBean.tax = tax * this.initialRate;
            for(let i=0;i<contractBeanList.length;i++){
              contractBeanList[i].demurrage = contractBeanList[i].demurrage * this.initialRate;
              contractBeanList[i].edemurrage = contractBeanList[i].demurrage * this.initialRate;
              contractBeanList[i].freight = contractBeanList[i].freight * this.initialRate;
            }
            oilPriceBeanList[0].hsfoBarge = oilPriceBeanList[0].hsfoBarge * this.initialRate;
            oilPriceBeanList[0].hsfoPrice = oilPriceBeanList[0].hsfoPrice * this.initialRate;
            oilPriceBeanList[0].lsfoBarge = oilPriceBeanList[0].lsfoBarge * this.initialRate;
            oilPriceBeanList[0].lsfoPrice = oilPriceBeanList[0].lsfoPrice * this.initialRate;
            oilPriceBeanList[0].lsmgoBarge = oilPriceBeanList[0].lsmgoBarge * this.initialRate;
            oilPriceBeanList[0].lsmgoPrice = oilPriceBeanList[0].lsmgoPrice * this.initialRate;
            oilPriceBeanList[0].mdoBarge = oilPriceBeanList[0].mdoBarge * this.initialRate;
            oilPriceBeanList[0].mdoPrice = oilPriceBeanList[0].mdoPrice * this.initialRate;
            oilPriceBeanList[0].mgoBarge = oilPriceBeanList[0].mgoBarge * this.initialRate;
            oilPriceBeanList[0].mgoPrice = oilPriceBeanList[0].mgoPrice * this.initialRate;
            
            oilPriceBeanList[1].hsfoBarge = oilPriceBeanList[1].hsfoBarge * this.initialRate;
            oilPriceBeanList[1].hsfoPrice = oilPriceBeanList[1].hsfoPrice * this.initialRate;
            oilPriceBeanList[1].lsfoBarge = oilPriceBeanList[1].lsfoBarge * this.initialRate;
            oilPriceBeanList[1].lsfoPrice = oilPriceBeanList[1].lsfoPrice * this.initialRate;
            oilPriceBeanList[1].lsmgoBarge = oilPriceBeanList[1].lsmgoBarge * this.initialRate;
            oilPriceBeanList[1].lsmgoPrice = oilPriceBeanList[1].lsmgoPrice * this.initialRate;
            oilPriceBeanList[1].mdoBarge = oilPriceBeanList[1].mdoBarge * this.initialRate;
            oilPriceBeanList[1].mdoPrice = oilPriceBeanList[1].mdoPrice * this.initialRate;
            oilPriceBeanList[1].mgoBarge = oilPriceBeanList[1].mgoBarge * this.initialRate;
            oilPriceBeanList[1].mgoPrice = oilPriceBeanList[1].mgoPrice * this.initialRate;

            for(let i=0;i<operationPortBeanList.length;i++){
              operationPortBeanList[i].epda = operationPortBeanList[i].epda * this.initialRate;
              operationPortBeanList[i].pda = operationPortBeanList[i].pda * this.initialRate;
            }
          }else{
            this.detail_date.baseBean.incomeOthers = incomeOthers / this.initialRate;
            this.detail_date.baseBean.demurrage = demurrage / this.initialRate;
            this.detail_date.baseBean.edemurrage = edemurrage / this.initialRate;
            this.detail_date.baseBean.freight = freight / this.initialRate;
            this.detail_date.baseBean.commission = commission / this.initialRate;
            this.detail_date.baseBean.addcommission = addcommission / this.initialRate;
            this.detail_date.baseBean.epda = epda / this.initialRate;
            this.detail_date.baseBean.pda = pda / this.initialRate;
            this.detail_date.baseBean.fuelConsumption = fuelConsumption / this.initialRate;
            this.detail_date.baseBean.tax = tax / this.initialRate;
            console.log(incomeOthers,demurrage,edemurrage,freight);
            for(let i=0;i<contractBeanList.length;i++){
              contractBeanList[i].demurrage = contractBeanList[i].demurrage / this.initialRate;
              contractBeanList[i].edemurrage = contractBeanList[i].demurrage / this.initialRate;
              contractBeanList[i].freight = contractBeanList[i].freight / this.initialRate;
            }

            oilPriceBeanList[0].hsfoBarge = oilPriceBeanList[0].hsfoBarge / this.initialRate;
            oilPriceBeanList[0].hsfoPrice = oilPriceBeanList[0].hsfoPrice / this.initialRate;
            oilPriceBeanList[0].lsfoBarge = oilPriceBeanList[0].lsfoBarge / this.initialRate;
            oilPriceBeanList[0].lsfoPrice = oilPriceBeanList[0].lsfoPrice / this.initialRate;
            oilPriceBeanList[0].lsmgoBarge = oilPriceBeanList[0].lsmgoBarge / this.initialRate;
            oilPriceBeanList[0].lsmgoPrice = oilPriceBeanList[0].lsmgoPrice / this.initialRate;
            oilPriceBeanList[0].mdoBarge = oilPriceBeanList[0].mdoBarge / this.initialRate;
            oilPriceBeanList[0].mdoPrice = oilPriceBeanList[0].mdoPrice / this.initialRate;
            oilPriceBeanList[0].mgoBarge = oilPriceBeanList[0].mgoBarge / this.initialRate;
            oilPriceBeanList[0].mgoPrice = oilPriceBeanList[0].mgoPrice / this.initialRate;
            
            oilPriceBeanList[1].hsfoBarge = oilPriceBeanList[1].hsfoBarge / this.initialRate;
            oilPriceBeanList[1].hsfoPrice = oilPriceBeanList[1].hsfoPrice / this.initialRate;
            oilPriceBeanList[1].lsfoBarge = oilPriceBeanList[1].lsfoBarge / this.initialRate;
            oilPriceBeanList[1].lsfoPrice = oilPriceBeanList[1].lsfoPrice / this.initialRate;
            oilPriceBeanList[1].lsmgoBarge = oilPriceBeanList[1].lsmgoBarge / this.initialRate;
            oilPriceBeanList[1].lsmgoPrice = oilPriceBeanList[1].lsmgoPrice / this.initialRate;
            oilPriceBeanList[1].mdoBarge = oilPriceBeanList[1].mdoBarge / this.initialRate;
            oilPriceBeanList[1].mdoPrice = oilPriceBeanList[1].mdoPrice / this.initialRate;
            oilPriceBeanList[1].mgoBarge = oilPriceBeanList[1].mgoBarge / this.initialRate;
            oilPriceBeanList[1].mgoPrice = oilPriceBeanList[1].mgoPrice / this.initialRate;

            for(let i=0;i<operationPortBeanList.length;i++){
              operationPortBeanList[i].epda = operationPortBeanList[i].epda / this.initialRate;
              operationPortBeanList[i].pda = operationPortBeanList[i].pda / this.initialRate;
            }
          }
        }
        
      },
      deep:true
    },

    //监控合同部分变动
    "detail_date.contractBeanList":{
      handler(newValue, oldValue){
        let data = this.detail_date.contractBeanList;
        //运费收入总和
        let freight = 0;
        //滞期费实收
        let demurrage = 0;
        //滞期费应收
        let edemurrage = 0;
        //佣金
        let commission = 0;
        //回佣
        let addCommission = 0;
        //税金
        let taxRate = 0;
        
        
        //先循环合同数量
        for(let i=0;i<data.length;i++){
          demurrage += data[i].demurrage - 0;
          edemurrage += data[i].edemurrage - 0;
          commission += (data[i].comisionRate1 - 0) + (data[i].comisionRate2 - 0);
          addCommission += data[i].addComisionRate - 0;
          taxRate += data[i].taxRate - 0;
          //再循环货数量
          for(let n=0;n<data[i].contractCargoBeanList.length;n++){
            let pmt = data[i].freight - 0;
            if(data[i].contractCargoBeanList[n].pricingMode == "1"){
              //等于单吨
              let number = data[i].contractCargoBeanList[n].sbillQtys;
              //查看每个合同中的提单货量数
              let amount = 0;
              for(let m=0;m<number.length;m++){
                amount+=(number[m] - 0);
              }
              console.log(pmt,amount);
              freight += pmt * amount;
            }else{
              //等于包干
              freight += pmt;
            }
          }
        }

        this.detail_date.baseBean.freight = freight;
        this.detail_date.baseBean.demurrage = demurrage;
        this.detail_date.baseBean.edemurrage = edemurrage;
        this.detail_date.baseBean.commission = freight * (commission/100);
        this.detail_date.baseBean.addCommission = freight * (addCommission/100);
        this.detail_date.baseBean.tax = freight * (taxRate/100);
        //this.taxRate = freight * (taxRate/100);
      },
　　　　deep: true
    },

    //监控挂靠记录变动
    "detail_date.operationPortBeanList":{
      handler(newValue, oldValue){
        let data = this.detail_date.operationPortBeanList;
        //港使费（预估）
        let epda1 = 0;
        //港使费（实际）
        let pda1 = 0;
        //等泊时长
        let waitingDays = 0;
        //选循环挂靠记录
        for(let i=0;i<data.length;i++){
          epda1 += data[i].epda - 0;
          pda1 += data[i].pda - 0;
          waitingDays += this.GetDateDiff(data[i].ata,data[i].atb);
        }
        this.detail_date.baseBean.epda = epda1;
        this.detail_date.baseBean.pda = pda1;
        this.waitingDays = waitingDays;
      },
      deep:true
    },
  },
  computed:{
    //总收入结果 ---->运费收入+实际滞期费+其他收入
    totalIncome(){
      let freight = this.detail_date.baseBean.freight - 0;
      let demurrage = this.detail_date.baseBean.demurrage - 0;
      let incomeOthers = this.detail_date.baseBean.incomeOthers - 0;

      console.log(this.detail_date);
      let result = freight + demurrage + incomeOthers;
      this.detail_date.baseBean.totalIncome = result;
      return result;
    },

    //变动成本 ----->佣金+回佣+实际港使费+燃油费+税金
    variableCost(){
      let commission = this.detail_date.baseBean.commission - 0;
      let addCommission = this.detail_date.baseBean.addCommission - 0;
      let pda1 = this.detail_date.baseBean.pda - 0;
      let fuelConsumption = this.detail_date.baseBean.fuelConsumption - 0;
      let taxRate = this.detail_date.baseBean.tax - 0;
      return commission + addCommission + pda1 + fuelConsumption + taxRate;
    },

    //净收入 ---->总收入-变动成本
    grossProfit(){
      let totalIncome = this.totalIncome;
      let variableCost = this.variableCost;
      return totalIncome - variableCost;
    },


    //燃油费
    fuelConsumption(){
      console.log("a");
      //总油耗
      let fuelConsumptionHsfo = this.detail_date.bunkerBean.fuelConsumptionHsfo;
      let fuelConsumptionLsfo = this.detail_date.bunkerBean.fuelConsumptionLsfo;
      let fuelConsumptionMdo = this.detail_date.bunkerBean.fuelConsumptionMdo;
      let fuelConsumptionMgo = this.detail_date.bunkerBean.fuelConsumptionMgo;
      let fuelConsumptionLsmgo = this.detail_date.bunkerBean.fuelConsumptionLsmgo;
      let fuelConsump = [fuelConsumptionHsfo,fuelConsumptionLsfo,fuelConsumptionMdo,fuelConsumptionMgo,fuelConsumptionLsmgo]

      //开始存量
      let startRobHsfo = this.detail_date.bunkerBean.startRobHsfo;
      let startRobLsfo = this.detail_date.bunkerBean.startRobLsfo;
      let startRobMdo = this.detail_date.bunkerBean.startRobMdo;
      let startRobMgo = this.detail_date.bunkerBean.startRobMgo;
      let startRobLsmgo = this.detail_date.bunkerBean.startRobLsmgo;
      let startRob = [startRobHsfo,startRobLsfo,startRobMdo,startRobMgo,startRobLsmgo]

      //上次油价
      let hsfoPrice_last = this.detail_date.bunkerBean.oilPriceBeanList[0].hsfoPrice;
      let lsfoPrice_last = this.detail_date.bunkerBean.oilPriceBeanList[0].lsfoPrice;
      let mdoPrice_last = this.detail_date.bunkerBean.oilPriceBeanList[0].mdoPrice;
      let mgoPrice_last = this.detail_date.bunkerBean.oilPriceBeanList[0].mgoPrice;
      let lsmgoPrice_last = this.detail_date.bunkerBean.oilPriceBeanList[0].lsmgoPrice;
      let last = [hsfoPrice_last,lsfoPrice_last,mdoPrice_last,mgoPrice_last,lsmgoPrice_last]

      //本次油价
      let hsfoPrice = this.detail_date.bunkerBean.oilPriceBeanList[1].hsfoPrice;
      let lsfoPrice = this.detail_date.bunkerBean.oilPriceBeanList[1].lsfoPrice;
      let mdoPrice = this.detail_date.bunkerBean.oilPriceBeanList[1].mdoPrice;
      let mgoPrice = this.detail_date.bunkerBean.oilPriceBeanList[1].mgoPrice;
      let lsmgoPrice = this.detail_date.bunkerBean.oilPriceBeanList[1].lsmgoPrice;
      let price = [hsfoPrice,lsfoPrice,mdoPrice,mgoPrice,lsmgoPrice]

      let result = 0;

      for(let i=0;i<fuelConsump.length;i++){
        let thisResult;
        if(fuelConsump[i] > startRob[i]){
          thisResult = ((fuelConsump[i] - startRob[i]) * price[i]) + (startRob[i] * last[i]);
          result += thisResult
        }else{
          thisResult = fuelConsump[i] * last[i];
          result += thisResult
        }
        switch(i){
          case 0:{
            this.hsfoConsumption = thisResult;
            break;
          }
          case 1:{
            this.lsfoConsumption = thisResult;
            break;
          }
          case 2:{
            this.mdoConsumption = thisResult;
            break;
          }
          case 3:{
            this.mgoConsumption = thisResult;
            break;
          }
          case 4:{
            this.lsmgoConsumption = thisResult;
            break;
          }
        }
      }
      this.detail_date.baseBean.fuelConsumption = result;
      return result;

    },

    //总航行天---->航行开始时间-航行结束时间 
    totalVoyageDays(){
      let start = new Date(this.startDate);
      let end = new Date(this.endDate);
      let startText = start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate();
      let entText = end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate();
      let result = this.datedifference(startText,entText);
      this.peratingDays = result;

      return result;
    },

    //运营天结果 ---->总航行天数-非营运天数
    peratingDay(){
      let totalVoyageDays = this.totalVoyageDays - 0;
      let offhireDays = this.detail_date.baseBean.offhireDays - 0;
      return totalVoyageDays - offhireDays;
    },

    //含滞期费TCE ---->(总收入-变动成本)/营运天
    tceWithDemurrage(){
      let totalIncome = this.totalIncome;
      let variableCost = this.variableCost;
      let peratingDay = this.peratingDay;
      let result = (totalIncome - variableCost)/peratingDay;
      this.detail_date.baseBean.tceWithDemurrage = result;
      return result;
    },

    //不含滞期费TCE ---->（运费收入+其他收入-变动成本）/营运天    （净收入-实际滞期费）/实际运营天数
    tceWithoutDemurrage(){
      let grossProfit = this.grossProfit;
      let demurrage = this.detail_date.baseBean.demurrage;
      let peratingDay = this.peratingDay;

      // let freight = this.freight;
      // let incomeOthers = this.incomeOthers;
      // let variableCost = this.variableCost;
      // let peratingDay = this.peratingDay;
      //return (freight + incomeOthers - variableCost)/peratingDay;
      let result = (grossProfit - demurrage)/peratingDay;
      this.detail_date.baseBean.tceWithoutDemurrage = result;
      return result;
    },

    //航次航行率 ---->实际运营天数/总航行天数
    sailingRate(){
      let totalVoyageDays = this.totalVoyageDays;
      let peratingDay = this.peratingDay;
      return peratingDay/totalVoyageDays;
    },

    //等泊率 ---->等泊天数/总航行天数 转小时
    waitingRate(){
      let startDate = this.detail_date.baseBean.startDate;
      let endDate = this.detail_date.baseBean.endDate;
      let waitingDays = this.detail_date.baseBean.waitingDays;

      let hovers = this.GetDateDiff(startDate,endDate);
      return waitingDays/hovers*100;
    },

    //重载航行率 ---->重载航行天数/总航行天数
    ladenRate(){
      let ladenDays = this.detail_date.baseBean.ladenDays;
      let totalVoyageDays = this.totalVoyageDays;
      return ladenDays/totalVoyageDays;
    },

    //预估港使费占比 ---->预估港式费/变动成本
    epadRate(){
      let epda1 = this.detail_date.baseBean.epda;
      let variableCost = this.variableCost;
      console.log(epda1,variableCost)
      return epda1/variableCost;
    },

    //实际港使费占比 ---->实际港使费/变动成本
    padRate(){
      let pda1 = this.detail_date.baseBean.pda;
      let variableCost = this.variableCost;
      return pda1/variableCost;
    },

    //实际油耗占比 ---->总油耗/变动成本
    fuelConsumptionRate(){
      let fuelConsumption = this.detail_date.baseBean.fuelConsumption;
      let variableCost = this.variableCost;
      return fuelConsumption/variableCost;
    },

    //实际佣金占比 ----> 佣金/变动成本
    commisionRate(){
      let commission = this.detail_date.baseBean.commission;
      let variableCost = this.variableCost;
      return commission/variableCost;
    },

    
  },
  methods:{
    //两个日期相差多少天2006-12-18格式
    datedifference(sDate1, sDate2) {
        var dateSpan,
            tempDate,
            iDays;
        sDate1 = Date.parse(sDate1);
        sDate2 = Date.parse(sDate2);
        dateSpan = sDate2 - sDate1;
        dateSpan = Math.abs(dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
        return iDays
    },

    //两个日期相差小时数
    GetDateDiff(startTime, endTime) {
      console.log(startTime,endTime)
      let sTime =new Date(startTime); //开始时间
      let eTime =new Date(endTime); //结束时间
      //作为除数的数字
      var timeType =1000*3600;
      return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
    },

    //挂靠记录中增加货品
    addCargo(options,index){
      console.log(options,index)
      options.operationCargoBeanList.push({
        "cargoDisplayName": "", 
        "cargoEnquiryId": "",   
        "cargoId": "",        
        "operationQty": "",      
        "qtty": "",               
        "reportOperationPortUuid": "",  
        "uuid": ""
      })
    },

    //挂靠记录中的删除货品
    removeCargo(options,index){
      if(index != 0){
        options.operationCargoBeanList.splice(index,1);
      }
    },

    //增加港口
    addPort(type,data,index){
      console.log(type,data,index)
      if(type == "z"){
        data.contractPortBeanList.push({
          "callingPurpose": 1, 
          "portDisplayName": "",
          "portId": "",         
          "reportContractCargoUuid": "",  
          "reportContractUuid": "",                  
          "uuid": ""            
        })
      }else{
        data.contractPortBeanList.push({
          "callingPurpose": 2, 
          "portDisplayName": "",
          "portId": "",         
          "reportContractCargoUuid": "",  
          "reportContractUuid": "",                  
          "uuid": ""            
        })
      }
    },

    //删除港口
    removePort(type,data,index){
      if(type == 'z'){
        data.contractPortBeanList.splice(index,1);
      }else{
        data.contractPortBeanList.splice(index,1);
      }
    },

    //增加提单量
    addQtty(data,index){
      data.sbillQtys.push(0)
    },
    //移除提单量
    removeQtty(data,index){
      data.sbillQtys.splice(index,1);
    },

    //增加挂靠
    addDetail(data){
      console.log(data);
      data.push({
      "ata": "",   
      "atb": "",   
      "atd": "",   
      "callingPurpose": 1,
      "epda": 0,             
      "operationCargoBeanList": [{
        "cargoDisplayName": "", 
        "cargoEnquiryId": "",   
        "cargoId": "",        
        "operationQty": 0,      
        "qtty": 0,               
        "reportOperationPortUuid": "",  
        "uuid": ""                  
      }],
      "pda": 0,               
      "portAgentId": "",         
      "portAgentName": "",       
      "portDisplayName": "",      
      "portId": "",             
      "reportBaseUuid": "",      
      "seq": 1,                  
      "uuid": "",                
      "waitingDays": 0,         
      "washingDays": 0,           
      "workingDays": 0 ,       
      "norTender": "",               
      "commerceCargoOperation":      "",
      "completeCargoOperation":      "",
          "tugUse":""                 
      })
    },

    //删除挂靠
    removeDetail(data,index){
      if(index != 0){
        data.splice(index,1);
      }
    },

  }
}
</script>
<style>
.contract_box .el-input__inner{
  height: 40px;
  border: 0px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.detail_content{
  height: 100%;
}
.detail_left{
  width: 75%;
  height: 100%;
  float: left;
  overflow: auto;
  .income_box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    ol{
      width: 33.3%;
      float: left;
      border-right: 1px #e4e4e4 dashed;
      box-sizing: border-box;
      .voyage_detail_title{
        background-color: #ecf0f7;
        color: #333;
        font-weight: bold;
        margin: 1px;
        span{
          width: 35%;
          height: 32px;
          line-height: 32px;
          text-align: left;
        }
        input{
          width: 60%;
          height: 32px;
          line-height: 32px;
          margin-right: 2%;
        }
      }
      li{
        margin-top: 10px;
        overflow: hidden;
        span{
          width: 35%;
          height: 30px;
          line-height: 30px;
          text-align: right;
          float: left;
        }
        input{
          width: 60%;
          height: 30px;
          float: right;
          line-height: 30px;
          padding-right: 10px;
          display: inline-block;
          float: right;
          text-align: right;
          box-sizing: border-box;
          margin-right: 2%;
          border: 1px solid #e1e1e1;
        }
        textarea{
          width: 60%;
          height: 70px;
          float: right;
          padding-right: 10px;
          display: inline-block;
          float: right;
          text-align: right;
          box-sizing: border-box;
          margin-right: 2%;
          border: 1px solid #e1e1e1;
        }
      }
    }
  }

  .contract_box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    ol{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border: 1px #e9e9e9 solid;
      border-radius: 4px;
      li{
        width: 25%;
        float: left;
        overflow: hidden;
        border-bottom: 1px #e8e8e8 solid;
        span{
          width: 45%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: #eaedf1;
          color: #333;
          float: left;
        }
        input{
          width: 55%;
          height: 40px;
          line-height: 40px;
          display: inline-block;
          float: right;
          text-align: center;
          box-sizing: border-box;
        }
      }
      .two_width{
        width: 50%;
        span{
          width: 23%;
        }
        input{
          width: 77%;
        }
      }
    }
    
  }

  .oil_box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    ol{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border: 1px #e9e9e9 solid;
      border-radius: 4px;
      li{
        width: 33.3%;
        float: left;
        overflow: hidden;
        border-bottom: 1px #e8e8e8 solid;
        span{
          width: 70%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: #eaedf1;
          color: #333;
          float: left;
        }
        input{
          width: 30%;
          height: 40px;
          line-height: 40px;
          display: inline-block;
          float: right;
          text-align: center;
          box-sizing: border-box;
        }
      }
      .two_width{
        width: 50%;
        span{
          width: 23%;
        }
        input{
          width: 77%;
        }
      }
    }
    
  }

  .kpi_box{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .kpi_first{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border: 1px #e9e9e9 solid;
      border-radius: 4px;
      li{
        width: 50%;
        float: left;
        overflow: hidden;
        border-bottom: 1px #e8e8e8 solid;
        span{
          width: 70%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          background-color: #eaedf1;
        }
        input{
          width: 30%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          box-sizing: border-box;
        }
      }
    }
    .kpi_last{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border: 1px #e9e9e9 solid;
      border-radius: 4px;
      li{
        width: 33.3%;
        float: left;
        overflow: hidden;
        border-bottom: 1px #e8e8e8 solid;
        span{
          width: 60%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          background-color: #eaedf1;
        }
        input{
          width: 40%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          box-sizing: border-box;
        }
      }
    }
  }

  .remark{
    ol{
      li{
        span{
          width: 5%;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
        input{
          width: 95%;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
}
.voyage_detail_title{
  background-color: #ecf0f7;
  color: #333;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  padding-left: 5px;
  margin: 0;
  margin-top: 12px;
  span{
    width: 100%;
    text-align: left;
  }
}
.detail_right{
  width: 24%;
  padding-left: 1%;
  height: 100%;
  float: right;
  overflow: auto;
  .voyage_detail_title{
    background-color: #ecf0f7;
    color: #333;
    font-weight: bold;
    height: 32px;
    line-height: 32px;
    padding-left: 5px;
    margin: 0;
    input{
      float: right;
      width: 60%;
      height: 32px;
      text-align: right;
      line-height: 32px;
      margin-right: 2%;
    }
    i{
      float: right;
    }
  }
  .sailingday_box{
    ol{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border-radius: 4px;
      li{
        width: 100%;
        float: left;
        margin-bottom: 10px;
        overflow: hidden;
        span{
          width: 35%;
          margin-right: 5%;
          height: 30px;
          line-height: 30px;
          text-align: right;
          float: left;
        }
        input{
          width: 55%;
          padding-left: 5%;
          height: 30px;
          line-height: 30px;
          text-align: left;
          float: left;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }
      }
    }
  }

  .affiliated_box{
    ol{
      margin-top: 12px;
      overflow: hidden;
      margin: 10px 10px 0 10px;
      border-radius: 4px;
      li{
        width: 100%;
        float: left;
        margin-bottom: 10px;
        overflow: hidden;
        span{
          width: 35%;
          margin-right: 5%;
          height: 30px;
          line-height: 30px;
          text-align: right;
          float: left;
        }
        input{
          width: 55%;
          padding-left: 5%;
          height: 30px;
          line-height: 30px;
          text-align: left;
          float: left;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
        }
      }
      .delete{
        text-align: right;
      }
    }
  }
}
.disables{
  border:0px !important;
  background: initial;
}

.operation{
  width: 50%;
  height: 40px;
  text-align: center;
  background-color: #f1f1f1;
  float: left;
  line-height: 40px;
  cursor: pointer;
}

.port_array{
  width: 100%;
  overflow: hidden;
  .port_array_child{
    width: 33.3%;
    float: left;
    overflow: hidden;
    li{
      width: 100% !important;
      span{
        width: 40% !important;
      }
      input{
        width: 40% !important;
        float: left !important;
      }
      div{
        width: 20%;
        float: left;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
    }
    
  }
}

.cargo_box{
  width: 100%;
  overflow: hidden;
  border: 1px #f1f1f1 solid;
  box-sizing: border-box;
  padding-top: 10px;
}

.add_detail{
  width: auto;
  float: right;
  padding: 0 10px;
  cursor: pointer;
}
.delete{
  cursor: pointer;
}

</style>
