import { test, expect } from '@playwright/test';

test('header logo navigates to root', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.locator('#logo').click();

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'kyle gilbert',
  });

  await expect(h1).toBeVisible();
});

test('header navigates to blog', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.getByRole('link', { name: 'blog' }).click();

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'kyle gilbert',
  });

  await expect(h1).toBeVisible();
});

test('header navigates to about', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.getByRole('link', { name: 'about' }).click();

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'about',
  });

  await expect(h1).toBeVisible();
});

test('header navigates to packs', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.getByRole('link', { name: 'packs' }).click();

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'packs',
  });

  await expect(h1).toBeVisible();
});

test('header navigates to store', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.getByRole('link', { name: 'store' }).click();

  const h1 = await page.getByRole('heading', {
    level: 1,
    name: 'store',
  });

  await expect(h1).toBeVisible();
});

test('header navigates to cart', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header.getByRole('link', { name: 'go to shopping cart' }).click();

  const heading = await page.getByRole('heading', {
    level: 2,
    name: 'no items in cart',
  });

  await expect(heading).toBeVisible();
});

test('header toggles theme', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  const html = await page.locator('[data-theme]');

  const current = await html.getAttribute('data-theme');

  await expect(current).toEqual('light');

  await header
    .getByRole('button', {
      name: 'light',
    })
    .click();

  const updated = await html.getAttribute('data-theme');

  await expect(updated).toEqual('dark');
});

test('header search appears', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  const button = await header
    .getByRole('button', {
      name: 'search for posts',
    })
    .click();

  await expect(page.getByPlaceholder('search posts...')).toBeVisible();
});

test('header search shows results', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  const button = await header
    .getByRole('button', {
      name: 'search for posts',
    })
    .click();

  await page.getByPlaceholder('search posts...').fill('stage');

  const heading = await page.getByRole('heading', {
    level: 2,
    name: /results/i,
  });

  await expect(heading).toBeVisible();
});

test('header search goes to result', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  const button = await header
    .getByRole('button', {
      name: 'search for posts',
    })
    .click();

  const dialog = await page.getByRole('dialog');

  await dialog
    .getByPlaceholder('search posts...')
    .fill('welcoming the new year');

  await dialog
    .getByRole('link', {
      name: /welcoming the new year/i,
    })
    .click();

  const heading = await page.getByRole('heading', {
    level: 1,
    name: /welcoming the new year/i,
  });

  await expect(heading).toBeVisible();
});

test('header search closes', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('header');

  await header
    .getByRole('button', {
      name: 'search for posts',
    })
    .click();

  await page
    .getByRole('button', {
      name: 'close search',
    })
    .click();

  await expect(page.getByPlaceholder('search posts...')).not.toBeVisible();
});
