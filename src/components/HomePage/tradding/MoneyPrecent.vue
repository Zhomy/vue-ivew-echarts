<template>
  <div class="orderOne" id="order"></div>
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
      let orderChart = this.$echarts.init(document.getElementById("order"));
      console.log(88888888);
      let self = this;
      self.$axios
        .get(self.$url.MoneyPrecent, {
          params: {}
        })
        .then(function(response) {
          //  console.log("成功1111", response);
          //  console.log("成功11112222", response.data.data.xData);

          orderChart.setOption({
            legend: {
              data: response.data.data.xData
            },
            series: [
              {
                // 根据名字对应到相应的系列
                //name: '销量',
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
      let orderChart = this.$echarts.init(document.getElementById("order"));
      orderChart.setOption({
        title: {
          text: "订单金额比重",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: []
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      window.addEventListener("resize", () => {
        orderChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.orderOne {
  box-sizing: border-box;
  padding: 30px 20px 10px 20px;
  float: left;
  width: 32.33%;
  height: 300px;
  background-color: #ffffff;
}
</style>


