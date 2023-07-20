import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/fonts/fonts.css';
import './MaIcons.vue'
const app = createApp(App)
app.use(router)

app.mount('#app')