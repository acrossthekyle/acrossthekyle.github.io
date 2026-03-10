/* eslint-disable */
// @ts-nocheck

import fs from 'fs';
import path from 'path';

import { write } from './utils';

const input = path.join(process.cwd(), './repository/resume');

export async function go() {
  const jobs = fs.readdirSync(`${input}/jobs`).filter((directory) => {
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
        path.join(input, `jobs/${folder}/data.json`),
        'utf8',
      ));

      data.history.push(json);
    }),
  );

  const education = JSON.parse(fs.readFileSync(
    path.join(input, 'education.json'),
    'utf8',
  ));

  data.education = education;

  const skills = JSON.parse(fs.readFileSync(
    path.join(input, 'skills.json'),
    'utf8',
  ));

  data.skills = skills;

  if (data.history.length) {
    const history = data.history.sort((a, b) => b.timestamp - a.timestamp);

    data.history = history;

    write('resume.js', data);
  }
}
