import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";


const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: '/detail/:id',
        component: Detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router