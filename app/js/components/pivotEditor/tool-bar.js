import Vue from 'vue'

export default Vue.extend({
	template:`
		<div>
			<button>New sheet</button>
			<button>more</button>
		</div>
	`,
	components:{
	},
	props:["catalog"],
	ready:function() {
	},
})