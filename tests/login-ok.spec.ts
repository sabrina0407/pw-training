import { test, expect } from '../support/fixtures';

test('login-ok', async ({ loginPage, productListPage }) => {
  await loginPage.open();
  await loginPage.login('sabsebbane@hotmail.fr', 'Ely@s051013');

  await expect(productListPage.productsHeading).toBeVisible();
  await expect(productListPage.signedInAccount).toBeVisible();
});
