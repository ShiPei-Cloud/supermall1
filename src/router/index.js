import Vue from 'vue'
import Router from 'vue-router'

// 动态的添加路由组件
const EnterpriseData = () =>
    import ("@/components/EnterpriseData");
const Data = () =>
    import ("@/views/Data");

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/EnterpriseData'
        },
        {
            path: '/EnterpriseData',
            name: 'EnterpriseData',
            component: EnterpriseData
        },
        {
            path: '/data',
            name: 'Data',
            component: Data
        }
    ]
})