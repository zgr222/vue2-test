import Vue from './vue.browser.js';
import App from './App.js';

new Vue({
    // render(h) {
    //     return h(App);
    // },
    render: (h) => h(App),

    // 相当于：
    // components: {
    //     App
    // },
    // template: `<App/>`
}).$mount('#app');