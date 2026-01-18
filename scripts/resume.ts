/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

const repository = path.join(process.cwd(), './repository/resume');
const output = path.join(process.cwd(), './src/db');

async function createDirectory(destination) {
  try {
    await fs.readdirSync(destination);
  } catch (e) {
    await fs.mkdirSync(destination);
  }
}

async function writeFile(destination, filename, content, silent = false) {
  createDirectory(destination);

  await fs.writeFile(`${destination}/${filename}`, content, function (error) {
    if (error) {
      return console.log(error);
    }

    if (!silent) {
      console.log(`wrote ${destination}/${filename}`);
    }
  });
}

async function writeData(destination, data) {
  const json = `const data = ${JSON.stringify(data, null, 2)};\n\r\n\rexport default data;`;

  await writeFile(output, destination, json);
}

export async function go() {
  const jobs = fs.readdirSync(`${repository}/jobs`).filter((directory) => {
    if (directory !== '.DS_Store') {
      return directory;
    }
  });

  const data = {
    education: [],
    history: [],
    skills: [],
  };

  await Promise.all(
    jobs.map(async (folder) => {
      const json = JSON.parse(fs.readFileSync(
        path.join(repository, `jobs/${folder}/data.json`),
        'utf8',
      ));

      data.history.push(json);
    }),
  );

  const education = JSON.parse(fs.readFileSync(
    path.join(repository, 'education.json'),
    'utf8',
  ));

  data.education = education;

  const skills = JSON.parse(fs.readFileSync(
    path.join(repository, 'skills.json'),
    'utf8',
  ));

  data.skills = skills;

  if (data.history.length) {
    const history = data.history.sort((a, b) => b.timestamp - a.timestamp);

    data.history = history;

    writeData('resume.js', data);
  }
}
