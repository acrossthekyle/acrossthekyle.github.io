import { test, expect } from '@playwright/test';

test('photos page loads', async ({ page }) => {
  await page.goto('/photos');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Snapshots',
  });

  await expect(heading).toBeVisible();
});

test('photos page has details', async ({ page }) => {
  await page.goto('/photos');

  const main = await page.getByRole('main');

  const link = await main.locator('a[href*="/images/photos"]').nth(0);

  await link.click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'Snapshot',
  });

  await expect(heading).toBeVisible();
});
