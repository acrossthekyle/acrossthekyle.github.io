import { test, expect } from '@playwright/test';

test('about page loads', async ({ page }) => {
  await page.goto('/about');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `About`,
  });

  await expect(heading).toBeVisible();
});

['places', 'words', 'resume'].forEach((name) => {
  test(`about page navigates to ${name}`, async ({ page }) => {
    await page.goto('/about');

    const main = await page.getByRole('main');

    await main.getByRole('link', { name }).click();

    const heading = await page.getByRole('heading', {
      level: 1,
      name,
    });

    await expect(heading).toBeVisible();
  });
});
