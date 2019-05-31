import Vue from 'vue'
import Router from 'vue-router'

import CompanyInfo from '@/components/HomePage/companyInfo/CompanyInfo.vue'
import CompanyInfone from '@/components/HomePage/companyInfo/CompanyInfone.vue'


import HomePager from '@/components/HomePage/homepage/HomePager.vue'
//企业档案管理
import CompControl from '@/components/compControl/CompControl'
//配件溯源码管理
import CodeSearch from '@/components/codeManagement/CodeSearch'
import CodeManage from '@/components/codeManagement/CodeManage'
// 基础管理
import BasicManage from '@/components/basicManagement/BasicManage'
// 综合信息管理
import TotalManage from '@/components/totalManagement/TotalManage'


Vue.use(Router)
export default new Router({
  routes: [
    /** 
     * path:路径
     * name:名称
     * conponent:组件
     */
    //首页
    {
      path: '/',
      redirect: '/homepage' //重定向
    },
    { //首页
      path: '/homepage',
      name: 'homepage',
      component: HomePager
    },
    { //企业档案管理
      path: '/CompControl',
      name: 'CompControl',
      component: CompControl
    },
    { //配件溯源码管理
      path: '/CodeSearch',
      name: 'CodeSearch',
      component: CodeSearch,
    },
    {
      path: '/CodeManage/:sourceCode',
      name: 'CodeManage',
      component: CodeManage,
    },
    
    { // 基本信息管理
      path: '/BasicManage',
      name: 'BasicManage',
      component: BasicManage,
    },
    { // 综合信息管理
      path: '/TotalManage',
      name: 'TotalManage',
      component:TotalManage,
    },
    
    {
      path: '/companyinfo',
      name: 'CompanyInfo',
      component: CompanyInfo
    },
    {
      path: '/companyinfone',
      name: 'companyinfone',
      component: CompanyInfone
    },
   
  ]
  // 企业档案管理
  // 配件溯源码管理
  // 基础管理
  // 综合信息管理
})
