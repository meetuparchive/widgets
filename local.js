function api_call(path, params) {
  return "http://api.meetup.com" + path + "?callback=?&" + wjq$.param(wjq$.extend({ key: $api_key }, params));
}