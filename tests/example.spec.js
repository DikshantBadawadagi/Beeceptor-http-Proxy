import { test, expect } from '@playwright/test';

test('Configure Beeceptor Proxy Rule', async ({ page, context }) => {
  // page.on('console', msg => console.log(msg.text()));
  // page.on('pageerror', err => console.log(err));

  await page.goto('https://app.beeceptor.com/login', { waitUntil: 'networkidle' });

  await page.fill('input[type="email"]', 'dikshant199@gmail.com');
  await page.fill('input[type="password"]', 'dikshant199');
  
  await Promise.all([
    page.click('button[type="submit"]'),
  ]);

  await page.goto('https://app.beeceptor.com/console/intern', { waitUntil: 'networkidle' });

  
  // await page.fill('input[name="channel"]', 'Intern');
  // await page.click('button:has-text("Create Mock Server")');


  await page.click('a:has-text("Mocking Rules")');

  await page.click('button:has-text("Additional Rule Types")');
  await page.click('text=Create Proxy or Callout');


  await page.selectOption('select[name="matchMethod"]', 'GET');
  await page.fill('input[name="ruleMatchValue"]', '/proxy-path');

  await page.selectOption('select[name="matchMethodProxy"]', 'GET');
  await page.fill('input[name="targetEndpoint"]', 'https://intern.free.beeceptor.com');


  await page.click('button:has-text("Save Proxy")');

});