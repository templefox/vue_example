import Vue from 'vue'
import myComponent from './components/child'
import mCom from './components/child2'
import '../css/app.css'

var rootVue = Vue.extend({
	template:`
		{{ message }} 
		<component :is="view" :message.sync="message">
			<p slot="one">123</p>
			<p slot="two">234</p>
		</component >
		`,
	data: function() {
		return { 
			message: 'v-bind',
			view: "m-com"
		}
	},
	components:{
		myComponent,
		mCom,
	},
	
	ready:function() {
		console.log("xx")
	}

})


var app = new rootVue({
	el: '#app',
})

window.app = app