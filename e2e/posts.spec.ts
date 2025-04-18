import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');

  const posts = await page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const anchor = await figure.locator('a[href*="posts/"]').nth(0);

  await anchor.click();
});

test('post tag(s) navigates to tags list', async ({ page }) => {
  const main = await page.getByRole('main');
  const anchor = await main.locator('a[href*="tags/"]').nth(0);

  anchor.click();

  await expect(page).toHaveTitle(/Tags/);
});

test('post author navigates to me', async ({ page }) => {
  const main = await page.getByRole('main');
  const anchor = await main.locator('a[href*="me"]').nth(0);

  await anchor.click();

  await expect(page).toHaveTitle(`Across The Kyle —— About`);
});

test('post previous navigates to older post', async ({ page }) => {
  const main = await page.getByRole('main');
  const navigation = await main.locator('#navigation');
  const anchor = navigation.locator('a[href*="posts/"]').nth(0);
  const heading = await anchor.getByRole('heading');
  const text = await heading.textContent();

  await anchor.click();

  const title = new RegExp(`Across The Kyle —— Travels | ${text}`.trim());

  await expect(page).toHaveTitle(title);
});

test('post next navigates to newer post', async ({ page }) => {
  const main = await page.getByRole('main');

  const originalPostHeading = await main
    .getByRole('heading', { level: 1 })
    .textContent();

  const navigation = await main.locator('#navigation');
  const older = await navigation.locator('a[href*="posts/"]').nth(0);
  const headingText = await older.getByRole('heading').textContent();

  await older.click();

  await expect(main.getByRole('heading', { level: 1 })).toHaveText(headingText);

  const newer = await navigation.locator('a[href*="posts/"]').nth(1);
  const newerPostHeading = await newer.getByRole('heading').textContent();

  await newer.click();

  await expect(newerPostHeading).toEqual(originalPostHeading);
});
