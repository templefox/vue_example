import Vue from 'vue'
import treeItem from './treeView/treeItem'

export default Vue.extend({
	template:`
		<ul>
			<tree-item :d="treeData"></tree-item>
		</ul>
	`,
	data:function() {
		let data = {
			treeData:{
				name:"root",
				children:[{
					name:"h1",
					children:[
						{name:"h11"
						}
					]
				},
				{
					name:"h2"
				}]
			}
		}
		return data
	},
	components:{
		treeItem,
	},
	events:{
		selected:function(selected) {
			this.$dispatch("create-pivot-cmd",selected)
		}
	}
})