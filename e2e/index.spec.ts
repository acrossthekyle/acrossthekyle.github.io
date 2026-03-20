import { test, expect } from '@playwright/test';

test('index page loads', async ({ page }) => {
  await page.goto('/');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `Hi, I'm Kyle`,
  });

  await expect(heading).toBeVisible();
});

[
  {
    name: 'places',
  },
  {
    name: 'words',
  },
  {
    name: 'packs',
  },
  {
    name: 'about',
  },
  {
    name: 'resume',
  },
  {
    name: 'books',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/acrossthekyle',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/acrossthekyle',
  },
  {
    name: 'colophon',
  },
  {
    name: 'github',
    url: 'https://github.com/acrossthekyle',
  },
  {
    name: 'carbon',
    url: 'https://www.websitecarbon.com/website/acrossthekyle-com/',
  },
].forEach(({ name, url }) => {
  test(`index page navigates to ${name}`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/');

    const main = await page.getByRole('main');

    await main.getByRole('link', { name }).click();

    if (url) {
      const [pages] = await Promise.all([page.context().waitForEvent('page')]);

      const tabs = pages.context().pages();

      await tabs[1].waitForLoadState('load');

      await expect(tabs[1]).toHaveURL(url);
    } else {
      const heading = await page.getByRole('heading', {
        level: 1,
        name,
      });

      await expect(heading).toBeVisible();
    }
  });
});

test('index toggles theme', async ({ page }) => {
  await page.goto('/');

  const html = await page.locator('[data-theme]');
  const current = await html.getAttribute('data-theme');
  const toggle = await page.getByRole('button', { name: 'theme' });

  await expect(current).toEqual('light');
  await expect(toggle).toContainText('Current: light');

  await toggle.click();

  const updated = await html.getAttribute('data-theme');

  await expect(updated).toEqual('dark');
  await expect(toggle).toContainText('Current: dark');

  await toggle.click();

  const reverted = await html.getAttribute('data-theme');

  await expect(reverted).toEqual('light');
  await expect(toggle).toContainText('Current: light');
});

test('index toggles units', async ({ page }) => {
  await page.goto('/');

  const toggle = await page.getByRole('button', { name: 'units' });

  await expect(toggle).toContainText('Current: imperial');

  await toggle.click();

  await expect(toggle).toContainText('Current: metric');

  await toggle.click();

  await expect(toggle).toContainText('Current: imperial');
});
