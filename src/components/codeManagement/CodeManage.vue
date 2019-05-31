<template>
  <div class="tableBox">
    <Tabs :animated="false">
      <TabPane label="溯源码查询">
        <div class="serch">
          <div class="basciInfo">
            <div class="titleInfo">
              <img src="../../../static/image/line.png" alt>
              <span>基本信息</span>
            </div>
            <div class="mainInfo">
              <ul class="mainUl">
                <li>
                  生产厂家：
                  <span>永联汽车生产商</span>
                </li>
                <li>
                  产品类别：
                  <span>X43365655</span>
                </li>
                <li>
                  品牌：
                  <span>明基</span>
                </li>
                <li>
                  批次：
                  <span>2019-01-12</span>
                </li>
                <li>
                  执行标准：
                  <span>国462522准</span>
                </li>
                <li>
                  产品名称：
                  <span>发动机</span>
                </li>
                <li>
                  产品型号：
                  <span>Gt-5366565</span>
                </li>
                <li>
                  尺寸规格：
                  <span>7900AW8562</span>
                </li>
                <li>
                  生产日期：
                  <span>2019-02-14</span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tableInfo">
          <div class="titleInfo">
            <img src="../../../static/image/line.png" alt>
            <span>流通信息</span>
          </div>
        </div>
        <Table stripe :columns="columns1" :data="data1"></Table>
        <Page :total="40" size="small" show-elevator show-sizer/>
        <div class="cardBox">
          <div class="orderInfo">
            <div class="titleInfo">
              <img src="../../../static/image/line.png" alt>
              <span>订单信息</span>
            </div>
            <div class="cardContain">
              <ul class="cardUl">
                <li>
                  订单编号：
                  <span>1233566589</span>
                </li>
                <li>
                  创建时间：
                  <span>2019-01-25 19:52:68</span>
                </li>
                <li>
                  付款时间：
                  <span>2019-01-25 20:10:54</span>
                </li>
                <li>
                  发货时间：
                  <span>2019-01-26 09:01:00</span>
                </li>
                <li>
                  商家：
                  <span>平台自营</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="criclrInfo">
            <div class="titleInfo">
              <img src="../../../static/image/line.png" alt>
              <span>物流信息</span>
            </div>
            <div class="cardContain">
              <ul class="cardUl">
                <li>
                  快递公司：
                  <span>中通快递</span>
                </li>
                <li>
                  快递单号：
                  <span>9813145486123232</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="maintanceInfo">
            <div class="titleInfo">
              <img src="../../../static/image/line.png" alt>
              <span>维修信息</span>
            </div>
            <div class="cardContain">
              <ul class="cardUl">
                <li>
                  维修店名称：
                  <span>永联维修店</span>
                </li>
                <li>
                  维修店地址：
                  <span>湖北省武汉市光谷大道123号</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="溯源码采购计划">
        <div class="select">
            <ul>
            <li class="dateCircle">
                <span class="titleCricle">时间范围：</span>
                <span class="datePick">
                <Row>
               <Col span="10">
                <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
              </Col>
                </Row>
              </span>
            </li>
            <li class="bigSmall">
                <span class="titleCricle">大小码：</span>       
                <span class="">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </span>
            </li>
            <li class="exectCircle">
                <span class="titleCricle">审核范围：</span>
                <span class="">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </span>
            </li>
            <li class="searchCricle">
                <span>搜索</span>
                </li>
           </ul> 
        </div>
        <Table stripe :columns="columns2" :data="data2"></Table>
        <Page :total="40" size="small" show-elevator show-sizer/>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>

export default {
  data() {
    return {
      columns1: [
        {
          title: "类型",
          key: "type"
        },
        {
          title: "仓库地址",
          key: "address"
        },
        {
          title: "仓库名称",
          key: "name"
        },
        {
          title: "操作人",
          key: "controler"
        }
      ],
      columns2: [
        {
          title: "采购时间",
          key: "time"
        },
        {
          title: "采购方",
          key: "person"
        },
        {
          title: "采购数量",
          key: "number"
        },
        {
          title: "配件类型",
          key: "type"
        },
        {
          title: "大小码",
          key: "code"
        },
        {
          title: "是否已入库",
          key: "identify"
        },
        {
          title: "审核状态",
          key: "status"
        }
      ],
       data1: [
        
        
      ],
      data2: [
       
      ],
      cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
    };
  },
  mounted() {
    this.ajaxGet();
  },
  methods: {
    ajaxGet(index) {
      let self = this;
      console.log("----code",self.$route.query.sourceCode);
      let code = self.$route.query.sourceCode
      // 溯源码查询流通信息
      self.$axios
        .get(self.$url.titleInfo, {
          params: {
            index: index || self.pageIndex,
            total: 10,
            sourceCode:code
          }
        })
        .then(function(res) {
          console.log("code", res);
          console.log("codehaha",res.data.data.list);
          self.pageCount = res.data.pageCount || 45;
          // self.sourceCode = res.data.sourceCode
          res.data.data.list.map((arr, index) => {
            let dataArr = {};
            dataArr.type = arr.uploadType || "无";
            dataArr.address = arr.uploadAddress || "无";
            dataArr.name = arr.userName || "无";
            dataArr.controler = arr.state || "无";         
            self.data1.push(dataArr);       
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
       // 溯源码查询基本信息
       self.$axios
        .get(self.$url.basciInfo+'self.sourceCode'+'.nut', {
          params: {
            sourceCode:code
          }
        })
        .then(function(response) {
          console.log("溯源码查询基本信息", response);
          self.name = response.data.data.data.name;
          console.log("溯源码查询基本信息", self.name);
          // console.log("汽车系列总数1111", self.count);
        })
        .catch(function(error) {
          console.log("失败", error);
        });
        //溯源码采购计划
        self.$axios
        .get(self.$url.buyInfo, {
          params: {
            index: index || self.pageIndex,
            total: 10,
            sourceCode:code
          }
        })
        .then(function(res) {
          console.log("溯源码采购计划", res);
          console.log("codehaha",res.data.data.list);
          self.pageCount = res.data.pageCount || 45;
          res.data.data.list.map((arr, index) => {
            let dataArr = {};
            dataArr.type = arr.uploadType || "无";
            dataArr.address = arr.uploadAddress || "无";
            dataArr.name = arr.userName || "无";
            dataArr.controler = arr.state || "无";
            self.data1.push(dataArr);
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
  height: 149px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
.tableInfo {
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 10px 20px;
}
.basciInfo {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  /* margin-left: 50px; */
}
.titleInfo span {
  font-size: 14px;
  color: #52cefc;
}
.mainInfo {
  margin-top: 15px;
}
.mainUl {
  font-size: 14px;
  width: 100%;
  height: 80px;
  margin-left: 13px;
}
.mainUl li {
  /* display:inline-block; */
  width: 230px;
  height: 30px;
  float: left;
  margin-right: 20px;
}
/* 卡片信息 */
.cardBox {
  width: 100%;
  margin-top: 30px;
  height: 293px;
}
.orderInfo,
.criclrInfo,
.maintanceInfo {
  width: 32.66%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  float: left;
}
.orderInfo,
.criclrInfo {
  margin-right: 1%;
}
.cardContain {
  padding: 20px;
}
.cardUl {
  width: 100%;
  height: 100%;
}
.cardUl li {
  width: 100%;
  height: 43px;
  font-size: 14px;
  float: left;
}

/* 第二部分 */
.select{
    width: 100%;
    height: 120px;
    background-color: #fff;
    padding: 40px;
}
.select ul{
    width: 100%;
    height: 100%;
}
.dateCircle{
    width: 30%;
    height: 40px;
    line-height: 40px;
    float: left;
}
.titleCricle{
    font-size:14px;
    margin-top: 10px;
    display: inline-block;
    width: 72px;
    height: 40px;
}
.searchCricle{  
    float: left;
    width: 10%;
}
.searchCricle span{
    display: inline-block;
    width: 66px;
    height: 28px;
    background-color: #52cefc;
    border-radius: 5px;
    color:#fff;
    line-height: 28px;
    text-align: center;
    margin-top: 18px;
}
.bigSmall{
    width: 30%;
    height: 40px;
    line-height: 40px;
    float: left;
}
.exectCircle{
    width: 30%;
    height: 40px;
    line-height: 40px;
    float: left;
}
.datePick{
    position: absolute;
    margin-top: 10px;
    
}
</style>


