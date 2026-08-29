import { test, expect } from '@playwright/test';

import travels from '../src/cache/travels';

test('E2E test', async ({ page }) => {
  await page.goto('/');

  const h1 = await page.getByRole('heading', {
    level: 1,
  });

  await expect(h1).toBeVisible();

  const latest = await page.getByRole('link').filter({ hasText: 'Latest' });

  await expect(latest).toBeVisible();
  await expect(latest).toHaveAttribute('href', `/travels/${travels[0].id}`);

  const filters = await page.locator('select[name="filter"]');

  await expect(filters).toHaveValue('All');

  const all = await page.locator('article#travels a[href^="/travels/"]');
  const total = await all.count();

  await expect(total).toBe(travels.length);

  await filters.selectOption({ label: 'Summits' });

  const summits = await page.locator('article#travels a[href^="/travels/"]');
  const count = await summits.count();

  await expect(count).toBe(travels.filter(travel => travel.category === 'summits').length);
});
