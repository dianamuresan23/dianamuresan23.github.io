        
const observer = new AusweisApp2.StationaryStatusObserver((status) => {
  console.log("new status", status);
  let s = "Status: " + status.status;
  if (status.details) {
	s += `\nfound ${status.details.name}, version ${status.details.implementationVersion} by ${status.details.implementationVendor}`;
  }
  if (s.includes("safari")) {
	s = "Status: Please start the AusweisApp2 first";
  }
});

observer.observe();
