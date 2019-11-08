import Vue from 'vue'
import Router from 'vue-router'
import Resume from "../views/resume/Resume";

//注入插件
Vue.use(Router);
//定义路由
const routes = [
    {
        path:'/',
        component:Resume,
    }
];
//创建router实例
const router =new Router({
   routes
});
//导出router
export default router

