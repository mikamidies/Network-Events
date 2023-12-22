const path = require("path");
const fs = require("fs");
const scriptDirectory = __dirname;
const targetDirectory = path.join(scriptDirectory, "pages");
const files = fs.readdirSync(targetDirectory);

files.forEach((file) => {
  const filePath = path.join(targetDirectory, file);
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    console.log("is", file);
  } else {
    let content = fs.readFileSync(filePath, "utf-8");
    console.log(content);
  }
});
