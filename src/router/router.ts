import { createMemoryHistory, createRouter } from 'vue-router';
const routes = [
    { path: '/', component: import("@/views/Projects/Projects.vue"),
        // children:[

        // ]
    }, { path: '/author' ,component: import("@/views/Author/Author.vue") },
    { path: '/projects', component: import("@/views/Projects/Projects.vue") }

]
const router =createRouter({
    history: createMemoryHistory(),
    routes
}) ;
export default router;