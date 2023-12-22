const path = require("path");
const fs = require("fs");
const scriptDirectory = __dirname;
const targetDirectory = path.join(scriptDirectory, "mixins");
const files = fs.readdirSync(targetDirectory);
const folderName = process.argv[2];

files.forEach((file) => {
  const filePath = path.join(targetDirectory, file);
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    let oldName = filePath.split("\\").at(-1);
    let newName = filePath.replace(oldName, folderName);
    fs.renameSync(filePath, newName);
    console.log("is", newName,folderName);
  } else {
    // let content = fs.readFileSync(filePath, "utf-8");
    // console.log(content);
  }
});
