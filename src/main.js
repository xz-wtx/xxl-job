import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import asyncRouter from "./router/asyncRouter";
import store from "./store";
import Load from '../src/components/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './assets/icons/index';
//全局方法
import mixins from './mixins/index';


window.addEventListener('beforeunload', closeMask())

function closeMask() {
 asyncRouter.addRouter();
}




let  app=createApp(App);
app.use(ElementPlus, { locale });
app.mixin(mixins)
app.use(store).use(router).use(Load).mount("#app");



