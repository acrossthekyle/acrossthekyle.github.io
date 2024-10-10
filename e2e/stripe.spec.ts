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

      /* Frameless */

      const frameless = await page.getByText('Frameless');

      const framelessTab = page.waitForEvent('popup');

      const openedFramelessTab = await clickPurchase(
        page,
        frameless,
        framelessTab,
      );

      const framelessSizes = await openedFramelessTab.locator(
        'select[name*="size"]',
      );

      await expect(framelessSizes.getByText('5"x7"')).toHaveCount(1);
      await expect(framelessSizes.getByText('8"x10"')).toHaveCount(1);
      await expect(framelessSizes.getByText('11"x14"')).toHaveCount(1);
      await expect(framelessSizes.getByText('12"x16"')).toHaveCount(1);
      await expect(framelessSizes.getByText('12"x18"')).toHaveCount(1);
      await expect(framelessSizes.getByText('16"x20"')).toHaveCount(1);
      await expect(framelessSizes.getByText('18"x24"')).toHaveCount(1);
      await expect(
        openedFramelessTab.locator('select[name*="color"]'),
      ).toHaveCount(0);
      await expect(openedFramelessTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFramelessTab.getByText(product)).toBeVisible();
      await expect(openedFramelessTab.getByText('Frameless')).toBeVisible();

      /* Framed */

      const framed = await page.getByText('Framed');

      const framedTab = page.waitForEvent('popup');

      const openedFramedTab = await clickPurchase(page, framed, framedTab);

      const framedSizes = await openedFramedTab.locator('select[name*="size"]');
      const framedFrameColor = await openedFramedTab.locator(
        'select[name*="color"]',
      );

      await expect(framedSizes.getByText('5"x7"')).toHaveCount(0);
      await expect(framedSizes.getByText('8"x10"')).toHaveCount(1);
      await expect(framedSizes.getByText('11"x14"')).toHaveCount(1);
      await expect(framedSizes.getByText('12"x16"')).toHaveCount(1);
      await expect(framedSizes.getByText('12"x18"')).toHaveCount(1);
      await expect(framedSizes.getByText('16"x20"')).toHaveCount(1);
      await expect(framedSizes.getByText('18"x24"')).toHaveCount(1);
      await expect(framedFrameColor.getByText('Black')).toHaveCount(1);
      await expect(framedFrameColor.getByText('White')).toHaveCount(1);
      await expect(openedFramedTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFramedTab.getByText(product)).toBeVisible();
      await expect(openedFramedTab.getByText('Framed')).toBeVisible();

      /* Frame with Mat */

      const framedMat = await page.getByText('Frame with Mat');

      const framedMatTab = page.waitForEvent('popup');

      const openedFrameMatTab = await clickPurchase(
        page,
        framedMat,
        framedMatTab,
      );

      const frameWithMatSizes = await openedFrameMatTab.locator(
        'select[name*="size"]',
      );
      const frameWithMatFrameColor = await openedFrameMatTab.locator(
        'select[name*="color"]',
      );

      await expect(frameWithMatSizes.getByText('5"x7"')).toHaveCount(0);
      await expect(frameWithMatSizes.getByText('8"x10"')).toHaveCount(0);
      await expect(frameWithMatSizes.getByText('11"x14"')).toHaveCount(0);
      await expect(frameWithMatSizes.getByText('12"x16"')).toHaveCount(1);
      await expect(frameWithMatSizes.getByText('12"x18"')).toHaveCount(1);
      await expect(frameWithMatSizes.getByText('16"x20"')).toHaveCount(1);
      await expect(frameWithMatSizes.getByText('18"x24"')).toHaveCount(1);
      await expect(frameWithMatFrameColor.getByText('Black')).toHaveCount(1);
      await expect(frameWithMatFrameColor.getByText('White')).toHaveCount(1);
      await expect(openedFrameMatTab).toHaveURL(/buy.stripe.com/);
      await expect(openedFrameMatTab.getByText(product)).toBeVisible();
      await expect(
        openedFrameMatTab.getByText('Framed with Mat'),
      ).toBeVisible();

      ++checked;
    });
  });

  test('all products checked', async ({ page }) => {
    await page.goto('/shop');

    const anchors = await page.$$('a[href*="/shop/prints/"]');

    expect(anchors.length / 2).toEqual(checked);
  });
});
