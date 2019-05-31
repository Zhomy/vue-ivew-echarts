<template>
  <div>
    <div class="companyData" id="company"></div>
  </div>
</template>
<script>
export default {
  name: "mainSix",
  mounted() {
    this.echarts();
    this.ajaxGet();
  },
  components: {},
  data() {
    return {
       
    };
  },
  methods: { 
    ajaxGet() {
      let companyChart = this.$echarts.init(document.getElementById("company"));
      let self = this;
      self.$axios
        .get('https://xcx.chinartas.com/shopbbc-app-api/sellerApply/countByType.nut?state=2', {
   
        })
        .then(function(response) {
            //console.log("CompanyInfo",response)
           console.log("哈哈哈", response.data.data.seriesData);
             companyChart.setOption({
            //  legend: {
            //       data: response.data.data.xData
            //   }
            //   ,
            //   series: [{
            //       // 根据名字对应到相应的系列
            //       //name: '销量',
            //       data: response.data.data.yData
             
            //   }],
              xAxis: {
                  data: response.data.data.xData
              },
              series: response.data.data.seriesData
            });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    echarts() {
      
      let companyChart = this.$echarts.init(document.getElementById("company"));
      // 企业数量
      companyChart.setOption({
        title: {
          text: "企业类型总数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: []
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
         
        ]
      });
      window.addEventListener("resize", () => { companyChart.resize();});
    },
  }  
};
</script>
<style scoped>
.companyData {
  padding: 25px 25px;
  box-sizing: border-box;
  float: left;
  width: 69%;
  height: 325px;
  background-color: #ffffff;
  margin-left: 1%;
}
</style>


