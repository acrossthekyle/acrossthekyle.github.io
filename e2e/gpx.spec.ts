import { test, expect } from '@playwright/test';

test('gpx page loads', async ({ page }) => {
  await page.goto('/gpx/annapurna-circuit-basecamp/01');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Annapurna Circuit Stage 01/18',
  });

  await expect(heading).toBeVisible();

  const list = await main.getByRole('list', {
    name: 'stats',
  });
  const items = await list.getByRole('listitem');

  const beginning = await items.filter({ hasText: 'start' }).nth(0);

  await expect(beginning).toBeVisible();
  await expect(beginning).toContainText('Besishar');

  const ending = await items.filter({ hasText: 'end' }).nth(0);

  await expect(ending).toBeVisible();
  await expect(ending).toContainText('Bhulbhule');

  const distance = await items.filter({ hasText: 'distance' });

  await expect(distance).toBeVisible();
  await expect(distance).toContainText('9 miles');

  const time = await items.filter({ hasText: 'time' });

  await expect(time).toBeVisible();
  await expect(time).toContainText('5 hours');

  const peak = await items.filter({ hasText: 'max altitude' });

  await expect(peak).toBeVisible();
  await expect(peak).toContainText('3,472 ft');

  const start = await items.filter({ hasText: 'altitude start' });

  await expect(start).toBeVisible();
  await expect(start).toContainText('2,551 ft');

  const end = await items.filter({ hasText: 'altitude end' });

  await expect(end).toBeVisible();
  await expect(end).toContainText('2,699 ft');

  const gain = await items.filter({ hasText: 'elevation gain' });

  await expect(gain).toBeVisible();
  await expect(gain).toContainText('1,679 ft');

  const loss = await items.filter({ hasText: 'elevation loss' });

  await expect(loss).toBeVisible();
  await expect(loss).toContainText('1,493 ft');

  const elevation = await main.getByRole('heading', {
    level: 2,
    name: 'elevation',
  });

  await expect(elevation).toBeVisible();
});

test('gpx page has next/previous', async ({ page }) => {
  await page.goto('/gpx/annapurna-circuit-basecamp/01');

  const main = await page.getByRole('main');

  const noPrevious = await main.getByRole('link', {
    name: `previous`,
  });

  await expect(noPrevious).not.toBeVisible();

  const next = await main.getByRole('link', {
    name: `next`,
  });

  await next.click();

  await expect(page).toHaveURL('/gpx/annapurna-circuit-basecamp/02');

  const previous = await main.getByRole('link', {
    name: `previous`,
  });

  await expect(previous).toBeVisible();

  await previous.click();

  await expect(page).toHaveURL('/gpx/annapurna-circuit-basecamp/01');

  await page.goto('/gpx/annapurna-circuit-basecamp/18');

  const noNext = await main.getByRole('link', {
    name: `next`,
  });

  await expect(noNext).not.toBeVisible();
});
