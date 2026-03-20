import { test, expect } from '@playwright/test';

test('images page loads place', async ({ page }) => {
  await page.goto('/images/places/annapurna-circuit-basecamp/01');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Annapurna Circuit Image 01/18',
  });

  await expect(heading).toBeVisible();
  await expect(heading).toContainText('Besishar to Bhulbhule • Lamjung District, Nepal');

  const list = await main.getByRole('list', {
    name: 'stats',
  });
  const items = await list.getByRole('listitem');

  const camera = await items.filter({ hasText: 'camera' });

  await expect(camera).toBeVisible();
  await expect(camera).toContainText('iPhone X');

  const iso = await items.filter({ hasText: 'iso' });

  await expect(iso).toBeVisible();
  await expect(iso).toContainText('20');

  const focal = await items.filter({ hasText: 'focal length' });

  await expect(focal).toBeVisible();
  await expect(focal).toContainText('28 mm');

  const exposure = await items.filter({ hasText: 'exposure' });

  await expect(exposure).toBeVisible();
  await expect(exposure).toContainText('0.0 ev');

  const fNumber = await items.filter({ hasText: 'f-number' });

  await expect(fNumber).toBeVisible();
  await expect(fNumber).toContainText('f/1.80');

  const aperture = await items.filter({ hasText: 'Aperture' });

  await expect(aperture).toBeVisible();
  await expect(aperture).toContainText('1/6960 s');
});

test('images page place has next/previous', async ({ page }) => {
  await page.goto('/images/places/annapurna-circuit-basecamp/01');

  const main = await page.getByRole('main');

  const noPrevious = await main.getByRole('link', {
    name: `previous`,
  });

  await expect(noPrevious).not.toBeVisible();

  const next = await main.getByRole('link', {
    name: `next`,
  });

  await next.click();

  await expect(page).toHaveURL('/images/places/annapurna-circuit-basecamp/02');

  const previous = await main.getByRole('link', {
    name: `previous`,
  });

  await expect(previous).toBeVisible();

  await previous.click();

  await expect(page).toHaveURL('/images/places/annapurna-circuit-basecamp/01');

  await page.goto('/images/places/annapurna-circuit-basecamp/18');

  const noNext = await main.getByRole('link', {
    name: `next`,
  });

  await expect(noNext).not.toBeVisible();
});
