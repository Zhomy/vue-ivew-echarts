<template>
  <div class="todayOrder" id="today"></div>
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
      let todayChart = this.$echarts.init(document.getElementById("today"));
      console.log(88888888);
      let self = this;
      self.$axios
        .get(self.$url.orderNumber, {
          params: {}
        })
        .then(function(response) {
          //  console.log("成功1111", response);
          //  console.log("成功11112222", response.data.data.xData);
          console.log("成功orderNumber", response);
          todayChart.setOption({
            //  legend: {
            //       data: response.data.data.xData
            //   }
            //   ,
            series: [
              {
                // 根据名字对应到相应的系列
                //name: '销量',
                data: response.data.data.data,
                max: response.data.data.max
              }
            ]
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    echarts: function() {
      let todayChart = this.$echarts.init(document.getElementById("today"));
      // 当天
      todayChart.setOption({
        title: {
          text: "当天订单数",
          x: "center"
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: []
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            fontSize: 12,
            detail: {},
            data: [{}],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 12
              }
            }
          }
        ]
      });
      window.addEventListener("resize", () => {
        todayChart.resize();
      });
    }
  }
};
</script>
<style scoped>
.todayOrder {
  box-sizing: border-box;
  padding: 30px 20px 10px 20px;
  float: left;
  width: 32.33%;
  height: 300px;
  background-color: #ffffff;
}

.todayOrder {
  margin-right: 1%;
}
</style>


