import { test, expect } from '@playwright/test';

test('places page loads', async ({ page }) => {
  await page.goto('/places');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `places`,
  });

  await expect(heading).toBeVisible();
});

[
  'africa destination (2)',
  'asia thru-hike (1), destination (1)',
  'europe thru-hike (6), destination (2)',
  'north america overnight trek (2), section hike (1), destination (1), summit (1)',
  'south america thru-hike (1), destination (4)',
].forEach((name) => {
  test(`places page has ${name} category`, async ({ page }) => {
    await page.goto('/places');

    const heading = await page.getByRole('heading', {
      level: 2,
      name,
    });

    await expect(heading).toBeVisible();
  });
});

test('places page navigates to places details page', async ({ page }) => {
  await page.goto('/places');

  const main = await page.getByRole('main');

  await main.getByRole('link', { name: 'annapurna circuit' }).click();

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'Annapurna Circuit Thru-hike • Nepal • 2019',
  });

  await expect(heading).toBeVisible();
});

test('places details page has stats', async ({ page }) => {
  await page.goto('/places/annapurna-circuit-basecamp');

  const main = await page.getByRole('main');

  const list = await main.getByRole('list', {
    name: 'stats',
  });
  const items = await list.getByRole('listitem');

  const when = await items.filter({ hasText: 'when' });

  await expect(when).toBeVisible();
  await expect(when).toContainText('Oct 19th to Nov 6th, 2019');

  const duration = await items.filter({ hasText: 'duration' });

  await expect(duration).toBeVisible();
  await expect(duration).toContainText('18 days');

  const distance = await items.filter({ hasText: 'distance' });

  await expect(distance).toBeVisible();
  await expect(distance).toContainText('193 miles');

  const peak = await items.filter({ hasText: 'max altitude' });

  await expect(peak).toBeVisible();
  await expect(peak).toContainText('17,767 ft');

  const gain = await items.filter({ hasText: 'Elevation gain' });

  await expect(gain).toBeVisible();
  await expect(gain).toContainText('54,267 ft');

  const loss = await items.filter({ hasText: 'Elevation loss' });

  await expect(loss).toBeVisible();
  await expect(loss).toContainText('51,090 ft');
});

test('places details page has gallery', async ({ page }) => {
  await page.goto('/places/annapurna-circuit-basecamp');

  const main = await page.getByRole('main');
  const gallery = await main.locator(`ul[aria-labelledby='images']`);

  await expect(gallery).toBeVisible();

  const items = await gallery.getByRole('listitem');
  const count = await items.count();

  await expect(count).toBe(6);

  const all = await main.getByRole('button', {
    name: `View all images`,
  });

  await all.click();

  const updatedCount = await items.count();

  await expect(updatedCount).toBe(18);

  const less = await main.getByRole('button', {
    name: `View less`,
  });

  await less.click();

  const revertedCount = await items.count();

  await expect(revertedCount).toBe(6);

  const link = await main.locator('a[href*="/images/places/annapurna-circuit-basecamp/01"]');

  await link.click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Annapurna Circuit Image 01/18',
  });

  await expect(heading).toBeVisible();
});

test('places details page has stages/sections/summits', async ({ page }) => {
  await page.goto('/places/annapurna-circuit-basecamp');

  const main = await page.getByRole('main');
  const list = await main.locator(`ul[aria-labelledby='gpx']`);

  await expect(list).toBeVisible();

  const items = await list.getByRole('listitem');
  const count = await items.count();

  await expect(count).toBe(18);
});

test('places details page navigates to gpx details', async ({ page }) => {
  await page.goto('/places/annapurna-circuit-basecamp');

  const main = await page.getByRole('main');

  const link = await main.getByRole('link', {
    name: `Stage 01`,
  });

  await link.click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Annapurna Circuit Stage 01/18',
  });

  await expect(heading).toBeVisible();
});
