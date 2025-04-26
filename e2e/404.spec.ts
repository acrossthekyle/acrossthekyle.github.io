import { test, expect } from '@playwright/test';

test('page not found', async ({ page }) => {
  await page.goto('/categories/does-not-exist');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: '404',
  });

  await expect(heading).toBeVisible();
});
