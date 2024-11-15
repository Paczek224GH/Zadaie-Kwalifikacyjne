import OpenAI from 'openai';
import { OPENAI_CONFIG } from './config.js';

const openai = new OpenAI(OPENAI_CONFIG);

export async function processArticleWithOpenAI(articleText) {
  const prompt = `
    Convert the following article text into HTML using only semantic HTML5 tags. The generated HTML must meet these requirements:

    - Encode the text in utf-8.
    - Use only semantic HTML5 tags such as <article>, <section>, <h1>-<h6>, <p>.
    - Do not include: <html>, <head>, <body>, DOCTYPE, CSS, or JavaScript.
    - Ensure that article <footer> is placed within <div class="container">, which wraps around the entire article content.
    - Add image placeholders with <img> tags that have src="image_placeholder.jpg" and descriptive alt attributes.
    - Add captions under each image using the <figcaption> tag.

    Please return HTML that includes only the article's structure and content, following these guidelines.

    Article to process:
    ${articleText}
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ]
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Error processing article: ${error}`);
    return null;
  }
}