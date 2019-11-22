import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./views/Login";
import addTaskCard from "./views/addTaskCard";
import homePage from "./views/homePage";


Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: 'Login',
    component: Login,
    meta: {notRequireAuth: true}
},
    {
        path:"/addTaskCard",
        name:"addTaskCard",
        component:addTaskCard,
        meta:{notRequireAuth:true}
    },
    {
        path:"/",
        name:"home",
        component:homePage,
        meta:{notRequireAuth:true}
    }]
const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;