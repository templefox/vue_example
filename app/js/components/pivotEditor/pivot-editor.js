import Vue from 'vue'
import editor from './editor'
import toolbar from './tool-bar'
import pivotGrid from './pivot-grid'
import $ from 'jquery'

export default Vue.extend({
	template:`
		<div>
			<editor :catalog="catalog"></editor>
			<toolbar :catalog="catalog"></toolbar>
			<pivot-grid v-ref:grid></pivot-grid>
		</div>
	`,
	components:{
		editor,
		toolbar,
		pivotGrid
	},
	props:["catalog"],
	ready:function() {
	},
	events:{
		'editor-cmd-update':function(opts) {
			var that = this
			$.getJSON("example/data.json",function(data) {
				that.$refs.grid.$set("data",data)
			})
		}
	}
})