# QR Code Generator

A simple Node.js application that generates QR codes from URLs and saves them as PNG images.

## Features

- Generate QR codes from any valid URL
- Save QR codes as PNG images
- Store entered URLs in a text file
- Interactive command-line interface

## Prerequisites

Before running this application, make sure you have:
- Node.js installed (v14.0.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Mkaif5365/qr-code-generator.git
cd qr-generator
```

2. Install the required dependencies:
```bash
npm install
```

## Required Dependencies

- `qr-image`: For generating QR codes
- `inquirer`: For command-line user input

## Usage

1. Run the application:
```bash
node index.js
```

2. Enter the URL when prompted
3. The application will generate:
   - A QR code image (`qr.png`)
   - A text file containing the URL (`url.txt`)

## Example Output

Here's an example of a QR code generated using this application:

![Example QR Code](./Examples/qr.png)

## Project Structure

```
qr-generator/
├── index.js
├── package.json
├── package-lock.json
├── qr.png
├── url.txt
├── examples/
│   └── qr.png
│   └── qr2.png
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
