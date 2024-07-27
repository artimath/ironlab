# Facebook Marketplace CSV Generator Chrome Extension

## Project Overview
The Facebook Marketplace CSV Generator Chrome Extension streamlines the process of creating listings for Facebook Marketplace. It leverages OpenAI's vision model to analyze images and automatically generate detailed product descriptions, titles, and other relevant information. This extension bridges the gap between visual content and structured data, saving time for sellers and improving listing quality.

## Key Features
- **Image Analysis**: Utilizes OpenAI's GPT-4 Vision API to extract product details from images.
- **CSV Generation**: Automatically creates CSV files compatible with Facebook Marketplace bulk uploads.
- **Drag-and-Drop Interface**: User-friendly image upload system for easy interaction.
- **Customizable Settings**: Allows users to manage their OpenAI API key for secure access.
- **Test Mode**: Facilitates development and debugging without making actual API calls.

## Code Review and Highlights

### Efficient Image Processing
The `processImages` function in `background.js` demonstrates efficient handling of multiple images using Promise.all:

```javascript
async function processImages(images) {
  console.log('Processing images:', images);
  const apiKey = await getApiKey();
  if (!apiKey) {
    throw new Error('OpenAI API key not set. Please set it in the extension settings.');
  }

  const imageDescriptions = await Promise.all(images.map(processImage));
  console.log('Image descriptions:', imageDescriptions);
  const csvData = generateCSV(imageDescriptions);
  // ... rest of the function
}
```

This approach allows for concurrent processing of multiple images, significantly reducing overall execution time.

### Secure API Key Management
The extension implements a secure method for storing and retrieving the OpenAI API key using Chrome's storage API:

```javascript
async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('openaiApiKey', (data) => {
      resolve(data.openaiApiKey);
    });
  });
}
```

This method ensures that sensitive information is stored securely and not exposed in the codebase.

### CSV Generation
The `generateCSV` function in `background.js` efficiently creates a CSV structure from the processed image descriptions:

```javascript
function generateCSV(descriptions) {
  const csvRows = [['title', 'description', 'price', 'condition', 'category']];
  
  descriptions.forEach(description => {
    const rows = parseDescription(description);
    csvRows.push(rows);
  });

  return csvRows.map(row => row.join(',')).join('\n');
}
```

This function demonstrates a clean approach to data structuring and CSV formatting.

## Technologies Used
- JavaScript (ES6+)
- Chrome Extension APIs
- OpenAI GPT-4 Vision API
- HTML5 and CSS3 for user interface
- File API for handling image uploads

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/facebook-marketplace-csv-generator.git
   ```
2. Navigate to `chrome://extensions/` in Google Chrome.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. Configure your OpenAI API key in the extension settings.

## Usage
1. Click the extension icon in your Chrome toolbar.
2. Drag and drop image files into the designated area.
3. Click "Generate CSV" to process the images and create a CSV file.
4. The generated CSV file will automatically download, ready for upload to Facebook Marketplace.

## Contributing
We welcome contributions to improve the Facebook Marketplace CSV Generator!

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request.

Please ensure your code adheres to the existing style and includes appropriate comments.

## License
This project is licensed under the MIT License.

## Contact
Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/facebook-marketplace-csv-generator](https://github.com/yourusername/facebook-marketplace-csv-generator)
