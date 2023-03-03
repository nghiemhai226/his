import { createRouter, createWebHistory } from 'vue-router'
import { LAYOUT_AUTH, LAYOUT_DEFAULT, LAYOUT_ERROR } from '../constants'

import HomePage from '../views/Home.vue'
import LoginPage from '../views/Login.vue'

import DashboardPage from '../views/Dashboard.vue'

import PatientPage from '../views/dictionary/Patient.vue'

import NotFound from '../views/error'

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: HomePage, 
        meta: { 
            layout: LAYOUT_DEFAULT
        }
    },
    { 
        path: '/login', 
        name: 'login', 
        component: LoginPage, 
        meta: { 
            layout: LAYOUT_DEFAULT
        }
    },


    { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { layout: LAYOUT_AUTH } },

    { path: '/patient', name: 'patient', component: PatientPage, meta: { layout: LAYOUT_AUTH } },

    { path: '/:pathMatch(.*)', name: 'not-found', component: NotFound, meta: { layout: LAYOUT_ERROR } }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

export default router