<template>
  <div>
    <div class="companyTotal">
      <div class="companyImage">
        <img src="../../../../static/image/company.png" width="65px" height="69px">
      </div>
      <div class="companyTitle">入驻企业总数</div>
      <div class="companyNumber">{{count1}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainSix",
  mounted() {
    this.ajaxGet();
  },
  components: {
    
  },
  data() {
    return {
      count1: 0,
    };
  },
  methods: {
    ajaxGet() {
      let self = this;
      // 企业统计信息
      self.$axios
        .get(self.$url.sellerApply, {
          params: {
            state:2
          }
        })
        .then(function(response) {
          console.log("企业统计信息", response);
          self.count1 = response.data.data.count;
          console.log("企业统计信息", self.count);
        })
        .catch(function(error) {
          console.log("失败", error);
      });
    }
  }
};
</script>
<style scoped>
.companyTotal {
  box-sizing: border-box;
  padding: 50px 60px;
  width: 30%;
  height: 325px;
  background-color: #ffffff;
  float: left;
}
.companyNumber {
  width: 100%;
  height: 49px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 49px;
  letter-spacing: 0px;
  color: #3398db;
  text-align: center;
  margin-top: 40px;
}
.companyImage {
  justify-content: center;
  text-align: center;
}
.companyTitle {
  width: 100%;
  height: 30px;
  font-family: MicrosoftYaHei;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 49px;
  letter-spacing: 0px;
  text-align: center;
  color: #666666;
  margin-top: 30px;
}
</style>


