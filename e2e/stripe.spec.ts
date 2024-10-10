import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

const PRODUCTS = [1, 3, 5, 7, 9, 11, 13, 15];

async function clickPurchase(page, child, awaitedTab) {
  const button = await page.getByRole('button').filter({ has: child });

  await button.click();

  const purchase = await page.getByRole('link', { name: /Purchase/ });

  await purchase.click();

  const tab = await awaitedTab;
  await tab.waitForLoadState();

  return tab;
}

test.describe('stripe links', () => {
  test.skip(({ browserName }) => browserName !== 'chromium');

  // Fallback to confirm all indexes were added in PRODUCTS constant
  let checked = 0;

  PRODUCTS.forEach((item: number, index: number) => {
    test(`Item ${index + 1} goes to correct checkouts`, async ({ page }) => {
      await page.goto('/shop');

      const anchor = await page.locator('a[href*="/shop/prints/"]').nth(item);

      const product = await anchor.textContent();

      await anchor.click();

      const frameless = await page.getByText('Frameless');

      // await page.waitForTimeout(2000);

      const framelessTab = page.waitForEvent('popup');

      const openedFramelessTab = await clickPurchase(
        page,
        frameless,
        framelessTab,
      );

      const framelessSizes = await openedFramelessTab.locator(
        'select[name*="size"]',
      );
      await framelessSizes.selectOption('5x7');
      await framelessSizes.selectOption('8x10');
      await framelessSizes.selectOption('11x14');
      await framelessSizes.selectOption('12x16');
      await framelessSizes.selectOption('12x18');
      await framelessSizes.selectOption('16x20');
      await framelessSizes.selectOption('18x24');

      await expect(openedFramelessTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFramelessTab.getByText(product)).toBeVisible();
      await expect(openedFramelessTab.getByText('Frameless')).toBeVisible();

      const framed = await page.getByText('Framed');

      // await page.waitForTimeout(2000);

      const framedTab = page.waitForEvent('popup');

      const openedFramedTab = await clickPurchase(page, framed, framedTab);

      const framedSizes = await openedFramedTab.locator('select[name*="size"]');
      await framedSizes.selectOption('8x10');
      await framedSizes.selectOption('11x14');
      await framedSizes.selectOption('12x16');
      await framedSizes.selectOption('12x18');
      await framedSizes.selectOption('16x20');
      await framedSizes.selectOption('18x24');

      await expect(openedFramedTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFramedTab.getByText(product)).toBeVisible();
      await expect(openedFramedTab.getByText('Framed')).toBeVisible();

      // await page.waitForTimeout(5000);

      const framedMat = await page.getByText('Frame with Mat');

      // await page.waitForTimeout(2000);

      const framedMatTab = page.waitForEvent('popup');

      const openedFrameMatTab = await clickPurchase(
        page,
        framedMat,
        framedMatTab,
      );

      const frameWithMatSizes = await openedFrameMatTab.locator(
        'select[name*="size"]',
      );
      await frameWithMatSizes.selectOption('12x16');
      await frameWithMatSizes.selectOption('12x18');
      await frameWithMatSizes.selectOption('16x20');
      await frameWithMatSizes.selectOption('18x24');

      await expect(openedFrameMatTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFrameMatTab.getByText(product)).toBeVisible();
      await expect(
        openedFrameMatTab.getByText('Framed with Mat'),
      ).toBeVisible();

      // await page.waitForTimeout(5000);

      ++checked;
    });
  });

  test('all products checked', async ({ page }) => {
    await page.goto('/shop');

    const anchors = await page.$$('a[href*="/shop/prints/"]');

    expect(anchors.length / 2).toEqual(checked);
  });
});
