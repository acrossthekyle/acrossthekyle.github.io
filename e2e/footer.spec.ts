import { test, expect } from '@playwright/test';

test('footer categories', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');

  const category = await footer.getByRole('link', { name: 'thru-hike' });

  await category.click();

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'category: thru-hike',
  });

  await expect(heading).toBeVisible();
});

test('footer recent posts', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');

  await expect(footer.getByRole('figure')).toHaveCount(3);

  const figure = await footer.getByRole('figure').nth(0);

  await figure.getByRole('link').nth(0).click();

  await expect(page).toHaveURL(/post/i);
});

test('footer contact', async ({ page }) => {
  await page.goto('/');

  const footer = await page.locator('footer');

  await footer.locator('#email').fill('hello@acrossthekyle.com');
  await footer.locator('#message').fill('test message from playwright');

  await footer.getByRole('button', { name: 'submit' }).click();

  const success = await footer.getByText('Thanks for reaching out!');

  await expect(success).toBeVisible();
});
