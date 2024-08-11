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
        console.log(to.hash);
        if(to.hash){  
            if(document.querySelector(to.hash)){
                const el: any = document.querySelector(to.hash);
                window.scrollTo(0,el.offsetTop-10);
                // window.scrollTo({
                //     top: 500,//el.offsetTop
                //     left: 0,
                //     behavior: "smooth",
                // });
                return{
                    selector: to.hash,
                    behavior: 'smooth'
                }
            }
            return false;
        }
    }
}) ;
export default router;