const axios = require("axios");
const fs = require("fs");
const path = require("path");
async function getTranslations() {
  const data = await axios.get("https://admin.justlink.uz/api/translations");
  return data?.data;
}
getTranslations();
async function searchAndReplaceInFolder(folderName) {
  const scriptDirectory = __dirname;
  const targetDirectory = path.join(scriptDirectory, folderName);
  const texts = await getTranslations();
  await Object.entries(texts)
    .filter((elem) => elem[0].includes("place"))
    .forEach((item) => {
      let searchText = `placeholder="${item[1]}"`;
      let replaceText = `:placeholder="$store.state.translations['${item[0]}']"`;
      searchAndReplaceFiles(targetDirectory, searchText, replaceText);
    });
  await Object.entries(texts)
    .filter((elem) => !elem[0].includes("place"))
    .forEach((item) => {
      let replaceText = `{{$store.state.translations['${item[0]}']}}`;
      searchAndReplaceFiles(targetDirectory, item[1], replaceText);
    });
}

function searchAndReplaceFiles(directory, searchText, replaceText) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      searchAndReplaceFiles(filePath, searchText, replaceText);
    } else if (stats.isFile() && file.endsWith(".vue")) {
      let content = fs.readFileSync(filePath, "utf-8");

      const updatedContent = replaceTextInVueTemplate(
        content,
        searchText,
        replaceText
      );

      // Log the file name if text was replaced
      if (updatedContent !== content) {
        console.log(`Replaced text in file: ${filePath}`);
      }

      fs.writeFileSync(filePath, updatedContent, "utf-8");
    }
  });
}
function replaceTextInVueTemplate(content, searchText, replaceText) {
  const regex = /<template lang="html">([\s\S]*?)<\/template>/;
  const matches = content.match(regex);

  if (matches) {
    const templateContent = matches[1];
    const updatedTemplateContent = templateContent.replace(
      new RegExp(searchText, "g"),
      replaceText
    );
    const updatedContent = content.replace(
      templateContent,
      updatedTemplateContent
    );
    return updatedContent;
  }

  return content;
}
const folderName = process.argv[2];

if (folderName) {
  console.log(`In folder: ${folderName}`);
  searchAndReplaceInFolder(folderName);
} else {
  console.error(
    "Please provide both search text and replace text as command line arguments."
  );
}
