function handler(event) {
  var request = event.request;
  var uri = request.uri;
  const split = uri.split('/');

  if (!uri.includes('.')) {
    if (uri.endsWith('/') || split.length < 2) {
      uri = "/index.html";
    } else {
      if (split.length == 3) {
        uri = "/" + split[1] + "/" + split[split.length - 1] + ".html";
      } else {
        uri = "/" + split[split.length - 1] + ".html";
      }
    }
  }

  request.uri = uri;
  return request;
}
