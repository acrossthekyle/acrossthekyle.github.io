import { test, expect } from '@playwright/test';

test('footer tag goes to tags page', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');
  const tag = await footer.locator('a[href*="tags/"]').nth(0);
  const tagText = await tag.textContent();

  tag.click();

  await expect(page).toHaveTitle(
    `Kyle — Posts | Tagged "${tagText.toLowerCase()}"`,
  );
});

test('footer has three recent posts', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');

  await expect(footer.locator('figure')).toHaveCount(3);
});

test('footer recent post image link navigates to post', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');
  const figure = await footer.locator('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const headingText = await heading.textContent();
  const anchor = await figure.locator('a[href*="posts/"]').nth(0);

  await anchor.click();

  const title = new RegExp(`Kyle — Travels | ${headingText}`.trim());

  await expect(page).toHaveTitle(title);
});

test('footer recent post heading link navigates to post', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');
  const figure = await footer.locator('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const headingText = await heading.textContent();
  const anchor = await heading.locator('a[href*="posts/"]');

  await anchor.click();

  const title = new RegExp(`Kyle — Travels | ${headingText}`.trim());

  await expect(page).toHaveTitle(title);
});
