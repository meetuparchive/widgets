jQuery.noConflict();
function with_jquery(block) {
  block(jQuery, document.body);
}
function api_call(path, params) {
  return "http://api.meetup.com" + path + "?callback=?&" + jQuery.param(jQuery.extend({ key: $api_key }, params));
}
