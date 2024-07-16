# Facebook Marketplace CSV Generator Chrome Extension

## Description

This Chrome extension allows users to generate CSV files for Facebook Marketplace listings from images. Users can drag and drop images into the extension, which then uses OpenAI's vision model to analyze the images and generate appropriate descriptions, titles, and other relevant information for Facebook Marketplace listings.

## Features

- Drag-and-drop interface for adding images
- Integration with OpenAI's GPT-4 Vision API for image analysis
- Automatic generation of CSV files compatible with Facebook Marketplace
- Customizable settings for API key management
- Test mode for development and debugging

## Installation

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in your Chrome toolbar to open the popup.
2. Drag and drop image files into the designated area.
3. Click the "Generate CSV" button to process the images and create a CSV file.
4. The generated CSV file will be automatically downloaded.

## Configuration

1. Right-click on the extension icon and select "Options" to open the settings page.
2. Enter your OpenAI API key in the provided field and save.

## Development and Testing

- Set `TEST_MODE = true` in `background.js` to bypass actual API calls during development.
- Use the test mode toggle in the popup for easy switching between test and live modes.
- Check the console logs in the extension's background page for debugging information.

## Files and Structure

- `manifest.json`: Extension configuration
- `popup.html` & `popup.js`: User interface for the extension
- `background.js`: Core logic for image processing and API calls
- `settings.html` & `settings.js`: Settings page for API key management
- `styles.css`: Styles for the extension's UI

## Dependencies

- OpenAI API (GPT-4 Vision model)

## Notes

- Ensure compliance with OpenAI's usage policies and Facebook Marketplace's rules when using this extension.
- Remove or disable test mode and console logs before publishing the extension.

## Future Improvements

- Implement more robust parsing of the OpenAI API response
- Add progress indicators for image processing and CSV generation
- Allow customization of CSV fields
- Improve error handling and user feedback

## License

[Add your chosen license here]

## Contact

[Add your contact information or support instructions here]