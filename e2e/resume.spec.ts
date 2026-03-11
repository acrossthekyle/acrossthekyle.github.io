import { test, expect } from '@playwright/test';

test('resume page loads', async ({ page }) => {
  await page.goto('/resume');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `resume`,
  });

  await expect(heading).toBeVisible();
});

test('resume page has skills', async ({ page }) => {
  await page.goto('/resume');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 2,
    name: 'skills',
  });

  await expect(heading).toBeVisible();

  const list = await heading.locator('//following-sibling::dl[1]');
  const dt = await list.locator('dt').nth(0);
  const progress = await list.locator('progress').nth(0);

  await expect(dt).toContainText('JavaScript');
  await expect(progress).toHaveAttribute('value', '80');
});

test('resume page has career history', async ({ page }) => {
  await page.goto('/resume');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 2,
    name: 'career history',
  });

  await expect(heading).toBeVisible();

  const list = await heading.locator('//following-sibling::ol[1]');
  const item = await list.locator('li').last();

  await expect(item).toContainText('2012');
  await expect(item).toContainText('Junior Web Developer');
  await expect(item).toContainText('Silverline Creative');
});

test('resume page has education', async ({ page }) => {
  await page.goto('/resume');

  const main = await page.getByRole('main');

  const heading = await main.getByRole('heading', {
    level: 2,
    name: 'education',
  });

  await expect(heading).toBeVisible();

  const school = await main.getByRole('heading', {
    level: 3,
    name: 'northern illinois university',
  });

  await expect(school).toBeVisible();
});
