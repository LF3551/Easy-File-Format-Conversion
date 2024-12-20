# Easy File Format Conversion

**Easy File Format Conversion** is a versatile and lightweight Node.js script for converting and managing files. It supports converting images, text files, and handling archives with ease. This tool is perfect for developers and data analysts looking for command-line utilities.

## Features

- **Image Conversion**: Convert images between formats like JPEG, PNG, and WebP.
- **Text File Transformation**: Convert between CSV and JSON formats.
- **Archive Management**: Compress folders into ZIP archives and extract ZIP files.
- **Lightweight and Fast**: Built with Node.js for seamless file handling.

---

## Installation

### Prerequisites
- Node.js installed on your system. [Download Node.js](https://nodejs.org/)
- Required npm packages: Install them by running the following:
  ```bash
  npm install
```
###  Clone the repository:
   ```bash
   git clone https://github.com/LF3551/Easy-File-Format-Conversion.git
   cd Easy-File-Format-Conversion
 ```

 
## Usage

### Commands

#### Convert Image
Converts images between formats like JPEG, PNG, and WebP.
```bash
node app.js convert-image --input=<input-file> --output=<output-file>
```
Example:
```bash
node app.js convert-image --input=test.jpg --output=output.png
```
#### Convert Text File
Converts between CSV and JSON formats.
```bash
node app.js convert-text --input=<input-file> --output=<output-file>
```
Examples:
CSV → JSON:
```bash
node app.js convert-text --input=data.csv --output=data.json
```
JSON → CSV:
```bash
node app.js convert-text --input=test.json --output=output.csv
```
#### Compress Folder
Compresses a folder into a ZIP archive.
```bash
node app.js compress --input=<input-folder> --output=<output-archive>
```
Example:
```bash
node app.js compress --input=data --output=data.zip
```
#### Decompress Archive
Extracts a ZIP archive into a folder.
```bash
node app.js decompress --input=<input-archive> --output=<output-folder>
```
Example:
```bash
node app.js decompress --input=data.zip --output=data
```


#### Convert Image
Convert a JPEG file to PNG:
```bash
node app.js convert-image --input=test.jpg --output=output.png
```
Convert CSV to JSON:
```bash
node app.js convert-text --input=data.csv --output=data.json
```
Compress a folder into a ZIP archive:
```bash
node app.js compress --input=data --output=data.zip
```
Compress a Folder
```bash
node app.js compress --input=my_folder --output=my_archive.zip
```
Decompress a ZIP Archive
```bash
node app.js decompress --input=my_archive.zip --output=my_folder
```
## License
This project is licensed under the [Universal Permissive License (UPL), Version 1.0](https://opensource.org/licenses/UPL).
