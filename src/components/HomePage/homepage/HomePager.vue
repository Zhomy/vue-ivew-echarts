<template>
  <div>
    <div class="mainTop">配件商品交易统计</div>
    <div class="mainOne">
      <SaleType></SaleType>
      <OrderNumber></OrderNumber>
      <MoneyPrecent></MoneyPrecent>
    </div>
    <AllShow style="margin-top:310px;"></AllShow>

    <div class="mainThree">商品配件统计</div>
    <div class="mainFour">
      <SeriseTotal></SeriseTotal>
    </div>

    <div class="mainFive">企业统计信息</div>
    <div class="mainSix" style="position:relative;">
      <div class="status" id="status">
        <a class="statusOne" @click="companyinfo" v-bind:class="{active:CompanyInfo}">企业类型总数</a>
        <a class="statusTwo" @click="companyinfone" v-bind:class="{active:CompanyInfone}">区域入驻数据</a>
      </div>
      <CompanyNum></CompanyNum>
      <CompanyInfo v-if="CompanyInfo"></CompanyInfo>
      <CompanyInfone v-if="CompanyInfone"></CompanyInfone>
      <router-view name="one"></router-view>
    </div>

    <div class="mainSeven">溯源码统计信息</div>

    <div class="mainEight">
      <div class="statuso">
        <a @click="statusoOne" class="statusoOne" v-bind:class="{active:statusoOneShow}">下发数量</a>
        <a @click="statusoTwo" class="statusoTwo" v-bind:class="{active:statusoTwoShow}">赋码数量</a>
        <a @click="statusothree" class="statusothree" v-bind:class="{active:statusoThreeShow}">验证数量</a>
      </div>
      <TraceStatistics v-if="statusoOneShow"></TraceStatistics>
      <TraceStatisticst v-if="statusoTwoShow"></TraceStatisticst>
      <TraceStatisticso v-if="statusoThreeShow"></TraceStatisticso>
      <router-view name="second"></router-view>
      <!-- <TraceStatistics style="position:relative;"></TraceStatistics> -->
      <div class="symRight">
        <TraceTotal post-title="hello!" likes="qusi" @ceShi="ceShiBa"></TraceTotal>
      </div>
    </div>
  </div>
</template>
<script>
import SaleType from "../tradding/SaleType";
import OrderNumber from "../tradding/OrderNumber";
import MoneyPrecent from "../tradding/MoneyPrecent";
import AllShow from "../tradding/AllShow";
import SeriseTotal from "../total/SeriseTotal";
import CompanyNum from "../companyInfo/CompanyNum";
import CompanyInfo from "../companyInfo/CompanyInfo";
import CompanyInfone from "../companyInfo/CompanyInfone";
import TraceStatistics from "../statistics/TraceStatistics";
import TraceStatisticso from "../statistics/TraceStatisticso";
import TraceStatisticst from "../statistics/TraceStatisticst";
import TraceTotal from "../statistics/TraceTotal";

export default {
  
  data() {
    return {
      statusoOneShow: true,
      statusoTwoShow: false,
      statusoThreeShow: false,
      CompanyInfo:true,
      CompanyInfone:false
    };
  },
  created() {
    //进入就调用登录接口
    console.log(1111);
  },
  components: {
    SaleType,
    OrderNumber,
    MoneyPrecent,
    AllShow,
    SeriseTotal,
    CompanyNum,
    CompanyInfo,
    CompanyInfone,
    TraceStatistics,
    TraceStatisticso,
    TraceStatisticst,
    TraceTotal
  },
  methods: {
    
    ceShiBa(data) {
      
      console.log("222姊川福来的", data);
    },
    statusoOne() {
      this.statusoOneShow = true;
      this.statusoTwoShow = false;
      this.statusoThreeShow = false;
    },
    statusoTwo() {
      this.statusoOneShow = false;
      this.statusoTwoShow = true;
      this.statusoThreeShow = false;
    },
    statusothree() {
      this.statusoOneShow = false;
      this.statusoTwoShow = false;
      this.statusoThreeShow = true;
    },
    companyinfo(){
      this.CompanyInfo = true;
      this.CompanyInfone = false;
    },
    companyinfone(){
      this.CompanyInfone = true;
      this.CompanyInfo = false;
    }
  }
};
</script>
<style scoped>
.mainThree,
.mainFive,
.mainSeven,
.mainTop {
  width: 100%;
  height: 70px;
  font-family: MicrosoftYaHei;
  font-size: 30px;
  line-height: 70px;
  text-align: left;
}
/* 第四部分总数系列 */
.mainFour {
  width: 100%;
  height: 217px;
}
/* 第六部分入驻企业 */
.mainSix {
  width: 100%;
  height: 325px;
}
.status {
  z-index: 10;
  position: absolute;
  right: 32px;
  top: 25px;
  width: 170px;
  height: 25px;
  display: flex;
}
.statusOne {
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  flex: 1;
  /* background-color: gray; */
  border: solid 1px #ebeff3;
  background-blend-mode: normal normal;
}
.statusTwo {
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  flex: 1;
  background-color: #fff;
  border: solid 1px #ebeff3;
  background-blend-mode: normal normal;
}
/* 第八部分溯源码 */

.mainEight {
  position: relative;
  width: 100%;
  height: 362px;
  margin-bottom: 50px;
}
.statuso {
  z-index: 100;
  position: absolute;
  left: 240px;
  top: 22px;
  width: 210px;
  height: 25px;

  display: flex;
}
.statusoOne {
  border: solid 1px #ebeff3;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  flex: 1;
  /* background-color: #e2e0e0;; */
  background-blend-mode: normal normal;
}
.statusoTwo {
  border: solid 1px #ebeff3;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  flex: 1;
  background-color: #fff;
  background-blend-mode: normal normal;
}
.statusothree {
  border: solid 1px #ebeff3;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  flex: 1;
  background-color: #fff;
  background-blend-mode: normal normal;
}
.symRight {
  float: left;
  width: 30%;
  margin-left: 1%;
}
</style>



