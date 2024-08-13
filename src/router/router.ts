import { createMemoryHistory, createRouter } from 'vue-router';
const routes = [
    { path: '/', component: ()=>import("@/views/Tools/Tools.vue") },
    { path: '/author' ,component: ()=>import("@/views/Author/Author.vue") },
    { path: '/projects', component: ()=>import("@/views/Projects/Projects.vue") },
    { path: '/tools', component: ()=>import("@/views/Tools/Tools.vue") },
    { path: '/blogs', component: ()=>import("@/views/Blogs/Blogs.vue") }

]
const router =createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition
        }
        else if (to.hash) {
            return { 
                el: to.hash,
                behavior: 'smooth',
                top: 20
            };
        }       
    }
}) ;
export default router;