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
