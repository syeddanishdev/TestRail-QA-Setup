const { test, expect } = require('@playwright/test');
const { addTestResult } = require('../testrail-api');

test.describe('Checkout Tests', () => {
    test('TC008_Checkout_Guest_Success', async ({ page }) => {
        // Add an item to the cart
        await page.goto('https://demo.opencart.com', { waitUntil: 'domcontentloaded' });
        await page.waitForLoadState('networkidle', { timeout: 15000 });
        // Updated selector for add-to-cart button
        await page.waitForSelector('button.btn-primary[onclick*="cart.add"]', { state: 'visible', timeout: 15000 });
        await page.click('button.btn-primary[onclick*="cart.add"]');
        await page.waitForTimeout(2000); // Wait for cart update

        await page.goto('https://demo.opencart.com/index.php?route=checkout/cart', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('a.btn-primary[href*="checkout/checkout"]', { state: 'visible', timeout: 15000 });
        await page.click('a.btn-primary[href*="checkout/checkout"]');

        await page.waitForSelector('input[value="guest"]', { state: 'visible', timeout: 15000 });
        await page.click('input[value="guest"]');
        await page.click('#button-account');

        await page.fill('input[name="firstname"]', 'Test');
        await page.fill('input[name="lastname"]', 'User');
        await page.fill('input[name="email"]', 'test@example.com');
        await page.fill('input[name="telephone"]', '1234567890');
        await page.fill('input[name="address_1"]', '123 Main St');
        await page.fill('input[name="city"]', 'Anytown');
        await page.fill('input[name="postcode"]', '12345');
        await page.selectOption('select[name="country_id"]', '223'); // United States
        await page.waitForTimeout(1000); // Wait for zone_id to load
        await page.selectOption('select[name="zone_id"]', { label: 'California' });
        await page.click('#button-guest');

        await page.waitForTimeout(1000);
        await page.click('#button-shipping-method');
        await page.check('input[name="agree"]');
        await page.click('#button-payment-method');
        await page.click('#button-confirm');

        await expect(page.locator('h1')).toContainText('Your order has been placed', { timeout: 15000 });
        await addTestResult(123, 460, 1, 'Mock guest checkout successful');
    });

    test('TC009_Checkout_MaxItems', async ({ page }) => {
        await page.goto('https://demo.opencart.com', { waitUntil: 'domcontentloaded' });
        await page.waitForLoadState('networkidle', { timeout: 15000 });
        // Add 3 items to avoid overwhelming demo site
        for (let i = 0; i < 3; i++) {
            await page.waitForSelector('button.btn-primary[onclick*="cart.add"]', { state: 'visible', timeout: 15000 });
            await page.click('button.btn-primary[onclick*="cart.add"]');
            await page.waitForTimeout(1000);
        }

        await page.goto('https://demo.opencart.com/index.php?route=checkout/cart', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('a.btn-primary[href*="checkout/checkout"]', { state: 'visible', timeout: 15000 });
        await page.click('a.btn-primary[href*="checkout/checkout"]');

        await page.waitForSelector('input[value="guest"]', { state: 'visible', timeout: 15000 });
        await page.click('input[value="guest"]');
        await page.click('#button-account');

        await page.fill('input[name="firstname"]', 'Test');
        await page.fill('input[name="lastname"]', 'User');
        await page.fill('input[name="email"]', 'test@example.com');
        await page.fill('input[name="telephone"]', '1234567890');
        await page.fill('input[name="address_1"]', '123 Main St');
        await page.fill('input[name="city"]', 'Anytown');
        await page.fill('input[name="postcode"]', '12345');
        await page.selectOption('select[name="country_id"]', '223');
        await page.waitForTimeout(1000);
        await page.selectOption('select[name="zone_id"]', { label: 'California' });
        await page.click('#button-guest');

        await page.waitForTimeout(1000);
        await page.click('#button-shipping-method');
        await page.check('input[name="agree"]');
        await page.click('#button-payment-method');
        await page.click('#button-confirm');

        await expect(page.locator('h1')).toContainText('Your order has been placed', { timeout: 15000 });
        await addTestResult(123, 461, 1, 'Mock checkout with multiple items');
    });
});