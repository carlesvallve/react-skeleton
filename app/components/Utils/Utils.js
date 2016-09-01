// set language from html tag and load content file

export const SetLanguage = () => {
  window.lang = document.getElementsByTagName('html')[0].getAttribute('lang') || 'en';
  window.content = require("json!../../assets/json/content.json");
  console.log('>>> lang: ' + window.lang);
}


// set platform by browser's userAgent

export const SetPlatform = () => {
  function detectPlatform() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    //|| navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return 'smartphone';
    } else if (navigator.userAgent.match(/iPad/i)) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  window.platform = detectPlatform();
  console.log('>>> platform: ' + window.platform);
}


export const SetData = (cb, err) => {
  var params = {
    'price':'sale',
    'sort':'new',
    'page':1,
    'pagesize':16,
    'floor':'movies',
    'service':'videos',
    'type':'category',
    'id':6565,
    'lang':'en',
    'unit':'USD',
    'device':'mobile',
    'content_id':6565
  };

  // $.ajax({
  // 	url: '/api/v1/content/list/',
  // 	data: params,
  // 	type: 'POST',
  // 	dataType: 'json',
  // 	success: function(data) {
  // 		var html = '';
  // 		if(data.hasOwnProperty('items') && data.items.length > 0) {
  //
  // 			// ALL OTHER OPTIONS ARE PRODUCT LIST
  // 			for(i = 0; i < data.items.length; i++) {
  // 				html += '<li><a href=""><img src="' + data.items[i].image.medium + '"></a></li>';
  // 			}
  //
  // 			console.log(data);
  // 			$('.somediv').append(html).slideDown();
  // 		}
  // 	},
  // 	error: function() {
  //     	console.log('something went wrong');
  //     }
  // });



  // keep this as separate function for later refactor
  // should callback be handled here or in calling wrapper function?

  function _doAJAX(url, method, params, callback, errorCallback) {
    // NO JQ VERSION - based on code from http://youmightnotneedjquery.com/
    // doesn't need to wait for jQuery to load..
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) { // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") { // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else { // CORS not supported.
        xhr = null;
    }

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.withCredentials = true;

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        if(typeof callback === 'function') {
            callback(xhr.responseText);
        } else {
            return xhr.responseText;
        }
      } else {
        console.log('server returned 400+ error'); // We reached our target server, but it returned an error
        if(typeof errorCallback === 'function') errorCallback();
      }
    };

    xhr.onerror = function() { // There was a connection error of some sort
      if(typeof errorCallback === 'function') errorCallback();
    };

    if(method === 'POST') {
      xhr.send(params);
    } else {
      xhr.send();
    }
  }


  // prepare params for AJAX

  function xparams(params) {
    var f = '';
    var keys = Object.keys(params);
    keys.map(function(a) {
      f += a + '=' + params[a] + '&'
    });
    // trim the last &
    return f.replace(/.&$/g, '');
  }


  // execute api call

  _doAJAX(
    '/api/v1/content/list/',
    'POST',
    xparams(params),

    // callback jandler
    function(data) {
      // convert string to object
      data = JSON.parse(data);

      var html = '';

      if (data.hasOwnProperty('items') && data.items.length > 0) {

        // ALL OTHER OPTIONS ARE PRODUCT LIST
        // for(i = 0; i < data.items.length; i++) {
        //   html += '<li><a href=""><img src="' + data.items[i].image.medium + '"></a></li>';
        // }
        //document.getElementById('somediv').innerHTML = html; //.append(html).slideDown();

        console.log('data from api:', data);
        cb(data);
      }
    },

    // error handler
    function() {
      console.log('something went wrong');
      err();
    }
  );

}
