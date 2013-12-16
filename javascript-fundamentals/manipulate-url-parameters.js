// You need to write a function that can manipulate URL parameters.

// It should be able to add a parameter to a existing URL, but also change a parameter if it already exists.

/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter (url, param) {
  var urlArr = url.split('?'),
      url = urlArr[0],
      params = urlArr[1] === undefined ? [] : urlArr[1].split('&');
      found = false;
  params = params.map(function (item) {
    return item.split('=')[0] === param.split('=')[0] ? (found = true, param) : item;
  });
  if (found) {
    return [url, params.join('&')].join('?');
  } else {
    params.push(param);
    return [url, params.join('&')].join('?');
  }
}