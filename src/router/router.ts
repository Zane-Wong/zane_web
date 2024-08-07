import { createMemoryHistory, createRouter } from 'vue-router';
const routes = [
    { path: '/', component: import("@/views/Tools/Tools.vue") },
    { path: '/author' ,component: import("@/views/Author/Author.vue") },
    { path: '/projects', component: import("@/views/Projects/Projects.vue") },
    { path: '/tools', component: import("@/views/Tools/Tools.vue") },
    { path: '/blogs', component: import("@/views/Blogs/Blogs.vue") }

]
const router =createRouter({
    history: createMemoryHistory(),
    routes
}) ;
export default router;