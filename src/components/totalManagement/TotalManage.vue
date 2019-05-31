<template>
  <div class="tableBox">
    <Tabs :animated="false">
      <TabPane label="企业信用等级信息"></TabPane>
    </Tabs>
    <Tabs :animated="false">
      <TabPane label="经销商" class="bgcColor">
        <div class="serch">
            <span class="companyName">企业名称：</span>
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
        <Table stripe :columns="columns1" :data="data1"></Table>
      </TabPane>
      <TabPane label="厂商">
        <div class="serch">
            <span class="companyName">企业名称：</span>
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
        <Table stripe :columns="columns1" :data="data1"></Table>
      </TabPane>
      <TabPane label="维修室">
        <div class="serch">
            <span class="companyName">企业名称：</span>
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
        <Table stripe :columns="columns1" :data="data1"></Table>
      </TabPane>
    </Tabs>
    <Page :total="40" size="small" show-elevator show-sizer/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "名称",
          key: "name"
        },
        {
          title: "信用等级",
          key: "age"
        },
        {
          title: "是否投诉",
          key: "address"
        },
        {
          title: "投诉次数",
          key: "address"
        },
        {
          title: "好评率",
          key: "address"
        }
      ],
      columns2: [
        {
          title: "公司名称",
          key: "name"
        },
        {
          title: "统一信用代码",
          key: "age"
        },
        {
          title: "类型",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  }
};
</script>
<style scoped>
.serch {
  width: 100%;
  height: 60px;
  background-color: #fff;
  margin-top: -16px;
}
.search {
  width: 205px;
  height: 100%;
  padding: 15px 0;
  margin-left: 110px;
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
.companyName{
  padding-left:30px;
  width: 100px;
  height: 20px;
  position: absolute;
  margin-top: 20px;
}
.ivu-tabs-tab-active{
  
}
.bgcColor{
  
}
</style>


