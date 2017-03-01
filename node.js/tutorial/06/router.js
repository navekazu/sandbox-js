function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  var val = "";
  if (typeof handle[pathname] === 'function') {
    val = handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
  return val;
}

exports.route = route;

