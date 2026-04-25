import { test, expect } from '@playwright/test';

test('E2E test', async ({ page }) => {
  await page.goto('/');

  const splash = await page.getByRole('heading', {
    level: 1,
    name: `Kyle`,
  });

  await expect(splash).toBeVisible();

  await page.waitForTimeout(4000);

  const info = page.getByRole('button', { name: 'info about kyle' });
  const albums = page.getByRole('button', { name: 'switch to slider view' });
  const library = page.getByRole('button', { name: 'switch to grid view' });
  const search = page.getByRole('button', { name: 'enable search dialog' })

  await expect(info).toBeVisible();
  await expect(albums).toBeVisible();
  await expect(library).toBeVisible();
  await expect(search).toBeVisible();

  await search.click();

  const findAnAlbum = await page.getByRole('heading', {
    level: 2,
    name: `Find an album`,
  });

  await expect(findAnAlbum).toBeVisible();

  const searchClose = page.getByRole('button', { name: 'close search' });

  await expect(searchClose).toBeVisible();

  const category = await page.getByRole('button', { name: 'Backpacking' });

  await expect(category).toBeVisible();

  const album = await page.getByRole('button', { name: 'view items in river ridge trail 2026 album' });

  await expect(album).toBeVisible();

  await album.click();

  const reset = await page.getByRole('button', { name: 'remove filter' });

  await expect(reset).toBeVisible();

  const images = await page.getByRole('button', { name: 'view image details' });

  await expect(images).toHaveCount(4);

  await reset.click();

  const resetImages = await page.getByRole('button', { name: 'view image details' });

  await expect(async () => {
    const count = await resetImages.count();

    await expect(count).toBeGreaterThan(4);
  }).toPass();

  await albums.click();

  const covers = await page.getByRole('button', { name: /view.*album details/i });

  await expect(async () => {
    const count = await covers.count();

    await expect(count).toBeGreaterThan(0);
  }).toPass();

  await covers.nth(12).click();

  const detailsToggle = await page.getByRole('button', { name: 'toggle image caption' });
  const closeToggle = await page.getByRole('button', { name: 'close image' });

  await expect(detailsToggle).not.toBeVisible();
  await expect(closeToggle).not.toBeVisible();

  const coverHeading = await page.getByRole('heading', {
    level: 2,
  });

  await expect(coverHeading).toBeVisible();
});
