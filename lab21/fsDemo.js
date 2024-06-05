const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.txt");
console.log(filePath);

// 1. Write data to a file
fs.writeFile(filePath, "Hello, world!", (err) => {
  if (err) {
    return console.error("Error writing to file:", err);
  }
  console.log("File written successfully.");
});
// 2. Read data from a file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }
  console.log("File contents:", data);
});

// 3. Append data to a file
fs.appendFile(filePath, "\nAppended text.", (err) => {
  if (err) {
    return console.error("Error appending to file:", err);
  }
  console.log("Data appended successfully.");
});

// 4. Rename the file
// const newFilePath = path.join(__dirname, "example-renamed.txt");
// fs.rename(filePath, newFilePath, (err) => {
//   if (err) {
//     return console.error("Error renaming file:", err);
//   }
//   console.log("File renamed successfully.");
// });

// 5. Delete the file
setTimeout(() => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return console.error("Error deleting file:", err);
      }
      console.log("File deleted successfully.");
    });
  }, 2000);
