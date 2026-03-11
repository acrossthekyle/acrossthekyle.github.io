import { test, expect } from '@playwright/test';

test('colophon page loads', async ({ page }) => {
  await page.goto('/colophon');

  const heading = await page.getByRole('heading', {
    level: 1,
    name: `Colophon`,
  });

  await expect(heading).toBeVisible();
});

[
  {
    name: 'nextjs',
    url: 'https://nextjs.org/',
  },
  {
    name: 'tailwindcss',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'vercel',
    url: 'https://vercel.com/',
  },
  {
    name: 'json',
    url: 'https://www.json.org/json-en.html',
  },
  {
    name: 'markdown',
    url: 'https://www.markdownguide.org/',
  },
  {
    name: 'lucide',
    url: 'https://lucide.dev/',
  },
  {
    name: 'deadsimplesites',
    url: 'https://deadsimplesites.com/',
  },
].forEach(({ name, url }) => {
  test(`colophon page navigates to ${name}`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('/colophon');

    const main = await page.getByRole('main');

    await main.getByRole('link', { name }).click();

    const [pages] = await Promise.all([page.context().waitForEvent('page')]);

    const tabs = pages.context().pages();

    await tabs[1].waitForLoadState('load');

    await expect(tabs[1]).toHaveURL(url);
  });
});
