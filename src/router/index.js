import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/LoginView.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/RegisterView.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/NotFound',
        name: 'notFound',
        component: () =>
            import ('../views/NotFound.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/admin/DasboardView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/user/UserView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/offlineClass',
        name: 'offlineClass',
        component: () =>
            import ('../views/offlineClass/offlineClassView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/offlineClass/addOfflineClass',
        name: 'addOfflineClass',
        component: () =>
            import ('../views/offlineClass/addOfflineClass.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/offlineClass/Categories/:id',
        name: 'categories',
        component: () =>
            import ('../views/offlineClass/OfflineCategory/OfflineCategoryById'),
        meta: { requiresAuth: true }
    },
    {
        path: '/onlineClass',
        name: 'onlineClass',
        component: () =>
            import ('../views/onlineClass/onlineClassView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/onlineClass/addOnlineClass',
        name: 'addOnlineClass',
        component: () =>
            import ('../views/onlineClass/addOnlineClass.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/onlineClass/Categories/:id',
        name: 'online categories',
        component: () =>
            import ('../views/onlineClass/OnlineCategory/OnlineCategoryById'),
        meta: { requiresAuth: true }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, _, next) => {
    if (to.name == "login" && store.state.token) {
        next({
            name: 'user'
        })
    }
    if (to.matched.length == 0) {
        next({
            name: 'notFound'
        })
    }
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.requiresAuth && !store.state.token) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        next({
            name: 'login'
        })
    }
    next()
})
export default router