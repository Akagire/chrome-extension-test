document.querySelectorAll('.color').forEach((elm) => {
  elm.addEventListener('click', (e) => {
    const options = {
      colorValue: e.target.style.backgroundColor,
      colorName: e.target.innerText,
    };
    chrome.storage.sync.set(options);
    document.querySelector('#message').innerText = `Set color to ${options.colorName}`;
  });
});
