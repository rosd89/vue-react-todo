import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Todo from "../components/todo/TodoContent.vue";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/todo",
            name: "Todo",
            component: Todo
        }
    ]
});