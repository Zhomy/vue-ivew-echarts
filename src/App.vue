<template>
  <div id="app">
    <div class="base">
      <img src="../static/image/logo.png" style="margin-top:13px;margin-left:40px;">
    </div>
    <div class="main">
      <div class="mainLeft">
        <!-- <router-link to="/homepage" class="systemNaver">系统首页</router-link> -->
        <a @click="homepage" class="systemNaver" v-bind:class="{active:show==1}">系统首页</a>
        <a @click="company" class="compControl" v-bind:class="{active:show==2}">企业档案管理</a>
        <a @click="code" class="codeManagement" v-bind:class="{active:show==3}">配件溯源码管理</a>
        <a @click="basic" class="basicManagement" v-bind:class="{active:show==4}">基本信息管理</a>
        <a @click="total" class="totalManagement" v-bind:class="{active:show==5}">综合信息管理</a>
      </div>
      <div class="mainRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 1
    };
  },
  created() {
   //进入就调用登录接口
  },
  components: {},
  methods: {
    
    ajaxPost() {
      let self = this;
      self.$axios
        .post(self.url.loginUrl, {
          firstName: "Fred",
          lastName: "Flintstone"
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    homepage() {
      this.$router.push({ name: "homepage" });
      this.show = 1;
    },
    company() {
      console.log("2222222");
      this.$router.push({ name: "CompControl" });
      this.show = 2;
    },
    code() {
      this.$router.push({ name: "CodeSearch" });
      this.show = 3;
    },
    basic() {
      this.$router.push({ name: "BasicManage" });
      this.show = 4;
    },
    total() {
      this.$router.push({ name: "TotalManage" });
      this.show = 5;
    }
  }
};
</script>

<style scoped>
.tableBox {
  width: 100%;
  height: 100%;
  padding: 40px;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: calc(100% + 80px);
  background: #eaeff3;
}
.base {
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 5px 30px 0px rgba(51, 51, 51, 0.1);
}
.main {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  overflow: hidden;
}
.mainLeft {
  width: 218px;
  height: 100%;
  background-color: #ffffff;
  opacity: 0.9;
}
.systemNaver,
.compControl,
.codeManagement,
.basicManagement,
.infoManagement,
.totalManagement {
  display: inline-block;
  text-indent: 45px;
  font-size: 16px;
  line-height: 70px;
  width: 218px;
  height: 70px;
}
.mainRight {
  width: calc(100% - 218px);
  height: 100%;
  overflow: auto;
  padding-left: 30px;
  box-sizing: border-box;
  min-width: 1170px;
}

</style>
