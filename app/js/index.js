import Vue from 'vue'
import VueRouter from 'vue-router'
import myComponent from './components/child'
import mCom from './components/child2'
import topHead from './components/head'
import main from './components/main-page'
import '../css/app.css'
import $ from 'jquery'

Vue.use(VueRouter)

var rootVue = Vue.extend({
	template:`
		<div>
			<top-head schema="sbodemous" user="manager"></top-head>
			<main></main>
		</div>
		`,
	data: function() {
		return { 
			view: "m-com",
			message: "123",
			data: JSON.stringify([])
		}
	},
	components: {
		topHead,
		myComponent,
		mCom,
		main,
	},
	
	ready:function() {
		console.log("xx")
	},

	methods: {
		load:function(event) {
			$.getJSON("example/data.json",(data) => {
				this.$refs.t.render(data)
			})
		}
	}

})


var app = new rootVue({
	el: '#app',
})

window.app = app