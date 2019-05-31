<template>
  <!-- <div class="trace-statistics"> -->
  <div>
    <div class="symData" id="sym"></div>
  </div>
</template>
<script>
export default {
  name: "mainSecond",
  mounted() {
    this.echarts();
    this.ajaxGet();
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    ajaxGet() {
      let symChart = this.$echarts.init(document.getElementById("sym"));
      let self = this;
      self.$axios
        .get(self.$url.TranceStatistics, {})
        .then(function(response) {
          //console.log("CompanyInfo",response)
          console.log("好haha", response.data);
          symChart.setOption({
            xAxis: {
              data: response.data.data.xData
            },
            series: [
              {
                data: response.data.data.yData
              }
            ]
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    echarts: function() {
      let symChart = this.$echarts.init(document.getElementById("sym"));
      // 溯源码
      symChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
      window.addEventListener("resize", () => {
        symChart.resize();
      });
    }
  }
};
</script>
<style scoped>
/* .trace-statistics {
  width: 800px;
  height: 600px;
  background: red;
} */
.symData {
  padding: 10px 10px;
  box-sizing: border-box;
  width: 69%;
  height: 362px;
  background-color: #ffffff;
  float: left;
}
</style>


