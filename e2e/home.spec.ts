import { test, expect } from '@playwright/test';

test('loads', async ({ page }) => {
  await page.goto('/');

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'kyle gilbert',
  });

  await expect(h1).toBeVisible();
});

// test('goes to me from large avatar', async ({ page }) => {
//   await page.goto('/');

//   const main = await page.locator('main');
//   const me = await main.locator('a[href*="/me"]').nth(1);

//   await me.click();

//   await expect(page).toHaveTitle(`Across The Kyle —— About`);
// });

// test('has at least nine posts on initial load', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');

//   await expect(posts.getByRole('figure')).toHaveCount(9);
// });

// test('loads more posts', async ({ page }) => {
//   await page.goto('/');
//   const button = await page.getByRole('button', { name: 'load more' });
//   const posts = page.locator('#masonry');

//   button.click();

//   await expect(posts.getByRole('figure')).toHaveCount(18);

//   button.click();

//   await expect(posts.getByRole('figure')).toHaveCount(19);
//   await expect(button).toBeHidden();
// });

// test('posts have information', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');
//   const figure = await posts.getByRole('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const figcaptionTags = await figcaption.locator('a[href*="tags/"]').count();

//   await expect(figure.locator('figcaption')).toHaveCount(1);
//   await expect(figcaptionTags).toBeGreaterThanOrEqual(1);
//   await expect(figcaption.getByRole('heading', { level: 2 })).toHaveCount(1);
//   await expect(figcaption.getByRole('paragraph')).toHaveCount(1);
//   await expect(figcaption.getByText('kyle gilbert')).toHaveCount(1);
//   await expect(figcaption.getByRole('time')).toHaveCount(1);
// });

// test('post image link goes to post', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');
//   const figure = await posts.getByRole('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const heading = await figcaption.getByRole('heading', { level: 2 });
//   const post = await heading.textContent();
//   const anchor = await figure.locator('a[href*="posts/"]').nth(0);

//   anchor.click();

//   const title = new RegExp(`Across The Kyle —— Travels | ${post}`.trim());

//   await expect(page).toHaveTitle(title);
// });

// test('post tag goes to tags list', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');
//   const figure = await posts.getByRole('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const figcaptionTag = await figcaption.locator('a[href*="tags/"]').nth(0);

//   figcaptionTag.click();

//   await expect(page).toHaveTitle(/Tags/);
// });

// test('post heading link goes to post', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');
//   const figure = await posts.getByRole('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const heading = await figcaption.getByRole('heading', { level: 2 });
//   const post = await heading.textContent();
//   const anchor = await heading.locator('a[href*="posts/"]').nth(0);

//   anchor.click();

//   const title = new RegExp(`Across The Kyle —— Travels | ${post}`.trim());

//   await expect(page).toHaveTitle(title);
// });

// test('post caption author navigates to me', async ({ page }) => {
//   await page.goto('/');
//   const posts = page.locator('#masonry');
//   const figure = await posts.getByRole('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const author = await figcaption.locator('a[href*="me"]').nth(0);

//   author.click();

//   await expect(page).toHaveTitle(`Across The Kyle —— About`);
// });

// test('footer tag goes to tags page', async ({ page }) => {
//   await page.goto('/');

//   const footer = await page.locator('footer');
//   const tag = await footer.locator('a[href*="tags/"]').nth(0);

//   tag.click();

//   await expect(page).toHaveTitle(/Tags/);
// });

// test('footer has three recent posts', async ({ page }) => {
//   await page.goto('/');

//   const footer = await page.locator('footer');

//   await expect(footer.locator('figure')).toHaveCount(3);
// });

// test('footer recent post image link navigates to post', async ({ page }) => {
//   await page.goto('/');

//   const footer = await page.locator('footer');
//   const figure = await footer.locator('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const heading = await figcaption.getByRole('heading', { level: 3 });
//   const post = await heading.textContent();
//   const anchor = await figure.locator('a[href*="posts/"]').nth(0);

//   await anchor.click();

//   const title = new RegExp(`Across The Kyle —— Travels | ${post}`.trim());

//   await expect(page).toHaveTitle(title);
// });

// test('footer recent post heading link navigates to post', async ({ page }) => {
//   await page.goto('/');

//   const footer = await page.locator('footer');
//   const figure = await footer.locator('figure').nth(0);
//   const figcaption = await figure.locator('figcaption');
//   const heading = await figcaption.getByRole('heading', { level: 3 });
//   const post = await heading.textContent();
//   const anchor = await heading.locator('a[href*="posts/"]');

//   await anchor.click();

//   const title = new RegExp(`Across The Kyle —— Travels | ${post}`.trim());

//   await expect(page).toHaveTitle(title);
// });
