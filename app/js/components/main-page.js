import Vue from 'vue'
import home from './home'
import create from './pivot-create'
import pivotEditor from './pivotEditor/pivot-editor'

export default Vue.extend({
	template:`
		<div>
			<component :is="view" :catalog="catalog" v-ref:_view></component>
		</div>
	`,
	components:{
		home,
		create,
		pivotEditor,
	},
	data: function() {
		let data = {
			view:"create",
			catalog:"a"
		}
		return data;
	},
	events:{
		'home-cmd-new':function(msg) {
			this.catalog = ""
			this.view = "create"
		},
		'create-pivot-cmd':function(catalog) {
			this.catalog = catalog
			this.view = "pivot-editor"
		}
	},
})