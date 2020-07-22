const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
}

const instagramDeepLink = (href, target) => {
    const afterDomain = href.split(".com/")[1];
    const isPhoto = afterDomain.includes("p/");
  
    if (target === "Android") {
      if (isPhoto) {
        return `intent://instagram.com/${afterDomain}#Intent;package=com.instagram.android;scheme=https;end`;
      }
      // profile
      return `intent://instagram.com/_u/${afterDomain}/#Intent;package=com.instagram.android;scheme=https;end`;
    } else if (target === "iOS") {
      if (isPhoto) {
        return undefined;
      }
      // profile
      return `instagram://user?username=${afterDomain}`;
    }else {
      return `http://instagram.com/${afterDomain}`;
    }
  };