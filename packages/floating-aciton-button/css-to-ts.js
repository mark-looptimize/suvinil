/* eslint-disable no-undef */
import * as fs from 'fs';

for (let i = 2; i < process.argv.length; i++) {
  try {
    const filePath = process.argv[i];
    const content = fs.readFileSync(filePath);
    fs.writeFileSync(`${filePath}.ts`, `
 import {css} from 'lit';
 export const styles = css\`${content.toString('utf8')}\`;
 `);

  } catch (error) {
    console.error(error);
  }
}