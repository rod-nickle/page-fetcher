const needle = require('needle');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

needle.get(url, (error, response, body) => {
  // There was an error in the API request.
  if (error) {
    console.log(`There was an error with the URL: ${error.name} ${error.message}`)
    return;
  }
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.log(`There was an error writing the file: ${error.name} ${error.message}`)
      return;
    }
    // File was successfully written.
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
