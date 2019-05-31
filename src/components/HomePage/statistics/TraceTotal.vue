<template>
  <div>
    <div class="symNumber">
      <div class="titleSym">溯源码下发数量总数</div>
      <div class="numberSym" style="color: #d9707f;">{{count1}}</div>
      <Progress :percent="60" stroke-color="#d9707f" style="height:25px;padding-right:0px!important;margin-top:20px;"/>
    </div>
    <div class="symTotal">
      <div class="titleSym" @click="sonParent">溯源码总验证数</div>
      <div class="numberSym" style="color: #7670d9;">{{count2}}</div>
      <Progress :percent="60" stroke-color="#7670d9" style="height:25px;padding-right:0px!important;margin-top:20px;"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainSecond",
  mounted() {
    // console.log("测试props", this.postTitle, "---", this.likes);
    // console.log("测试a", this.a);
    this.ajaxGet();
  },
  props: ["postTitle", "likes"],
  components: {},
  data() {
    return {
      a: 123,
      count1: 0, // 溯源码下发数量总数
      count2: 0,// 溯源码总验证数
      sourceCode:''
    };
  },
  methods: {
    ajaxGet() {  
      let self = this;
      // 溯源码下发数量总数
      self.$axios
        .get(self.$url.symTotal, {
          params: {
            sourceCode:self.sourceCode
          }
        })
        .then(function(response) {
          console.log("溯源码下发数量总数", response);
          self.count1 = response.data.data.count;
      
        })
        .catch(function(error) {
          console.log("失败", error);
        });
      
      // 溯源码总验证数
      self.$axios
        .get(self.$url.symText, {
          params: {
            sourceCode:190412010000005135
          }
        })
        .then(function(response) {
          console.log("溯源码总验证数", response);
           self.count2 = response.data.data.count;
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    sonParent() {
      console.log("测试姊川福");
      this.$emit("ceShi", "666");
    }
  }
};
</script>
<style scoped>
.symNumber,
.symTotal {
  box-sizing: border-box;
  padding: 25px 70px;
  width: 100%;
  height: 172px;
  background-color: #ffffff;
}
.symTotal {
  margin-top: 18px;
}
.titleSym {
  width: 100%;
  height: 25px;
  font-family: MicrosoftYaHei;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
}
.numberSym {
  margin-top: 20px;
  width: 100%;
  height: 33px;
  line-height: 33px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
}
.processSym {
  margin-top: 20px;
  width: 100%;
  height: 23px;
  background-color: #f7f7f7;
}
</style>
