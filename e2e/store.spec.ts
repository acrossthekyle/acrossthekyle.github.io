import { test, expect } from '@playwright/test';

async function addToCart(page, main, index) {
  const figure = await main.getByRole('figure').nth(index);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const anchor = await heading.locator('a[href*="store/"]').nth(0);

  await anchor.click();

  const button = await main.getByRole('button', { name: 'ADD TO CART' });

  await button.click();
}

test('loads', async ({ page }) => {
  await page.goto('/store');

  await expect(page).toHaveTitle(`Across The Kyle —— Store`);
});

test('has at least nine items', async ({ page }) => {
  await page.goto('/store');

  const figure = await page.getByRole('figure');
  const count = await figure.count();

  await expect(count).toBeGreaterThanOrEqual(9);
});

test('empty cart goes back to store', async ({ page }) => {
  await page.goto('/store/checkout/cart');

  await expect(page).toHaveTitle(`Across The Kyle —— Store | Cart`);

  const main = await page.locator('main');
  const heading = await main.getByRole('heading', { level: 2 });
  const text = await heading.textContent();

  await expect(text).toEqual(`No items in cart`);

  const link = await main.getByRole('link', { name: 'Back to Store' });

  link.click();

  await expect(page).toHaveTitle(`Across The Kyle —— Store`);
});

test('goes to details', async ({ page }) => {
  await page.goto('/store');

  const main = await page.locator('main');
  const figure = await main.getByRole('figure').nth(0);
  const figcaption = await figure.locator('figcaption');
  const heading = await figcaption.getByRole('heading', { level: 2 });
  const anchor = await heading.locator('a[href*="store/"]').nth(0);
  const text = await anchor.textContent();

  await anchor.click();

  await expect(page).toHaveTitle(`Across The Kyle —— Store | ${text}`);
});

test('add to cart', async ({ page }) => {
  await page.goto('/store');

  const main = await page.locator('main');

  await addToCart(page, main, 0);

  const link = await main.getByRole('link', { name: 'Checkout' });

  await expect(link).not.toBeHidden();

  const items = page.locator('#items');

  const name = await items.getByRole('heading', { level: 2 }).nth(0);
  const text = await name.textContent();

  await expect(text).toEqual('Stone Gateway');

  const list = items.locator('ul > li');

  const size = await list.nth(0).textContent();
  const frame = await list.nth(1).textContent();
  const color = await list.nth(2).textContent();
  const mat = await list.nth(3).textContent();

  expect(size).toEqual('Size: 18" x 24"');
  expect(frame).toEqual('Frame: Yes');
  expect(color).toEqual('Color: White');
  expect(mat).toEqual('Mat: Yes');
});

test('remove cart item', async ({ page }) => {
  await page.goto('/store');

  const main = await page.locator('main');

  await addToCart(page, main, 0);

  const items = page.locator('#items');

  const remove = await items.getByRole('button', { title: 'Remove item' }).nth(0);

  await remove.click();

  const checkout = await main.getByRole('link', { name: 'Checkout' });
  const back = await main.getByRole('link', { name: 'Back to Store' });

  await expect(checkout).toBeHidden();
  await expect(back).not.toBeHidden();
});

test('increase cart item quantity', async ({ page }) => {
  await page.goto('/store');

  const main = await page.locator('main');

  await addToCart(page, main, 0);

  const items = page.locator('#items');

  const current = await items.getByRole('span', { title: 'Quantity of 1' }).nth(0);

  await expect(current).toBeDefined();

  const increase = await items.getByRole('button', { title: 'Increase quantity' }).nth(0);

  await increase.click();

  const increased = await items.getByRole('span', { title: 'Quantity of 2' }).nth(0);

  await expect(increased).toBeDefined();
});

test('decrease cart item quantity', async ({ page }) => {
  await page.goto('/store');

  const main = await page.locator('main');

  await addToCart(page, main, 0);

  const items = page.locator('#items');

  const current = await items.getByRole('span', { title: 'Quantity of 1' }).nth(0);

  await expect(current).toBeDefined();

  const decrease = await items.getByRole('button', { title: 'Decrease quantity' }).nth(0);

  await decrease.click();

  const checkout = await main.getByRole('link', { name: 'Checkout' });
  const back = await main.getByRole('link', { name: 'Back to Store' });

  await expect(checkout).toBeHidden();
  await expect(back).not.toBeHidden();
});

test('multiple cart items', async ({ browserName, page }) => {
  test.skip(browserName !== 'chromium', 'This feature is only relevant in Chrome');

  await page.goto('/store');

  const main = await page.locator('main');

  await addToCart(page, main, 0);

  await page.goto('/store');
  
  await addToCart(page, main, 1);

  const header = await page.locator('header');
  const cart = await header.locator('a[href*="store/checkout/cart"]');

  await cart.click();

  const items = await page.locator('#items');

  const headings = await items.getByRole('heading', { level: 2 });
  const count = await headings.count();

  expect(count).toBe(2);
});
