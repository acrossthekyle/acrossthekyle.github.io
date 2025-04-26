import { test, expect } from '@playwright/test';

test('loads', async ({ page }) => {
  await page.goto('/packs');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'packs',
  });

  await expect(heading).toBeVisible();
});

test('toggle units', async ({ page }) => {
  await page.goto('/packs');

  const imperial = await page.getByRole('link', { name: 'Imperial' });
  const metric = await page.getByRole('link', { name: 'Metric' });

  const main = await page.getByRole('main');
  const legend = await main.getByRole('list').nth(0);

  const base = await legend.locator('li:last-of-type');

  await expect(imperial).toHaveAttribute('data-mode', 'primary');
  await expect(metric).toHaveAttribute('data-mode', 'secondary');

  await expect(base).toContainText('lbs');

  await metric.click();

  await expect(imperial).toHaveAttribute('data-mode', 'secondary');
  await expect(metric).toHaveAttribute('data-mode', 'primary');
  await expect(base).toContainText('kg');
});

test('choose pack', async ({ page }) => {
  await page.goto('/packs');

  const aside = await page.locator('aside');
  const main = await page.locator('main');

  const initial = await main.getByRole('heading', {
    level: 2,
    name: 'tour du mont blanc 2024',
  });

  await expect(initial).toBeVisible();

  const link = await aside.getByRole('link', {
    name: /tour du mont blanc 2018/i,
  });

  await link.click();

  const updated = await main.getByRole('heading', {
    level: 2,
    name: 'tour du mont blanc 2018',
  });

  await expect(updated).toBeVisible();
});
