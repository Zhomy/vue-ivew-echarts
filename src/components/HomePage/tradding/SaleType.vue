<template>
  <div class="saleProduct" id="sale"></div>
</template>
<script>
export default {
  name: "mainOne",
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
      let saleChart = this.$echarts.init(document.getElementById("sale"));
      console.log();
      let self = this;
      self.$axios
        .get(self.$url.SaleType, {
          params: {}
        })
        .then(function(response) {
          //  console.log("成功11112222", response.data.data.xData);

          saleChart.setOption({
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
      let saleChart = this.$echarts.init(document.getElementById("sale"));
      window.addEventListener("resize", () => {
        saleChart.resize();
      });
      saleChart.setOption({
        title: {
          text: "销售商品类型",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: []
        },
        series: [
          {
            name: "销售商品类型",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: []
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.saleProduct {
  box-sizing: border-box;
  padding: 30px 20px 10px 20px;
  float: left;
  width: 32.33%;
  height: 300px;
  background-color: #ffffff;
}
.saleProduct {
  margin-right: 1%;
}
</style>


