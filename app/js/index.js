import Vue from 'vue'
import myComponent from './components/child'
import mCom from './components/child2'
import '../css/app.css'
import $ from 'jquery'

var rootVue = Vue.extend({
	template:`
		<div>
			<button v-on:click="load">Load</button>
			<component :is="view" :message.sync="message">
				<p slot="one">123</p>
				<p slot="two">234</p>
			</component>
		</div>
		`,
	data: function() {
		return { 
			view: "my-component",
			message: "123",
			data: JSON.stringify([])
		}
	},
	components: {
		myComponent,
		mCom,
	},
	
	ready:function() {
		console.log("xx")
	},

	methods: {
		load:function(event) {
			$.getJSON("example/data.json",(data) => {
				this.$children[0].render(data)
			})
		}
	}

})


var app = new rootVue({
	el: '#app',
})

window.app = app