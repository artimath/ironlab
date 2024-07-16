const TEST_MODE = true; // Set this to false for production

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'processImages') {
    processImages(request.images)
      .then(csv => {
        downloadCSV(csv);
        sendResponse({success: true});
      })
      .catch(error => {
        console.error('Error processing images:', error);
        sendResponse({success: false, error: error.message});
      });
    return true;  // Indicates we will respond asynchronously
  }
});

async function processImages(images) {
  console.log('Processing images:', images);
  const apiKey = await getApiKey();
  if (!apiKey) {
    throw new Error('OpenAI API key not set. Please set it in the extension settings.');
  }

  const imageDescriptions = await Promise.all(images.map(processImage));
  console.log('Image descriptions:', imageDescriptions);
  const csvData = generateCSV(imageDescriptions);
  return csvData;
}

async function processImage(image) {
  console.log('Processing image:', image.name);
  
  const { testMode } = await chrome.storage.sync.get('testMode');
  if (testMode) {
    return `Test description for ${image.name}`;
  }

  // Convert image to base64
  const base64Image = await getBase64(image);
  
  // Call OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${await getApiKey()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // Payload shape:
      // {
      //   model: string,
      //   messages: Array<{
      //     role: string,
      //     content: Array<{
      //       type: string,
      //       text?: string,
      //       image_url?: { url: string }
      //     }>
      //   }>
      // }
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Describe this image for a Facebook Marketplace listing. Include title, description, estimated price, condition, and category." },
            { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
          ]
        }
      ]
    })
  });

  const data = await response.json();
  console.log('OpenAI API response:', data);
  // Expected response shape:
  // {
  //   id: string,
  //   object: string,
  //   created: number,
  //   model: string,
  //   usage: {
  //     prompt_tokens: number,
  //     completion_tokens: number,
  //     total_tokens: number
  //   },
  //   choices: Array<{
  //     message: {
  //       role: string,
  //       content: string
  //     },
  //     finish_reason: string,
  //     index: number
  //   }>
  // }
  return data.choices[0].message.content;
}

function generateCSV(descriptions) {
  const csvRows = [['title', 'description', 'price', 'condition', 'category']];
  
  descriptions.forEach(description => {
    const rows = parseDescription(description);
    csvRows.push(rows);
  });

  return csvRows.map(row => row.join(',')).join('\n');
}

function parseDescription(description) {
  // Implement parsing logic to extract fields from the API response
  // This is a placeholder implementation
  return ['Sample Item', 'This is a sample item', '10.00', 'used', 'Home & Garden'];
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}

async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('openaiApiKey', (data) => {
      resolve(data.openaiApiKey);
    });
  });
}

function downloadCSV(csv) {
  const blob = new Blob([csv], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  chrome.downloads.download({
    url: url,
    filename: 'facebook_marketplace.csv'
  });
}