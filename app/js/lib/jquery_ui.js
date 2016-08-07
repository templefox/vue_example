import $ from 'jquery'

window.jQuery = $
require('../../../node_modules/jquery-ui/ui/version.js')
require('../../../node_modules/jquery-ui/ui/keycode.js')
require('../../../node_modules/jquery-ui/ui/widgets/datepicker.js')
require('../../../node_modules/jquery-ui/themes/base/core.css')
require('../../../node_modules/jquery-ui/themes/base/datepicker.css')
require('../../css/jquery-ui.theme.css')
require('pivottable')
require('../../../node_modules/pivottable/dist/pivot.css')

var jQuery = window.jQuery
window.jQuery = null

export default jQuery