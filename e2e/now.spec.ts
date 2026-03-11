import { test, expect } from '@playwright/test';

test('now page loads', async ({ page }) => {
  await page.goto('/now');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `now`,
  });

  await expect(heading).toBeVisible();
});
