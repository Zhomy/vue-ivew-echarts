const productioh = 'https://xcx.chinartas.com/shopbbc-app-api/' //生产
// const productioh = 'http://192.168.11.110:8082/' //内网
export default {
  // SaleType
  SaleType: productioh + 'order/countByProductCate.nut',
  // orderNumber
  orderNumber: productioh + 'order/todayOrderCount.nut',
  // MoneyPrecent
  MoneyPrecent: productioh + 'order/todayPayCount.nut',
  // AllShow
  AllShow: productioh + 'order/countByType.nut',
  //汽车系列总数
  carSerise: productioh + 'truckInfo/countseries.nut',
  // 商品大类别总数
  pbigTotal: productioh + 'productInfo/countbase.nut',
  // 商品小类别总数
  psmallTotal: productioh + 'productInfo/countAll.nut',
  // 企业统计信息
  sellerApply: productioh + 'sellerApply/count.nut?', 
  // TranceStatisticst
  TranceStatisticst: productioh + 'sourceCode/countBackFillByMonth.nut',
  //TranceStatisticso
  TranceStatisticso: productioh + 'sourceCode/countCheckedByMonth.nut',
  //TranceStatistics
  TranceStatistics: productioh + 'sourceCode/lastSixMonthOutCount.nut',
  // 溯源码下发数量总数
  symTotal: productioh + 'sourceCode/outCount.nut',
  // 溯源码总验证数
  symText: productioh + 'sourceCode/countAllCheck.nut',
  // 入驻申请列表
  compControl: productioh + 'sellerApply/page.nut',
  // 溯源码搜索接口
  // searchId: productioh + 'sourceCode/get/',
  // 溯源码查询基本信息
  basciInfo: productioh + 'sourceCode/get/',
  // 溯源码查询流通信息
  titleInfo: productioh + 'sourceCode/circulateList.nut',
  //溯源码采购计划
  buyInfo: productioh + 'sourcePurchase/page.nut',
  //配件品牌信息
  brandInfo: productioh + 'productInfo/brandpage.nut',
  //汽车品牌信息
  listByFirstName: productioh + 'truckInfo/listByFirstName.nut',
  //配件分类目录信息（一级）
  firstTip: productioh + 'productInfo/cateList.nut',
  //配件分类目录信息（二三级）
  nextTip: productioh + 'productInfo/catelistByPid.nut',
  
}
