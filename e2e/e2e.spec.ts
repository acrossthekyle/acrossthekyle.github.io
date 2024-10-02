import { test, expect } from '@playwright/test';

test('home page has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(
    /Kyle — Thru-hiker and Programmer based in Chicago/,
  );
});

test('header navigation to about page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveTitle(/Kyle — About/);
});

test('post page loads', async ({ page }) => {
  await page.goto('/posts/returning-to-the-alps');
  await expect(page).toHaveTitle(
    /Kyle — Travels | Returning to the Alpes and the Tour du Mont Blanc/,
  );
});

test('post stage page loads', async ({ page }) => {
  await page.goto('/posts/the-great-hike-of-corsica');
  await expect(page).toHaveTitle(
    /Kyle — Travels | Conquering the Great Hike of Corsica, France/,
  );
  await page.getByRole('link', { name: 'View' }).nth(0).click();
  await expect(page).toHaveTitle(
    /Kyle — Travels | Conquering the Great Hike of Corsica, France - Calenzana to Refuge D'Ortu Di U Piobbu/,
  );
});
