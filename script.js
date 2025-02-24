        

const isMobile = AusweisApp2.isMobile();

document.getElementById("platform_type").innerText = isMobile ? "Platform: You are on mobile" : "Platform: You are on desktop";

const browserInfo = window.navigator.userAgent;  
document.getElementById("browser-info").innerText = "Browser: " + browserInfo.concat(" ", window.navigator.vendor);
 

if (isMobile) {
	document.getElementById("dektop_section").hidden = true;
	document.getElementById("mobile_section").hidden = false;

	const mobileElem = document.getElementById("mobile_a");
	AusweisApp2.observeEIDLink(mobileElem, () => {
		console.log("App is not installed");
	  
		document.getElementById("eid-install-app-hint").hidden = false;
	});
} else {
	document.getElementById("mobile_section").hidden = true;
	document.getElementById("desktop_section").hidden = false;
	
	const observer = new AusweisApp2.StationaryStatusObserver((status) => {
			console.log("new status", status);
			let s = "Status: " + status.status;
			if (status.details) {
				s += `\nfound ${status.details.name}, version ${status.details.implementationVersion} by ${status.details.implementationVendor}`;
			}
			if (s.includes("safari")) {
				s = "safari: we cannot detect if you have the app opened or not";
			}
			document.getElementById("status").innerText = s;
		}
	);
	
	observer.observe();

}


