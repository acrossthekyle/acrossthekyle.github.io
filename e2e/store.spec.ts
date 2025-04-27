import { test, expect } from '@playwright/test';

test('store empty cart', async ({ page }) => {
  await page.goto('/store/checkout/cart');

  const main = await page.getByRole('main');

  const noItems = await main.getByRole('heading', {
    level: 2,
    name: 'no items in cart',
  });

  await expect(noItems).toBeVisible();

  const link = await main.getByRole('link', { name: 'back to prints' });

  await link.click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name: 'prints',
  });

  await expect(heading).toBeVisible();
});

test('store items', async ({ page }) => {
  await page.goto('/store');

  const masonry = await page.getByRole('figure');

  const count = await masonry.count();

  await expect(count).toBeGreaterThanOrEqual(9);
});

test('store item details', async ({ page }) => {
  await page.goto('/store');

  const main = await page.getByRole('main');

  const figure = await main.getByRole('figure').nth(0);

  const name = await figure.getByRole('heading', { level: 2 }).textContent();

  await figure.getByRole('link').nth(0).click();

  const heading = await main.getByRole('heading', {
    level: 1,
    name,
  });

  await expect(heading).toBeVisible();

  const price = await main.getByRole('heading', {
    level: 2,
    name: '$215.00',
  });

  await expect(price).toBeVisible();

  const frame = await main.locator('select[name="frame"]');

  const selectedFrame = await frame.evaluate((select) =>
    select.options[select.value].text.toLowerCase(),
  );

  await expect(selectedFrame).toEqual('framed with mat');

  const size = await main.locator('select[name="size"]');

  const selectedSize = await size.evaluate(
    (select) => select.options[select.value].text,
  );

  await expect(selectedSize).toEqual('18" x 24"');

  const color = await main.locator('select[name="frame-color"]');

  const selectedColor = await color.evaluate((select) =>
    select.options[select.value].text.toLowerCase(),
  );

  await expect(selectedColor).toEqual('white');

  await frame.selectOption({ index: 1 });

  const updatedColor = await color.evaluate((select) =>
    select.options[select.value].text.toLowerCase(),
  );

  await expect(updatedColor).toEqual('white');

  const framedSize = await size.evaluate(
    (select) => select.options[select.value].text,
  );

  await expect(framedSize).toEqual('11" x 14"');

  await frame.selectOption({ index: 0 });

  expect(color).not.toBeVisible();

  const noFrameSize = await size.evaluate(
    (select) => select.options[select.value].text,
  );

  await expect(noFrameSize).toEqual('5" x 7"');

  await frame.selectOption({ index: 1 });

  const framedColor = await color.evaluate((select) =>
    select.options[select.value].text.toLowerCase(),
  );

  await expect(framedColor).toEqual('black');

  await frame.selectOption({ index: 2 });
  await size.selectOption({ index: 3 });
  await color.selectOption({ index: 1 });

  await main.getByRole('button', { name: 'add to cart' }).click();

  const cart = await main.getByRole('heading', {
    level: 1,
    name: 'cart',
  });

  await expect(cart).toBeVisible();
});

test('store cart', async ({ page }) => {
  await page.goto('/store/stone-gateway');

  const main = await page.locator('main');

  await main.getByRole('button', { name: 'add to cart' }).click();

  const link = await main.getByRole('link', { name: 'checkout' });

  await expect(link).not.toBeHidden();

  const item = await main.locator('section');

  await expect(item).toHaveCount(1);

  const name = await main.getByRole('heading', {
    level: 2,
    name: 'stone gateway',
  });

  await expect(name).toBeVisible();

  const list = main.getByRole('list');

  const size = await list.locator('li').nth(0).textContent();
  const frame = await list.locator('li').nth(1).textContent();
  const color = await list.locator('li').nth(2).textContent();
  const mat = await list.locator('li').nth(3).textContent();

  expect(size).toEqual('Size: 18" x 24"');
  expect(frame).toEqual('Frame: Yes');
  expect(color).toEqual('Color: White');
  expect(mat).toEqual('Mat: Yes');

  const initialQuantity = await main.getByRole('span', {
    title: 'quantity of 1',
  });

  const initialItemPrice = await item.getByRole('paragraph').textContent();
  const initialCartPrice = await main
    .getByRole('paragraph')
    .nth(0)
    .textContent();

  await expect(initialItemPrice).toContain('$215.00');
  await expect(initialCartPrice).toContain('$215.00');

  await expect(initialQuantity).toBeDefined();

  await main.getByRole('button', { name: '+' }).click();

  const increasedItemPrice = await item.getByRole('paragraph').textContent();
  const increasedCartPrice = await main
    .getByRole('paragraph')
    .nth(0)
    .textContent();

  await expect(increasedItemPrice).toContain('$430.00 (215.00 x 2)');
  await expect(increasedCartPrice).toContain('$430.00');

  const increasedQuantity = await main.getByRole('span', {
    title: 'quantity of 2',
  });

  await expect(increasedQuantity).toBeDefined();

  await main.getByRole('button', { name: '-' }).click();

  const decreasedItemPrice = await item.getByRole('paragraph').textContent();
  const decreasedCartPrice = await main
    .getByRole('paragraph')
    .nth(0)
    .textContent();

  await expect(decreasedItemPrice).toContain('$215.00');
  await expect(decreasedCartPrice).toContain('$215.00');

  const decreasedQuantity = await main.getByRole('span', {
    title: 'quantity of 1',
  });

  await expect(decreasedQuantity).toBeDefined();

  await main.getByRole('button', { name: 'remove item' }).click();

  const checkout = await main.getByRole('link', { name: 'checkout' });
  const back = await main.getByRole('link', { name: 'back to prints' });

  await expect(checkout).not.toBeVisible();
  await expect(back).toBeVisible();
});

test('store cart decrease', async ({ page }) => {
  await page.goto('/store/stone-gateway');

  const main = await page.locator('main');

  await main.getByRole('button', { name: 'add to cart' }).click();

  const item = await main.locator('section');

  await main.getByRole('button', { name: '-' }).click();

  const checkout = await main.getByRole('link', { name: 'checkout' });
  const back = await main.getByRole('link', { name: 'back to prints' });

  await expect(checkout).not.toBeVisible();
  await expect(back).toBeVisible();
});

test('store confirm success', async ({ page }) => {
  await page.goto('/store/stone-gateway');

  const main = await page.locator('main');

  await main.getByRole('button', { name: 'add to cart' }).click();

  await main.getByRole('link', { name: 'checkout' }).click();

  const checkout = await main.getByRole('heading', {
    level: 1,
    name: 'checkout',
  });

  await expect(checkout).toBeVisible();

  const iFrame = await page.frameLocator('iframe[name="embedded-checkout"]');

  const item = await iFrame.getByText('Stone Gateway Print');
  const price = await iFrame.getByText('$215.00');
  const options = await iFrame.getByText(
    'Size: 18" x 24" • Frame: Yes • Color: White • Yes',
  );

  await expect(item).toBeVisible();
  await expect(price).toBeVisible();
  await expect(options).toBeVisible();

  await iFrame.locator('#email').fill('hello@acrossthekyle.com');

  await iFrame.locator('#shippingName').fill('Kyle Gilbert');
  await iFrame.locator('#shippingAddressLine1').fill('312 Test Street');
  await iFrame.locator('#shippingAddressLine2').fill('#4');
  await iFrame.locator('#shippingLocality').fill('Chicago');
  await iFrame.locator('#shippingPostalCode').fill('60614');

  await iFrame.locator('#cardNumber').fill('4242424242424242');
  await iFrame.locator('#cardExpiry').fill('12/40');
  await iFrame.locator('#cardCvc').fill('123');

  await iFrame.getByRole('button', { name: 'pay' }).click();

  await page.waitForURL(new RegExp('.*store\/checkout\/success(?!\/)'));

  const thankYou = await page.getByRole('heading', {
    level: 1,
    name: 'thank you!',
  });

  await expect(thankYou).toBeVisible();

  const customerName = await page
    .locator('p', {
      hasText: 'Kyle Gilbert',
    })
    .nth(0);
  const customerEmail = await page
    .locator('p', {
      hasText: 'hello@acrossthekyle.com',
    })
    .nth(0);

  await expect(customerName).toBeVisible();
  await expect(customerEmail).toBeVisible();
});
