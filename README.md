# DeezForms - Extension

it is a chome extensions that automates the process of filling out web forms. It's designed to help you quickly and accurately complete online forms with ease. Whether you're tired of manually entering information or need to automate form submissions for testing or data entry, Auto Form Filler has got you covered.

## Features

- **Form Detection**: Auto Form Filler detects and analyzes the structure of the web form on the current page.

- **Auto Label Extraction**: It automatically extracts labels associated with form fields to identify what information should be filled.

- **API Integration**: You can connect Auto Form Filler to an API to retrieve data for form filling.

- **Human-Like Typing**: It simulates human-like typing to ensure that form submissions look natural.

- **Easy-to-Use Interface**: The application provides a user-friendly interface to initiate the form filling process.

- **Magic Button**: A single click of the "Magic" button initiates the process, making it convenient for users.

## Getting Started

1. Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/raaasin/deezForms_extension
   ```
2. Load unpacked extension using developer tools in chrome.

## Usage

1. Click the "Let's start the magic" button on the web page where you want to fill out a form.

2. The application will analyze the form fields, extract labels, and prepare to fill the form.

3. If an API integration is set up, it will retrieve data from the API to populate the form fields.

4. The application will simulate human-like typing to fill out the form.

5. Once the form is filled, you can review the data and submit the form manually if needed.

## API Integration

Auto Form Filler allows you to connect to an API to retrieve data for filling out forms. You can customize the API endpoint and data in the `apiCall` function in the `index.js` file.

```javascript
function apiCall() {
    // Customize your API endpoint and data here
    fetch('https://example.com/api/fillme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        resposeData = data;
        fillForm();
    })
    .catch(error => {
        console.log("Error: " + error);
    });
}
```
