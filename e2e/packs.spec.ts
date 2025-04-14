import { test, expect } from '@playwright/test';

test('loads', async ({ page }) => {
  await page.goto('/packs');

  await expect(page).toHaveTitle(`Across The Kyle —— Packs`);
});

test('toggle units', async ({ page }) => {
  await page.goto('/packs');

  const imperial = await page.getByRole('button', { name: 'Imperial' });
  const metric = await page.getByRole('button', { name: 'Metric' });

  const main = await page.getByRole('main');
  const base = await main.locator('ul:first-of-type li:last-of-type').nth(0);

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

  const initial = await main.getByRole('heading', { level: 2 }).textContent();

  await expect(initial).toEqual('Overnight Backpacking');

  const button = await aside.getByRole('button', {
    name: /Tour du Mont Blanc 2024/,
  });

  await button.click();

  const updated = await main.getByRole('heading', { level: 2 }).textContent();

  await expect(updated).toEqual('Tour du Mont Blanc 2024');
});
