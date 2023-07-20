import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../views/MaHome.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/MaRegister.vue')
        }
    ]
})

export default router