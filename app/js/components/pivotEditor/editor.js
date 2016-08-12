import Vue from 'vue'

var detailedEditor = Vue.extend({
	template:`
		<div>
			<button>detailed</button>
		</div>
	`
})

export default Vue.extend({
	template:`
		<div>
			<button>Columns</button>
			<button>Rows</button>
			<button>Values</button>
			<button>Filter</button>
			<detailed-editor></detailed-editor>
			<button @click="update">update</button>
		</div>
	`,
	props:["catalog"],
	components:{
		detailedEditor
	},
	ready:function() {
		console.log("xx22")
	},
	methods:{
		update:function() {
			let opts = {}
			this.$dispatch("editor-cmd-update",opts)
		}
	}
})