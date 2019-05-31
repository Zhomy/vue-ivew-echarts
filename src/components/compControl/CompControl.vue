<template>
  <div class="tableBox">
    <Tabs :animated="false">
      <div class="serch">
        <div class="search">
          <div class="searchContain">
            <input
              type="text"
              placeholder="地域"
              style="width:100%;height:100%;border:1px solid #e2e2e2;padding-left:10px;"
            >
            <div class="sButton">搜索</div>
          </div>
        </div>
      </div>
      <TabPane label="入驻申请列表">
        <Table stripe :columns="columns1" :data="data1"></Table>
      </TabPane>
      <TabPane label="平台企业信息">
        <Table stripe :columns="columns2" :data="data1"></Table>
      </TabPane>
    </Tabs>
    <Page
      :total="pageCount"
      :page-size="pageSize"
      size="small"
      @on-change="pageOnChange"
      show-elevator
      show-sizer
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "公司名称",
          key: "name"
        },
        {
          title: "统一信用代码",
          key: "code"
        },
        {
          title: "类型",
          key: "type"
        },
        {
          title: "申请状态",
          key: "status"
        }
      ],
      columns2: [
        {
          title: "公司名称",
          key: "name"
        },
        {
          title: "统一信用代码",
          key: "code"
        },
        {
          title: "类型",
          key: "type"
        }
      ],
      data1: [],
      //页数，默认1页
      pageIndex: 1,
      curPage:0,//当前页面
      //初始化信息总条数
      pageCount:30,
      //每页显示多少
      pageSize: 10,
      totalNum: 0,//数据总条数，后台返回
    };
  },
  mounted() {
    this.ajaxGet();
  },
  components: {

  

  },
  methods: {
    ajaxGet(index) {
      let self = this;
      self.$axios
        .get(self.$url.compControl, {
          params: {
            index: index || self.pageIndex,
            total: 10
          }
        })
        .then(function(res) {
          console.log("table", res.data);
          console.log("哈哈",res.data.data.list);
          self.pageCount = res.data.pageCount || 45;
          res.data.data.list.map((arr, index) => {
            let dataArr = {};
            dataArr.name = arr.company || "无";
            dataArr.code = arr.bankCode || "无";
            dataArr.type = arr.type || "无";
            dataArr.status = arr.state || "无";
            self.data1.push(dataArr);
            if(arr.type===1){
               dataArr.type = "平台自营"
            }
            if(arr.type===2){
               dataArr.type = "商家入驻"
            }
            if(arr.type===3){
               dataArr.type = "经销商"
            }
            if(arr.type===4){
               dataArr.type = "分仓"
            }
            if(arr.type===5){
               dataArr.type = "厂商"
            }

            if(arr.state===1){
               dataArr.status = "提交申请"
            }
            if(arr.state===2){
               dataArr.status = "审核通过"
            }
            if(arr.state===3){
               dataArr.status = "缴纳保证金"
            }
            if(arr.state===4){
               dataArr.status = "审核失败"
            }
            

          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
        
    },
    //分页触发
    pageOnChange(data) {
      let self = this;
      self.ajaxGet(data);
    },
  }
};
</script>
<style scoped>
.serch {
  width: 100%;
  height: 60px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
.search {
  width: 205px;
  height: 100%;
  padding: 15px 0;
  margin-left: 50px;
}
.searchContain {
  height: 30px;
}
.sButton {
  text-align: center;
  width: 66px;
  height: 28px;
  line-height: 28px;
  background-color: #52cefc;
  border-radius: 5px;
  display: inline-block;
  margin-top: -29px;
  margin-left: 227px;
  color: #fff;
  position: absolute;
}
</style>


