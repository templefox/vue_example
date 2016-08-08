import Vue from 'vue'
import "../../css/wijmo.min.css"
import "../../css/wijmo.theme.material.min.css"

window.wijmo = {}
require('../lib/wijmo.min.js')
require('../lib/wijmo.input.min.js')
require('../lib/wijmo.grid.min.js')
require('../lib/wijmo.grid.filter.min.js')
require('../lib/wijmo.olap.min.js')

export default Vue.extend({
	template: `<div>
			<div id="pivotPanel"></div>
			<div id="pivotGrid"></div>
		</div>`,
	props: ['message'],
	activate: function(done) {
		console.log("load")
		done()
	},
	ready:function() {
	},
	methods:{
		render:function(jsonData) {
			var app = {}
			app.panel = new window.wijmo.olap.PivotPanel('#pivotPanel');
			app.pivotGrid = new window.wijmo.olap.PivotGrid('#pivotGrid', {
				itemsSource: app.panel
			});

			// configure the PivotPanel's initial view
			var ng = app.panel.engine;
			ng.itemsSource = new wijmo.collections.CollectionView(jsonData)
			console.log(jsonData)
			ng.showColumnTotals = wijmo.olap.ShowTotals.Subtotals
			ng.showRowTotals = wijmo.olap.ShowTotals.Subtotals
		}
	}
})