import Vue from 'vue'
import "../../../css/wijmo.min.css"
import "../../../css/wijmo.theme.material.min.css"

window.wijmo = {}
require('../../lib/wijmo.min.js')
require('../../lib/wijmo.input.min.js')
require('../../lib/wijmo.grid.min.js')
require('../../lib/wijmo.grid.filter.min.js')
require('../../lib/wijmo.olap.min.js')

export default Vue.extend({
	template:`			
		<div>
			<div v-show="false" id="pivotPanel"></div>
			<div id="pivotGrid"></div>
		</div>
	`,
	watch: {
    	'data': function (val) {
    		var app = {}
			app.panel = new window.wijmo.olap.PivotPanel('#pivotPanel');
			app.pivotGrid = new window.wijmo.olap.PivotGrid('#pivotGrid', {
				itemsSource: app.panel
			});

			// configure the PivotPanel's initial view
			var ng = app.panel.engine;
			ng.itemsSource = new window.wijmo.collections.CollectionView(val)
			ng.showColumnTotals = window.wijmo.olap.ShowTotals.Subtotals
			ng.showRowTotals = window.wijmo.olap.ShowTotals.Subtotals

			ng.rowFields.push('Bp');
			ng.columnFields.push('Date');
			ng.valueFields.push('Value');
    	},
    }
})