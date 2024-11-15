import fs from 'fs/promises';

export async function readTextFile(filePath) {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    throw error;
  }
}

export async function saveFile(content, filePath) {
  try {
    await fs.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    console.error(`Error saving file: ${error}`);
    throw error;
  }
}