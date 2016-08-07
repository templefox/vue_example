import Vue from 'vue'

export default Vue.extend({
	template: `<div>
		<p> {{ message }}</p>
			<slot name="two">
				should not shown
			</slot>
			<slot name="one"/>
		</div>`,
	props: ['message'],
	activate: function(done) {
		console.log("load")
		done()
	}
})