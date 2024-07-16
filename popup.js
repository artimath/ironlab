let images = [];

document.getElementById('dropzone').addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.getElementById('dropzone').addEventListener('drop', (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  for (let file of files) {
    if (file.type.startsWith('image/')) {
      images.push(file);
    }
  }
  document.getElementById('dropzone').textContent = `${images.length} image(s) added`;
});

document.getElementById('generate').addEventListener('click', () => {
  if (images.length === 0) {
    alert('Please add at least one image');
    return;
  }
  
  chrome.runtime.sendMessage({action: 'processImages', images: images}, (response) => {
    if (response.success) {
      document.getElementById('result').textContent = 'CSV generated and downloaded!';
    } else {
      document.getElementById('result').textContent = 'Error: ' + response.error;
    }
  });
});

// Add this to your existing popup.js
document.getElementById('testMode').addEventListener('change', (e) => {
  chrome.storage.sync.set({testMode: e.target.checked});
});

// Load saved test mode state
chrome.storage.sync.get('testMode', (data) => {
  document.getElementById('testMode').checked = !!data.testMode;
});