function handler(event) {
    var request = event.request;
    var uri = request.uri;
    const split = uri.split('/');
  
    if (!uri.includes('.')) {
        if (split !== undefined && split.length >= 2 && split[1].length > 1) {
            uri = "/" + split[1] + ".html"; 
        } else {
            uri = "/index.html"
        }
    }
   
    request.uri = uri;
    return request;
}
