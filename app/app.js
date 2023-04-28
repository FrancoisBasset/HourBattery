import Vue from 'nativescript-vue';

import Home from './views/Home';

new Vue({
	render: (h) => h('frame', [h(Home)]),
}).$start();
