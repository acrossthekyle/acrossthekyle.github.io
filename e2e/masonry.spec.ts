import { test, expect } from '@playwright/test';

test('masonry renders items', async ({ page }) => {
  await page.goto('/');

  const masonry = await page.locator('#masonry');
  const figure = await masonry.getByRole('figure');

  const count = await figure.count();

  await expect(count).toBeGreaterThanOrEqual(9);
});

test('masonry renders more items', async ({ page }) => {
  await page.goto('/');

  const button = await page.getByRole('button', { name: 'load more' });

  const masonry = page.locator('#masonry');

  await button.click();

  await expect(masonry.getByRole('figure')).toHaveCount(18);

  await button.click();

  await expect(masonry.getByRole('figure')).toHaveCount(19);

  await expect(button).toBeHidden();
});
