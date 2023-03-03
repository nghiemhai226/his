import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { registerLayoutComponents } from './utils/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App);

registerLayoutComponents(app);

app.use(router);

app.mount('#app');