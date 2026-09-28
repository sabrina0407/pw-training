import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/en-gb/catalogue/');
  await page.getByRole('link', { name: ' Account' }).click();
  await page.getByRole('textbox', { name: 'Email address *' }).click();
  await page.getByRole('textbox', { name: 'Email address *' }).fill('sabsebbane@hotmail.fr');
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Ely@s051013');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'All products' })).toBeVisible();
await expect(page.getByRole('button', { name: ' sabsebbane@hotmail.fr' })).toBeVisible();
});
