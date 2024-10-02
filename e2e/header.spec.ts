import { test, expect } from '@playwright/test';

test('header navigation to about', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'About' }).click();

  await expect(page).toHaveTitle(`Kyle — About`);
});

test('header search appears', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');
  const button = await header.getByRole('button');

  button.click();

  await expect(page.getByPlaceholder('Type to search...')).toBeVisible();
});

test('header search closes on close', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');
  const search = await header.getByRole('button');

  search.click();

  await expect(page.getByPlaceholder('Type to search...')).toBeVisible();

  const close = await page.getByTitle('Close search');

  close.click();

  await expect(page.getByPlaceholder('Type to search...')).not.toBeVisible();
});

test('header search query shows results', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');
  const search = await header.getByRole('button');

  search.click();

  const placeholder = await page.getByPlaceholder('Type to search...');

  await expect(placeholder).toBeVisible();

  await placeholder.fill('egypt');

  const heading = await page.getByRole('heading', {
    level: 4,
    name: 'Found: 1',
  });

  await expect(heading).toBeVisible();
});
