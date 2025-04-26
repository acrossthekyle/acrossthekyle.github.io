import { test, expect } from '@playwright/test';

test('category', async ({ page }) => {
  await page.goto('/categories/thru-hike');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'category: thru-hike',
  });

  await expect(heading).toBeVisible();

  const masonry = page.locator('#masonry');

  const count = await masonry.getByRole('figure').count();

  await expect(count).toBeGreaterThanOrEqual(8);
});
