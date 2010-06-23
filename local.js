function api_call(path, params) {
  return "http://api.meetup.com/" + path + "?callback=?&" + $.param($.extend({ key: $api_key }, params));
}
