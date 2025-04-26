import { test, expect } from '@playwright/test';

test('post', async ({ page }) => {
  await page.goto('/post/the-great-hike-of-corsica');

  const main = await page.getByRole('main');

  const navigation = await main.locator('#navigation');

  const categoryOne = await main.getByRole('link', {
    name: 'thru-hike',
  });
  const categoryTwo = await main.getByRole('link', {
    name: 'europe',
  });
  const categoryThree = await main.getByRole('link', {
    name: 'corsica',
  });

  const heading = await main.getByRole('heading', {
    level: 1,
    name: "Europe's Toughest Trek: The Great Hike of Corsica",
  });

  const date = await main.locator('time').textContent();

  const distance = await main.getByRole('heading', {
    level: 2,
    name: /129.98 mi/i,
  });

  const gain = await main.getByRole('heading', {
    level: 2,
    name: /44,475 ft/i,
  });

  const loss = await main.getByRole('heading', {
    level: 2,
    name: /44,549 ft/i,
  });

  const days = await main.getByRole('heading', {
    level: 2,
    name: /13 days/i,
  });

  const olderPost = await navigation.locator('span').nth(0).textContent();
  const newerPost = await navigation.locator('span').nth(1).textContent();

  await expect(categoryOne).toBeVisible();
  await expect(categoryTwo).toBeVisible();
  await expect(categoryThree).toBeVisible();
  await expect(heading).toBeVisible();
  await expect(date).toEqual('June 21st, 2023');
  await expect(distance).toBeVisible();
  await expect(gain).toBeVisible();
  await expect(loss).toBeVisible();
  await expect(days).toBeVisible();
  await expect(olderPost.trim()).toEqual('Older Post');
  await expect(newerPost.trim()).toEqual('Newer Post');

  await navigation.getByRole('link').nth(1).click();

  const navigationLinks = navigation.getByRole('link');

  await expect(navigationLinks).toHaveCount(1);

  await navigationLinks.click();

  await main.getByRole('link', { name: 'View' }).nth(1).click();
});
