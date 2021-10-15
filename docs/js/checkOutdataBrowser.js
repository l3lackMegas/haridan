function get_browser() {
	var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return { name: 'IE', version: (tem[1] || '') };
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/)
		if (tem != null) { return { name: 'Opera', version: tem[1] }; }
	}
	if (window.navigator.userAgent.indexOf("Edge") > -1) {
		tem = ua.match(/\bEdge\/(\d+)/)
		if (tem != null) { return { name: 'Edge', version: tem[1] }; }      
	}
	if (window.navigator.userAgent.indexOf("FBAN") > -1 || window.navigator.userAgent.indexOf("FBAV") > -1) {
		tem = ua.match(/\bFBAV\/(\d+)/)
		if (tem != null) { return { name: 'FBAN', version: tem[1] }; }      
	}
	if (window.navigator.userAgent.indexOf("Instagram") > -1) {
		tem = ua.match(/\bInstagram\/(\d+)/)
		if (tem != null) { return { name: 'Instagram', version: tem[1] }; }      
	}
	let FM = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	
	if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
	
	return {
		name: FM[0],
		version: +FM[1]
	};
}


var browser = get_browser()
var isSupported = isSupported(browser);

function isSupported(browser) {
	var supported = false;
	if (browser.name === "Chrome" && browser.version >= 60) {
	  	supported = true;
	} else if (browser.name === "Firefox" && browser.version >= 60) {
		supported = true; 
	} else if (browser.name === "Safari" && browser.version >= 10) {
		supported = true; 
	} else if (browser.name === "Opera" && browser.version >= 38) {
		supported = true; 
	} else if (browser.name === "Edge") {
	  	supported = true;
	} else if (browser.name === "FBAN") {
		supported = true;
  	} else if (browser.name === "Instagram") {
		supported = true;
  	}
	return supported;
}

if (!isSupported) {
	document.getElementById("IE-Message").style.display = "block";
} else {
	let ieMsgElm = document.getElementById("IE-Message");
	ieMsgElm.parentNode.removeChild(ieMsgElm);
}

// document.getElementById("IE-Message").style.display = "block";
// document.getElementById("IE-Message").innerHTML = browser.version