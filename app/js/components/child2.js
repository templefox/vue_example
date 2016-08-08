import Vue from 'vue'
import $ from '../lib/jquery_ui.js'

export default Vue.extend({
	template: `
		<div>
			<div id="pivot"></div>
		</div>
	`,
	props: ['message'],
	activate: function(done) {
		console.log("load2")
		console.log("load2")
		done()
	},
	ready:function() {
		this.render(JSON.parse('[]'))
	},
	methods:{
		render:function(jsonData) {
			var sum = $.pivotUtilities.aggregatorTemplates.sum;
        	var numberFormat = $.pivotUtilities.numberFormat;
        	var intFormat = numberFormat({digitsAfterDecimal: 0}); 
			$("#pivot").pivot(
            	jsonData,
	            {
	                rows: ["bp"],
	                cols: ["date"],
	                aggregator: sum(intFormat)(["value"])
	            }
        	);
		}
	}
})