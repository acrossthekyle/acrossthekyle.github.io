import { test, expect } from '@playwright/test';

import { capitalize, map } from 'lodash';

function mutateTag(tag: string | null) {
  if (tag === null) {
    return '';
  }

  let divider = ' ';

  if (tag.includes('-')) {
    divider = '-';
  }

  return map(tag.split(divider), capitalize).join(divider);
}

test('thru-hike tag', async ({ page }) => {
  await page.goto('/tags/thru-hike');

  const masonry = page.locator('#masonry');

  const heading = await page.getByRole('heading', { level: 1 });
  const text = await heading.textContent();

  const figure = await masonry.getByRole('figure');
  const count = await figure.count();

  await expect(page).toHaveTitle('Across The Kyle —— Tags | Thru-Hike');
  await expect(text).toEqual('Thru-Hike');
  await expect(count).toBeGreaterThanOrEqual(8);
});

test('day hike tag', async ({ page }) => {
  await page.goto('/tags/day%20hike');

  const masonry = await page.locator('#masonry');

  const heading = await page.getByRole('heading', { level: 1 });
  const text = await heading.textContent();

  const figure = await masonry.getByRole('figure');
  const count = await figure.count();

  await expect(page).toHaveTitle('Across The Kyle —— Tags | Day Hike');
  await expect(text).toEqual('Day Hike');
  await expect(count).toBeGreaterThanOrEqual(9);
});
