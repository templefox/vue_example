import Vue from 'vue'

export default Vue.extend({
	name:"treeItem",
	template:`
		<li>
			<div v-bind:style="styleObject" @click="select(d.name)">{{d.name}}</div>
			<ul v-if="isFolder">
				<tree-item v-for="data in d.children" :d="data"/>
			</ul>
		</li>
	`,
	props:['d'],
	data:function() {
		return {
			selected:false
		}
	},
	computed:{
		isFolder:function() {
			return this.d.children && this.d.children.length
		},
		color:function() {
			return this.selected?'red':this.isFolder?'black':'blue'
		},
		styleObject:function() {
			return {
				color:this.color
			}
		}

	},
	ready:function() {
	},
	methods:{
		createPivot:function(catelog) {
			if(!this.isFolder){
				this.$dispatch("selected",catelog)
			}
		},
		select:function(catalog) {
			if(!this.isFolder){
				this.selected = true
				this.$dispatch("selection_change")
				this.$broadcast("selection_change")
			}
		}
	},
	events:{
		'selection_change':function() {
			this.selected = false
		}
	}
})