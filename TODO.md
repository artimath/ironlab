# TODO List

## Frontend Tasks

1. Improve UI/UX:
   - [ ] Add a progress bar or loading spinner during image processing
   - [ ] Implement a preview feature for dropped images
   - [ ] Create a more visually appealing layout for the popup

2. Error Handling:
   - [ ] Display user-friendly error messages for various scenarios (API errors, network issues, etc.)
   - [ ] Add input validation for the API key in the settings page

3. Features:
   - [ ] Implement a feature to allow users to edit generated CSV data before download
   - [ ] Add an option to save multiple listings in the extension before generating the CSV

4. Testing:
   - [ ] Write unit tests for frontend components
   - [ ] Perform cross-browser testing (Chrome, Firefox, Edge)

## Backend Tasks

1. Image Processing:
   - [ ] Implement image resizing to ensure compatibility with OpenAI API limits
   - [ ] Add support for multiple image formats (PNG, WEBP, etc.)

2. OpenAI API Integration:
   - [ ] Implement rate limiting to prevent exceeding API quotas
   - [ ] Add caching mechanism to store recent API responses and reduce API calls

3. CSV Generation:
   - [ ] Improve parsing of OpenAI API responses to extract structured data
   - [ ] Implement customizable CSV field mapping

4. Security:
   - [ ] Implement secure storage for the API key (consider using Chrome's encrypted storage)
   - [ ] Add data sanitization for user inputs

5. Performance:
   - [ ] Optimize image processing for faster execution
   - [ ] Implement batch processing for multiple images

6. Testing:
   - [ ] Write unit tests for backend functions
   - [ ] Implement integration tests for API calls and CSV generation

## General Tasks

1. Documentation:
   - [ ] Create a detailed API documentation for the OpenAI integration
   - [ ] Write a contributing guide for future developers

2. Compliance:
   - [ ] Ensure the extension complies with Chrome Web Store policies
   - [ ] Verify compliance with OpenAI's usage policies and Facebook Marketplace rules

3. Deployment:
   - [ ] Set up a CI/CD pipeline for automated testing and deployment
   - [ ] Prepare the extension for Chrome Web Store submission

4. Monitoring:
   - [ ] Implement error logging and monitoring system
   - [ ] Set up analytics to track extension usage and performance