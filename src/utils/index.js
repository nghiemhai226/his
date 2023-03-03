import { defineAsyncComponent } from 'vue'
import { LAYOUT_AUTH, LAYOUT_DEFAULT, LAYOUT_ERROR } from '../constants'

export function registerLayoutComponents (app) {
    app.component(LAYOUT_AUTH, defineAsyncComponent(() => import('../layouts/Auth.vue')));
    app.component(LAYOUT_DEFAULT, defineAsyncComponent(() => import('../layouts/Default.vue')));
    app.component(LAYOUT_ERROR, defineAsyncComponent(() => import('../layouts/Error.vue')));
}