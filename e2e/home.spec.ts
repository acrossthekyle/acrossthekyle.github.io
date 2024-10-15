import { test, expect } from '@playwright/test';

test('loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    `Kyle — Thru-hiker and Programmer based in Chicago`,
  );
});

test('goes to about from large avatar', async ({ page }) => {
  await page.goto('/');

  const main = await page.locator('main');
  const about = await main.locator('a[href*="/about"]').nth(1);

  await about.click();

  await expect(page).toHaveTitle(`Kyle — About`);
});

test('has posts', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');

  await expect(posts.getByRole('figure')).toHaveCount(9);
});

test('loads more posts', async ({ page }) => {
  await page.goto('/');
  const button = await page.getByRole('button', { name: 'load more' });
  const posts = page.locator('#masonry');

  button.click();

  await expect(posts.getByRole('figure')).toHaveCount(18);

  button.click();

  await expect(posts.getByRole('figure')).toHaveCount(19);
  await expect(button).toBeHidden();
});

test('posts have information', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const figcaptionTags = await figcaption.locator('a[href*="tags/"]').count();

  await expect(figure.locator('figcaption')).toHaveCount(1);
  await expect(figcaptionTags).toBeGreaterThanOrEqual(1);
  await expect(figcaption.getByRole('heading', { level: 2 })).toHaveCount(1);
  await expect(figcaption.getByRole('paragraph')).toHaveCount(1);
  await expect(figcaption.getByText('kyle gilbert')).toHaveCount(1);
  await expect(figcaption.getByRole('time')).toHaveCount(1);
});

test('post image link goes to post', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const headingText = await heading.textContent();
  const anchor = await figure.locator('a[href*="posts/"]').nth(0);

  anchor.click();

  const title = new RegExp(`Kyle — Travels | ${headingText}`.trim());

  await expect(page).toHaveTitle(title);
});

test('post tag goes to tags list', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const figcaptionTag = await figcaption.locator('a[href*="tags/"]').nth(0);
  const tagText = await figcaptionTag.textContent();

  figcaptionTag.click();

  await expect(page).toHaveTitle(
    `Kyle — Posts | Tagged "${tagText.toLowerCase()}"`,
  );
});

test('post heading link goes to post', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const headingText = await heading.textContent();
  const anchor = await heading.locator('a[href*="posts/"]').nth(0);

  anchor.click();

  const title = new RegExp(`Kyle — Travels | ${headingText}`.trim());

  await expect(page).toHaveTitle(title);
});

test('post caption author navigates to about', async ({ page }) => {
  await page.goto('/');
  const posts = page.locator('#masonry');
  const figure = await posts.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const author = await figcaption.locator('a[href*="about"]').nth(0);

  author.click();

  await expect(page).toHaveTitle(`Kyle — About`);
});
