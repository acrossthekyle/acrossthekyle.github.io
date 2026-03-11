import { test, expect } from '@playwright/test';

test('gear page loads', async ({ page }) => {
  await page.goto('/gear');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `packs`,
  });

  await expect(heading).toBeVisible();
});

['thru-hikes 8 packs', 'summits 1 pack', 'section hikes 1 pack', 'overnight treks 1 pack'].forEach((name) => {
  test(`gear page has ${name} category`, async ({ page }) => {
    await page.goto('/gear');

    const heading = await page.getByRole('heading', {
      level: 2,
      name,
    });

    await expect(heading).toBeVisible();
  });
});

test('gear page navigates to gear details page', async ({ page }) => {
  await page.goto('/gear');

  const main = await page.getByRole('main');

  await main.getByRole('link', { name: 'alta via 1' }).click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'alta via 1 2019 • 30.48 lbs',
  });

  await expect(heading).toBeVisible();
});

test('gear details page has weight breakdown', async ({ page }) => {
  await page.goto('/gear/alta-via-1');

  const main = await page.getByRole('main');
  const breakdown = await main.getByRole('list').nth(1);
  const base = await breakdown.locator('li').nth(0);
  const worn = await breakdown.locator('li').nth(1);
  const consumable = await breakdown.locator('li').nth(2);

  await expect(base).toContainText('Base');
  await expect(base).toContainText('12.57 lbs');
  await expect(worn).toContainText('Worn');
  await expect(worn).toContainText('9.36 lbs');
  await expect(consumable).toContainText('Consumable');
  await expect(consumable).toContainText('8.54 lbs');
});

test('gear details page weight breakdown filters items', async ({ page }) => {
  await page.goto('/gear/alta-via-1');

  const main = await page.getByRole('main');
  const breakdown = await main.getByRole('list').nth(1);

  await breakdown.getByRole('link', { name: 'Base' }).click();

  await expect(page).toHaveURL(/.*\\?type=base/);

  const items = await main.getByRole('listitem');
  const all = await items.all();

  for (const item of all.slice(5)) {
    await expect(item).not.toContainText('Worn');
    await expect(item).not.toContainText('Consumable');
  }
});

test('gear details page weight breakdown filters reset', async ({ page }) => {
  await page.goto('/gear/alta-via-1');

  const main = await page.getByRole('main');
  const breakdown = await main.getByRole('list').nth(1);

  await breakdown.getByRole('link', { name: 'Base' }).click();

  await expect(page).toHaveURL(/.*\\?type=base/);

  await breakdown.getByRole('link', { name: 'Base' }).click();

  await expect(page).not.toHaveURL(/.*\\?type=base/);
});

test('gear details page has categories and items', async ({ page }) => {
  await page.goto('/gear/alta-via-1');

  const main = await page.getByRole('main');

  const packHeading = await main.getByRole('heading', {
    level: 2,
    name: 'pack 1 items • 4.07 lbs',
  });

  await expect(packHeading).toBeVisible();

  const packNav = await packHeading.locator('//following-sibling::nav[1]');
  const packItem = await packNav.locator('ul > li').nth(0);

  await expect(packItem).toContainText('Osprey Kestrel 38 pack');
  await expect(packItem).toContainText('Worn • 65.12 oz • view');

  const electronicsHeading = await page.getByRole('heading', {
    level: 2,
    name: 'electronics 9 items • 1.82 lbs',
  });

  await expect(electronicsHeading).toBeVisible();

  const electronicsNav = await electronicsHeading.locator('//following-sibling::nav[1]');
  const electronicsItemFirst = await electronicsNav.locator('ul > li').nth(0);

  await expect(electronicsItemFirst).toContainText('Petzl Actik headlamp');
  await expect(electronicsItemFirst).toContainText('Base • 3.17 oz • view');

  const electronicsItemSecond = await electronicsNav.locator('ul > li').nth(1);

  await expect(electronicsItemSecond).toContainText('AAA batteries');
  await expect(electronicsItemSecond).toContainText('Base • 3 oz');
  await expect(electronicsItemSecond).not.toContainText('view');
});

test('gear page navigates to gear wiki page', async ({ page }) => {
  await page.goto('/gear/alta-via-1');

  const main = await page.getByRole('main');

  await main.getByRole('link', { name: '[?]' }).click();

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'gear wiki',
  });

  await expect(heading).toBeVisible();
});

test('gear wiki page navigates to gear details page', async ({ page }) => {
  await page.goto('/gear/wiki?ref=alta-via-1');

  const wikiHeading = await page.getByRole('heading', {
    level: 1,
    name: 'Gear wiki',
  });

  await expect(wikiHeading).toBeVisible();

  const main = await page.getByRole('main');

  await main.getByRole('link', { name: '/list' }).click();

  const gearDetailsHeading = await page.getByRole('heading', {
    level: 1,
    name: 'Alta Via 1',
  });

  await expect(gearDetailsHeading).toBeVisible();
});
