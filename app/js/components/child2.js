import Vue from 'vue'
import $ from '../lib/jquery_ui.js'

console.log($.fn)

export default Vue.extend({
	template: `
		<div>
			<div id="date"> child2 </div>
			<div id="pivot"></div>
		</div>
	`,
	activate: function(done) {
		console.log("load2")
		done()
	},
	ready:function() {
		$("#date").datepicker()
		$("#pivot").pivot(
            [
                {color: "blue", shape: "circle"},
                {color: "red", shape: "triangle"}
            ],
            {
                rows: ["color"],
                cols: ["shape"]
            }
        );
		console.log($.pivotUtilities)
	}
})