// @ts-nocheck

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
import { parse } from 'date-fns';

function getPosts() {
  const directory = path.join(process.cwd(), './src/posts');

  const folders = fs.readdirSync(directory).filter((folder) => {
    if (folder !== '.DS_Store') {
      return folder;
    }
  });

  const posts = folders
    .map((folder) => {
      const stages = path.join(directory, `${folder}/stages`);

      const fileContents = fs.readFileSync(
        path.join(directory, `${folder}/index.mdx`),
        'utf8',
      );

      const { data } = matter(fileContents);

      let output = {
        ...data,
        tags: data.tags.split(','),
      };

      if (fs.existsSync(stages)) {
        let stageData = [];

        const stageFiles = fs.readdirSync(stages);

        stageFiles.map((stageFile) => {
          const stageContents = fs.readFileSync(
            path.join(stages, stageFile),
            'utf8',
          );

          const { data } = matter(stageContents);

          stageData.push(data);
        });

        output = {
          ...output,
          stages: stageData,
        };
      }

      return output;
    })
    .sort(
      (a, b) =>
        parse(b.date, 'MMMM do, yyyy', new Date()) -
        parse(a.date, 'MMMM do, yyyy', new Date()),
    );

  return JSON.stringify(posts);
}

const fileContents = `export const posts = ${getPosts()}`;

try {
  fs.readdirSync('./src/cache');
} catch (e) {
  fs.mkdirSync('./src/cache');
}

fs.writeFile('./src/cache/posts.js', fileContents, function (error) {
  if (error) {
    return console.log(error);
  }

  console.log('Posts cached.');
});
