import { test, expect } from '../support/fixtures';

test('login-ok', async ({ loginPage, productListPage }) => {
  await loginPage.open();
  await loginPage.login('test@test.com', 'testtestsab');

  await expect(productListPage.productsHeading).toBeVisible();
  await productListPage.expectLoggedUser('test@test.com');

});
