import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('loads', async ({ page }) => {
  await page.goto('/shop');

  await expect(page).toHaveTitle(`Kyle — Shop Prints`);
});

test('has items', async ({ page }) => {
  await page.goto('/shop');

  await expect(
    page.getByRole('heading', { level: 2, name: /Print/ }),
  ).toHaveCount(9);
});

test('goes to details', async ({ page }) => {
  await page.goto('/shop');

  const anchor = await page.locator('a[href*="/shop/prints/"]').nth(1);
  const anchorText = await anchor.textContent();

  await anchor.click();

  await expect(page).toHaveTitle(`Kyle — Shop | ${anchorText}`);
});

test('alert before choosing frame', async ({ page }) => {
  await page.goto('/shop');

  const anchor = await page.locator('a[href*="/shop/prints/"]').nth(1);

  await anchor.click();

  const purchase = await page.getByRole('button', { name: /Purchase/ });

  await purchase.click();

  await expect(
    page.getByText('Please choose a style before continuing'),
  ).toBeVisible();
});

test('dismiss alert', async ({ page }) => {
  await page.goto('/shop');

  const anchor = await page.locator('a[href*="/shop/prints/"]').nth(1);

  await anchor.click();

  const purchase = await page.getByRole('button', { name: /Purchase/ });

  await purchase.click();

  await page.getByText('Please choose a style before continuing').isVisible();
  await page.getByRole('button', { name: /OK/ }).click();

  await expect(
    page.getByText('Please choose a style before continuing'),
  ).not.toBeVisible();
});

test('choosing a frame', async ({ page }) => {
  await page.goto('/shop');

  const anchor = await page.locator('a[href*="/shop/prints/"]').nth(1);

  await anchor.click();

  const button = await page.locator(`button[aria-label="Frameless"]`);

  await button.click();

  const purchase = await page
    .getByRole('link', { name: /Purchase/ })
    .getAttribute('href');

  await expect(purchase).toContain('buy.stripe.com');
});
