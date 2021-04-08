const TIME_DELAY = 1000;
var extensionID = "beddaoipmagehljjocilckobdpkddcjh";
if (localStorage.getItem("extensionID")) {
  extensionID = localStorage.getItem("extensionID");
} else {
  var extID = prompt("Please enter the extension ID");
  if (extID) {
    extensionID = extID;
    localStorage.setItem("extensionID", extensionID);
  }
}

var port;
try {
  port = chrome.runtime.connect(extensionID);
} catch (er) {
  alert("Some error occured!! Check your extension ID..");
  // Refresh page
}
chrome.runtime.connect(extensionID).onDisconnect.addListener(function () {
  port = chrome.runtime.connect(extensionID);
});

document.addEventListener("DOMContentLoaded", function () {
  ask();
  setInterval(() => {
    ask();
  }, TIME_DELAY);
});
function ask() {
  port.postMessage({
    query: "sysInfo",
  });
}
port.onMessage.addListener(function (response) {
  if (response && response.systemInfo) {
    var sysInfo = response.systemInfo;
    if (sysInfo.cpuInfo) {
      updateCPUSection(sysInfo.cpuInfo);
    }
    if (sysInfo.memoryInfo) {
      updateMemorySection(sysInfo.memoryInfo);
    }
    if (sysInfo.storageInfo) {
      updateStorageSection(sysInfo.storageInfo);
    }
  }
});
