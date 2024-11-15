import { readTextFile, saveFile } from './src/fileUtils.js';
import { processArticleWithOpenAI } from './src/openaiService.js';
import { generateEmptyTemplate, generateCSS, generateJS } from './src/templates.js';
import {
  INPUT_FILE_PATH,
  ARTICLE_FILE_PATH,
  TEMPLATE_FILE_PATH,
  PREVIEW_FILE_PATH,
  CSS_FILE_PATH,
  JS_FILE_PATH
} from './src/config.js';

async function main() {
  try {
    const articleText = await readTextFile(INPUT_FILE_PATH);
    console.log("Article loaded.");

    const processedArticle = await processArticleWithOpenAI(articleText);
    if (!processedArticle) {
      console.log("Failed to process the article.");
      return;
    }

    console.log("HTML article generated.");
    await saveFile(processedArticle, ARTICLE_FILE_PATH);
    console.log('Article has been processed and saved as artykul.html');

    const emptyTemplate = generateEmptyTemplate();
    await saveFile(emptyTemplate, TEMPLATE_FILE_PATH);
    console.log('HTML template has been saved as szablon.html');

    const cssContent = generateCSS();
    await saveFile(cssContent, CSS_FILE_PATH);
    console.log('CSS file has been saved as styles.css');

    const jsContent = generateJS();
    await saveFile(jsContent, JS_FILE_PATH);
    console.log('JavaScript file has been saved as script.js');

    const fullPreview = emptyTemplate.replace('<!-- Tutaj wklej treść artykułu -->', processedArticle);
    await saveFile(fullPreview, PREVIEW_FILE_PATH);
    console.log('Article preview has been saved as podglad.html');

  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

main();