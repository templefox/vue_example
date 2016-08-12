import Vue from 'vue'

export default Vue.extend({
	template:`
		<div>
			<button @click='newPivot'>Create Pivot Table</button>
			<button @click='openPivot'>Open Pivot Table</button>
		</div>
	`,
	methods: {
		openPivot:function() {
			this.$dispatch('home-cmd-open')
		},
		newPivot:function() {
			this.$dispatch('home-cmd-new')
		}
	}
})