jQuery.noConflict();
var	mup_widget = {};
mup_widget.with_jquery = function(block) {
	block(jQuery, document.body);
};
mup_widget.api_call = function(path, params) {
	return "http://api.meetup.com" + path + "?callback=?&" + jQuery.param(jQuery.extend({ key: $api_key }, params));
};