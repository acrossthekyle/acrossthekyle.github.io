import { test, expect } from '@playwright/test';

test('words page loads', async ({ page }) => {
  await page.goto('/words');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `words`,
  });

  await expect(heading).toBeVisible();
});

test('words page has articles', async ({ page }) => {
  await page.goto('/words');

  const main = await page.getByRole('main');

  const articles = await main.getByRole('article');
  const count = await articles.count();

  await expect(count).toBeGreaterThanOrEqual(1);

  const fromMoreToLess = await page.getByRole('heading', {
    level: 2,
    name: 'from more to less',
  });

  await expect(fromMoreToLess).toBeVisible();
  await expect(fromMoreToLess).toContainText('January 17th, 2026 • 1 min read');

  const darkMatterOnAppleTvPlus = await page.getByRole('heading', {
    level: 2,
    name: 'dark matter on appletv+',
  });

  await expect(darkMatterOnAppleTvPlus).toBeVisible();
  await expect(darkMatterOnAppleTvPlus).toContainText('March 10th, 2026 • 1 min read');
});
