<template>
  <div>
    <div class="seriseTotal">
      <div class="titleTol">车系类别总数</div>
      <div class="numberTol" style="color: #4c9ecd;">{{count1}}</div>
      <Progress :percent="60" stroke-color="#4c9ecd" style="height:25px;padding-right:0px!important;margin-top:20px;"/>
    </div>
    <div class="bigTotal">
      <div class="titleTol">配件商品大类别总数</div>
      <div class="numberTol" style="color: #d970d0;">{{count2}}</div>
      <Progress :percent="60" stroke-color="#d970d0" style="height:25px;padding-right:0px!important;margin-top:20px;"/>
    </div>
    <div class="smallTotal">
      <div class="titleTol">配件商品小类别总数</div>
      <div class="numberTol" style="color: #5ac4b6;">{{count3}}</div>    
      <Progress :percent="60" stroke-color="#5ac4b6" style="height:25px;padding-right:0px!important;margin-top:20px;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainSecond",
  mounted() {
    this.ajaxGet();
  },
  components: {},
  data() {
    return {
      msg: "",
      count1: 0, // 汽车系列总数
      count2: 0,//商品大类别总数
      count3: 0 //商品小类别总数
    };
  },
  computed: {},
  methods: {
    ajaxGet() {
      let saleChart = this.$echarts.init(document.getElementById("sale"));
      let self = this;
      // 汽车系列总数
      self.$axios
        .get(self.$url.carSerise, {
          params: {}
        })
        .then(function(response) {
          console.log("汽车系列总数", response);
          self.count1 = response.data.data.count;
          console.log("汽车系列总数1111", self.count);
        })
        .catch(function(error) {
          console.log("失败", error);
        });

      // 商品大类别总数
      self.$axios
        .get(self.$url.pbigTotal, {
          params: {}
        })
        .then(function(response) {
          console.log("商品大类别总数", response);
           self.count2 = response.data.data.count;
        })
        .catch(function(error) {
          console.log("失败", error);
        });
      // 商品小类别总数
      self.$axios
        .get(self.$url.psmallTotal, {
          params: {}
        })
        .then(function(response) {
          console.log("商品小类别总数", response);
          self.count3 = response.data.data.count;
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    }
  }
};
</script>
<style scoped>
.seriseTotal,
.bigTotal,
.smallTotal {
  box-sizing: border-box;
  padding: 20px 53px;
  float: left;
  width: 32.33%;
  height: 217px;
  background-color: #ffffff;
}
.seriseTotal,
.bigTotal {
  margin-right: 1%;
}
.titleTol {
  width: 100%;
  height: 25px;
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
}
.numberTol {
  margin-top: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 54px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
}
.processTol {
  margin-top: 30px;
  width: 100%;
  /* height: 28px;
  background-color: #f7f7f7; */
}
</style>


