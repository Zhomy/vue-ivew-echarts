<template>
  <div class="tableBox">
    <Tabs :animated="false">
      <!-- <div class="serch">
                <div class="search">
                    <div class="searchContain">
                       <input type="text" placeholder="地域" style="width:100%;height:100%;border:1px solid #e2e2e2;padding-left:10px;"> 
                       <div class="sButton">
                           搜索
                       </div>
                    </div>
                </div>
      </div>-->
      <TabPane label="汽车品牌信息">
        <div class="carinfoBox">
          <div class="carAlb" style="border: none!important;">
            <div class="albSearch" style="border:solid 1px #e2e2e2;">
              <span class="albFound">按品牌拼音首字母查找：</span>
              <ul>
                <li v-for="(temp, index) in nameList" :key="index">
                  <a href="javascript:void(0)" @click="jump('#anchor-'+temp.key)">{{temp.key}}</a>
                </li>
              </ul>
            </div>
            <!-- 字母列表 -->
            <div class="listRow">
              <div :id="'anchor-'+car.carKey" v-for="(car, index) in cars" :key="index">
                <div class="carHead">{{car.carKey}}</div>

                <div
                  class="carBody"
                  v-for="(b, index) in car.brandNames"
                  :key="index"
                >{{b.brandName}}</div>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="配件品牌信息">
        <div class="carinfoBox">
          <div class="carAlb">
            <div class="albSearch">
              <span class="albFound">按品牌拼音首字母查找：</span>
              <ul>
                <li
                  v-for="(temp, index) in nameList"
                  :key="index"
                  @mouseover="getpinyinDatas(temp)"
                >
                  <a href="javascript:void(0)" @click="jump('#anchor-'+temp.key)">{{temp.key}}</a>
                </li>
              </ul>
            </div>

            <div class="carImg">
              <ul class="imgUl">
                <li v-for="temp in images">
                  <img :src="imgUrl + temp.logoImage">
                </li>
              </ul>
            </div>
          </div>

          <div class="bigList">
            <div class="listRow">
              <div :id="'anchor-'+car.carKey" v-for="(car, index) in cars" :key="index">
                <div class="carHead">{{car.carKey}}</div>
                <div class="detailShow" v-for="(b, index) in car.brandNames" :key="index">
                  <div class="showImg">
                    <div class="leftShow">
                      <img :src="imgUrl + b.logoImage" class="logoImg">
                      <div class="pName">{{b.brandName}}</div>
                    </div>
                    <div class="rightShow">
                      <ul>
                        <li v-for="(s, index) in b.seriesList" :key="index">
                          <a>{{s.seriesName}}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div class="carAlbbox"></div>
        </div>
      </TabPane>

      <TabPane label="配件分类目录信息">
        <div class="accseClass">
          <div class="accseOne">
            <div class="firstRank">
              <span>一级</span>
            </div>
            <div class="secondRank">
              <ul>
                <li v-for="temp in categloryList" @click="firstHand(temp.id);">
                  <a href="#">{{temp.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="accseTwo">
            <div class="firstRank">
              <span>二级</span>
            </div>
            <div class="secondRank">
              <ul>
                <li v-for="temp in nextList" @click="SecondtHand(temp.id)">
                  <a href="#">{{temp.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="accseThree">
            <div class="firstRank">
              <span>三级</span>
            </div>
            <div class="secondRank">
              <ul>
                <li v-for="temp in threeList">
                  <a href="#">{{temp.name}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
    <!-- <Page :total="40" size="small" show-elevator show-sizer /> -->
  </div>
</template>
<script>
export default {
  //var root
  data() {
    return {
      mapList: [],
      nameList: [],
      brandList: [],
      imgList: [],
      categloryList: [],
      nextList: [],
      threeList: [],
      imgUrl: "http://hsystatic.right-soft.net",
      brandDatas: [],
      images: [],
      cars: []
    };
  },
  mounted() {
    this.ajaxGet();
  },
  methods: {
    jump(key) {
      document.querySelector(key).scrollIntoView(true);
    },

    getpinyinDatas(tmp) {
      this.images = [];
      for (let img in this.brandDatas) {
        let key = this.brandDatas[img].key;
        if (tmp.key === key) {
          this.images.push(this.brandDatas[img]);
        }
      }
    },
    ajaxGet(index) {
      const self = this;
      // 汽车品牌信息
      self.$axios
        .get(self.$url.listByFirstName, {
          params: {}
        })
        .then(function(res) {
          console.log("汽车品牌信息", res.data);
          console.log("map", res.data.data);
          let map = res.data.data;
          console.log("map:", map);
          var newmap = {};
          newmap.map = map;
          self.mapList.push(newmap);
          for (var key in map) {
            // console.log("属性：" + key + ",值：" + map[key]);
            // console.log("属性：" ,key);
            var name = {};
            name.key = key;
            self.nameList.push(name);
            let car = {};
            car.carKey = key;
            let brandNames = [];
            map[key].map((arr, index) => {
              // var brandName = arr.brandName
              var brandArr = {};
              var imgArr = {};
              let brand = {};
              brand.key = key;
              brand.brandName = arr.brandName;
              brand.logoImage = arr.logoImage;
              self.brandDatas.push(brand);
              brandArr.brandName = arr.brandName;
              brandArr.key = key;
              imgArr.logoImage = arr.logoImage;
              imgArr.key = key;
              self.brandList.push(brandArr);
              self.imgList.push(imgArr);
              if (key === "A") {
                self.images.push(brand);
              }
              brandNames.push(brand);
              brand.seriesList = arr.seriesList;
            });
            car.brandNames = brandNames;
            self.cars.push(car);
          }
          console.log("brand:", self.brandDatas);
        })
        .catch(function(error) {
          console.log("失败", error);
        });
      //配件品牌信息
      self.$axios
        .get(self.$url.brandInfo, {
          params: {}
        })
        .then(function(response) {
          console.log("配件品牌信息", response);
          self.name = response.data.data.name;
          imgArr.logoImage = arr.logoImage;
          // console.log("汽车系列总数1111", self.count);
        })
        .catch(function(error) {
          console.log("失败", error);
        });

      //配件分类目录信息（一级）
      self.$axios
        .get(self.$url.firstTip, {
          params: {}
        })
        .then(function(response) {
          console.log("配件分类目录信息（一级）", response.data.data);
          //   rootId=response.data.data[0].id;
          //   console.log("rootId）", rootId);
          response.data.data.map((arr, index) => {
            //rootId=arr
            var categlory = {};
            categlory.name = arr.name;
            categlory.id = arr.id;
            self.categloryList.push(categlory);
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });

      //配件分类目录信息（二级）
      self.$axios
        .get(self.$url.nextTip, {
          params: {
            pid: 1
          }
        })
        .then(function(response) {
          console.log("配件分类目录信息（二级）", response.data.data);
          var rootId = response.data.data[0].id;
          console.log("rootId）", rootId);
          response.data.data.map((arr, index) => {
            var nextcate = {};
            nextcate.name = arr.name;
            nextcate.id = arr.id;
            self.nextList.push(nextcate);
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
      //配件分类目录信息（二级）
      self.$axios
        .get(self.$url.nextTip, {
          params: {
            pid: 2
          }
        })
        .then(function(response) {
          console.log("配件分类目录信息（三级）", response.data.data);
          response.data.data.map((arr, index) => {
            var nextcate = {};
            nextcate.name = arr.name;
            self.threeList.push(nextcate);
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
    // 一级数据请求
    firstHand(data) {
      let self = this;
      console.log("请求data", data);
      self.$axios
        .get(self.$url.nextTip, {
          params: {
            pid: data
          }
        })
        .then(function(response) {
          console.log("配件分类目录信息（二级）", response.data.data);
          var rootId = response.data.data[0].id;
          console.log("rootId）", rootId);
          self.nextList.splice(0, self.nextList.length);
          response.data.data.map((arr, index) => {
            var nextcate = {};
            nextcate.name = arr.name;
            nextcate.id = arr.id;
            self.nextList.push(nextcate);
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },

    // 二级数据请求
    SecondtHand(data) {
      let self = this;
      self.$axios
        .get(self.$url.nextTip, {
          params: {
            pid: data
          }
        })
        .then(function(response) {
          console.log("配件分类目录信息（三级）", response.data.data);
          self.threeList.splice(0, self.threeList.length);
          response.data.data.map((arr, index) => {
            var nextcate = {};  
            nextcate.name = arr.name;
            self.threeList.push(nextcate);
          });
        })
        .catch(function(error) {
          console.log("失败", error);
        });
    },
    //点击tab切换
    tabList() {}
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

.carinfoBox {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
.albSearch {
  width: 100%;
  height: 36px;
  background-color: #f6f6f6;
  border-bottom: solid 1px #e2e2e2;
}
.albSearch ul {
  position: absolute;
  margin-left: 155px;
  margin-top: -26px;
  width: 100%;
  height: 36px;
}
.albSearch ul li {
  text-align: center;
  /* line-height: 16px; */
  margin-right: 10px;
  float: left;
  font-size: 16px;
}
.albSearch ul li a {
  display: block;
  color: #000;
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.albSearch ul li a:hover {
  background-color: #52cefc;
  color: #fff !important;
}
.albFound {
  font-size: 12px;
  width: 150px;
  height: 36px;
  line-height: 36px;
  margin-left: 20px;
}

.carAlb {
  border: solid 1px #e2e2e2;
}
.carImg {
  width: 100%;
  height: 90px;
  padding: 20px;
  overflow-x: auto;
}
.carImg ul {
  width: 100%;
}
.carImg ul li {
  float: left;
  margin-right: 20px;
  width: 120px;
  height: 50px;
  background-color: #f3f6f9;
  padding: 10px 30px;
  margin-bottom: 20px;
}
.carImg ul li img {
  width: 60px;
  height: 30px;
}
.carAlbbox {
  width: 100px;
  height: 100px;
}
/* 字母列表 */
.bigList {
  margin-top: 10px;
}
.listRow {
  width: 100%;
}
.carHead {
  text-indent: 20px;
  font-size: 18px;
  line-height: 32px;
  width: 100%;
  height: 32px;
  background-color: #f6fafa;
  border-top: solid 1px #e2e2e2;
}
.carBody {
  text-indent: 20px;
  font-size: 14px;
  width: 100%;
  height: 32px;
  line-height: 32px;
  border-bottom: solid 1px #e2e2e2;
}
/* 配件分类目录信息 */
.accseClass {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
.accseOne,
.accseTwo,
.accseThree {
  width: 100%;
  height: 100%;
  display: flex;
}
.accseTwo,
.accseThree {
  margin-top: 10px;
}
.firstRank {
  flex: 1;
}
.firstRank span {
  display: inline-block;
  width: 60px;
  height: 26px;
  color: #fff;
  line-height: 26px;
  text-align: center;
  background-color: #48adf5;
}
.secondRank {
  flex: 9;
}
.secondRank ul {
  width: 100%;
  height: 100%;
}
.secondRank ul li {
  float: left;
  width: 128px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
}
.secondRank ul li a {
  width: 71px;
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
.secondRank ul li a:hover {
  color: #48adf5 !important;
}
/* 配件品牌信息 */
.carDetail {
  width: 100%;
  margin-top: 10px;
}
.detailRow {
  width: 100%;
}
.detailRow dl dt {
  text-indent: 20px;
  font-size: 18px;
  line-height: 32px;
  width: 100%;
  height: 32px;
  background-color: #f6fafa;
  border-top: solid 1px #e2e2e2;
}
.detailRow dl dd {
  text-indent: 20px;
  font-size: 14px;
  width: 100%;
  height: 32px;
  line-height: 32px;
  /* border-top: solid 1px #e2e2e2; */
}
.detailShow {
  width: 100%;
}
.showImg {
  width: 100%;
  background-color: #fff;
  border-top: dashed 1px #e2e2e2;
  border-bottom: dashed 1px #e2e2e2;
  display: flex;
}
.leftShow {
  flex: 1;
  padding: 20px 40px;
  background-color: #fff;
  border-right: solid 1px #e2e2e2;
  box-sizing: border-box;
}
.leftShow img {
  justify-content: center;
  text-align: center;
  /* width: 120px;
    height: 50px; */
}
.rightShow {
  flex: 8;
}
.rightShow ul {
  width: 100%;
  height: 100%;
  margin-left: 20px;
}
.rightShow ul li {
  float: left;
  width: 128px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
}
.rightShow ul li a {
  width: 71px;
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
.rightShow ul li a:hover {
  color: #48adf5 !important;
}
.logoImg {
  width: 100px;
  height: 45px;
}
.pName {
  width: 100px;
  height: 25px;
  text-align: center;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  margin-top: 10px;
}
</style>


