<template>
  <div class="mainSecond" id="number"></div>
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
      let numberChart = this.$echarts.init(document.getElementById("number"));
      console.log(88888888);
      let self = this;
      self.$axios
        .get(self.$url.AllShow, {
          params: {}
        })
        .then(function(response) {
          console.log("成功AllShow", response);

          numberChart.setOption({
            dataset: {
              source: response.data.data.data
            }
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    echarts: function() {
      let numberChart = this.$echarts.init(document.getElementById("number"));
      // 订单数量
      numberChart.setOption({
        legend: {},
        tooltip: {},
        grid: {
          left: "1%",
          right: "1%",
          // bottom: '-1%',

          containLabel: true
        },
        dataset: {
          source: [
            // ["product", "订单数量", "销售商品", "退货数量"],
            // ["一月", 43.3, 85.8, 93.7],
            // ["二月", 83.1, 73.4, 55.1],
            // ["三月", 86.4, 65.2, 82.5],
            // ["四月", 72.4, 53.9, 39.1],
            // ["五月", 86.4, 65.2, 82.5],
            // ["六月", 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      });
      window.addEventListener("resize", () => {
        numberChart.resize();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 第二部分 */
.mainSecond {
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  padding-top: 30px;
  background-color: #ffffff;
  margin-top: 10px;
}
</style>
