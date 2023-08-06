// background.js

// Open Bing search page when the extension is loaded
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: "https://www.bing.com" });
});
