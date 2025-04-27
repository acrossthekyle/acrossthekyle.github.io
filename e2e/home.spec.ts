import { test, expect } from '@playwright/test';

test('home loads', async ({ page }) => {
  await page.goto('/');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'kyle gilbert',
  });

  await expect(heading).toBeVisible();
});

test('home avatar navigates to about', async ({ page }) => {
  await page.goto('/');

  const main = await page.getByRole('main');

  await main
    .getByRole('link', {
      name: 'kyle gilbert',
    })
    .click();

  const heading = await page.getByRole('heading', {
    level: 1,
    name: 'about',
  });

  await expect(heading).toBeVisible();
});

[
  {
    name: 'me',
    title: /about/i,
  },
  {
    name: 'packs',
    title: /packs/i,
  },
  {
    name: 'prints',
    title: /prints/i,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/acrossthekyle/',
  },
  {
    name: 'garmin',
    url: 'https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps',
  },
].forEach(({ name, title, url }) => {
  test(`home shortcut ${name} navigates`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/');

    const main = await page.getByRole('main');

    const shortcuts = await main.locator('[class^="shortcuts"]').nth(0);

    await shortcuts
      .getByRole('link', {
        name,
      })
      .click();

    if (url) {
      const [pages] = await Promise.all([page.context().waitForEvent('page')]);

      const tabs = pages.context().pages();

      await tabs[1].waitForLoadState('load');

      await expect(tabs[1]).toHaveURL(url);
    } else {
      await expect(page).toHaveTitle(title);
    }
  });
});
