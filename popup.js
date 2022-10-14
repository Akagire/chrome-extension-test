document.getElementById("runButton").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onRun,
  });
});

function onRun() {
  chrome.storage.sync.get(null, (options) => {
    window.alert(options.colorValue);
    document.body.style.backgroundColor = options.colorValue;
  });
}
