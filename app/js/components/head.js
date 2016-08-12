import Vue from 'vue'

export default Vue.extend({
	template:`
		<div>
			<nav>
				<span>Interactive Analysis</span>
				<span>{{ schema }} </span>
				<span>{{ user }} </span>
			</nav>
		</div>
	`,
	props:["schema","user"],
	ready:function() {
		console.log("xx22")
	},
})