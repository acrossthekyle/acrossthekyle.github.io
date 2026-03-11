import { test, expect } from '@playwright/test';

test('books page loads', async ({ page }) => {
  await page.goto('/books');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `Books`,
  });

  await expect(heading).toBeVisible();
});

test(`books page has some books`, async ({ page }) => {
  await page.goto('/books');

  const main = await page.getByRole('main');

  const items = await main.locator('ul > li');

  await expect(items).toContainText([
    'All the Light We Cannot See',
    'The Hobbit',
    'Project Hail Mary',
    'Wanderers',
  ]);
});
