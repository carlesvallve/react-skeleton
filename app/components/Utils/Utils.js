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


// Modify site styles depending on cookie / login / platform

export const SetCookieState = () => {
  // get cookie by name
  function getCookie(name) {
    function escape(s) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
  }


  // get if user is internal

  const doIhaveACookie = getCookie('il') ? true : false;
  const amIComingFromR18 = document.referrer.indexOf("r18.com") > -1;
  const amIComingFromTheSamePage = document.referrer === window.location.href;

  const internalUser = (doIhaveACookie || (amIComingFromR18 && !amIComingFromTheSamePage)) ? true : false;
  console.log('>>> internal user: ' + internalUser);
  console.log('       - doIhaveACookie:', doIhaveACookie);
  console.log('       - amIComingFromR18:', amIComingFromR18);
  console.log('       - amIComingFromTheSamePage:', amIComingFromTheSamePage);


  // modify native header and footer

  if (!internalUser) {
    if (window.platform === 'desktop') {
      const gDef = document.querySelector('.gDef');
      console.log(gDef);
      if (gDef !== null) {
        gDef.style.display = 'block';
        document.querySelector('#hd-sec-middle').style.display = 'none';
        document.querySelector('#hd-sec-bottom').style.display = 'none';
        document.querySelector('#contents').style.padding = '40px 0 110px 0';
        setTimeout(function() {
          document.querySelector('#footer').style.display = 'block';
          document.querySelector('#footer').style.height = '110px';
          document.querySelector('#footer').style['margin-top'] = '-110px';
          document.querySelector('#footer .inner01').style.display = 'none';
          document.querySelector('.ft-list-nav02').style.display = 'none';
        }, 1000);
      }
    } else {
      const mainWrap = document.querySelector('.mainWrap');
      if (mainWrap !== null) {
        document.querySelector('.mainWrap > header').style.display = 'none';
        setTimeout(function() {
          document.querySelector('.mainWrap > footer').style.display = 'none';
        }, 1000);
      }
    }
  }


  // modify root styles and custom header and footer

  var root = document.getElementById('root');
  var fixedStyles;

  if (internalUser || window.platform === 'desktop') {
    // displaying normal dmm
    if (window.platform === 'desktop') {
      root.style.marginTop = '-2px';
      root.style.paddingBottom = internalUser ? '370px' : '0';
    } else {
      root.style.paddingTop = '78px';
      root.style.marginBottom = '-1px';
    }

    fixedStyles = {
      header: { display: 'none' },
      footer: { display: 'none' }
    };

  } else {
    if (window.platform === 'desktop') {
      root.style.marginTop = '-2px';
      root.style.paddingBottom = '0';
    } else {
      root.style.marginTop = '48px';
      root.style.paddingBottom = '0';
    }

    fixedStyles = {
      header: { display: 'block' },
      footer: { display: 'block' }
    };
  }

  return fixedStyles;
}


// Call API to retrieve site data

export const SetData = (itemCount, cb, err) => {
  var params = {
    'price':'sale',
    'sort':'new',
    'page':1,
    'pagesize':64,
    'floor':'movies',
    'service':'videos',
    'type':'category',
    'id':6565,
    'lang': window.lang,      // 'en'
    'unit': window.currency,  // 'EUR'
    'device':'mobile',
    'safe': 1,
    'content_id':6565
  };


  // iterate data and make sure to return N items with all required params

  function correctDataItems(_items) {
    console.log('correcting data...', itemCount);
    let items = [];

    for (let i = 0; i < _items.length; i++) {
      if (Object.keys(_items[i].actress).length === 0 || _items[i].sample === null) {
        continue;
      }

      items.push(_items[i]);
      if (items.length === itemCount) {
        return items;
      }
    }

    console.warn('correct data could not be completed');
    return _items;
  }

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
    var keys = Object.keys(params);
    var out = [];
    keys.map(function(a) {
      out.push(a + '=' + params[a])
    });

    return out.join('&');
  }


  // execute api call

  _doAJAX(
    '/api/v1/content/list/',
    'POST',
    xparams(params),

    // callback handler
    function(data) {
      // convert string to object
      data = JSON.parse(data);

      if (data.hasOwnProperty('items') && data.items.length > 0) {
        data.items = correctDataItems(data.items);
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
