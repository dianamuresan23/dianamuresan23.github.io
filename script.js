        
const observer = new AusweisApp2.StationaryStatusObserver((status) => {
  console.log("new status", status);
  let s = "Status: " + status.status;
  if (status.details) {
	s += `\nfound ${status.details.name}, version ${status.details.implementationVersion} by ${status.details.implementationVendor}`;
  }
  if (s.includes("safari")) {
	s = "Status: Please start the AusweisApp2 first";
  }
  
  document.getElementById("status").innerText = s;
  
  const browserInfo = window.navigator.userAgent;
  
  document.getElementById("browser-info").innerText = "Browser: " + browserInfo.concat(" ", window.navigator.vendor);
  
  const mobileElem = document.getElementById("mobile_a");
  AusweisApp2.observeEIDLink(mobileElem, () => {
			console.log("App nicht installiert?");
		  
			document.getElementById("eid-install-app-hint").hidden = false;
  });
});

observer.observe();
