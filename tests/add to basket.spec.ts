import { test, expect } from '../support/fixtures';

test('add to basket from product page', async ({ productPage }) => {
  await productPage.open();
  await productPage.addToBasket();

  await expect(productPage.addToBasketConfirmation).toBeVisible();
  await expect(productPage.basketSummary).toContainText('Panier (1)');
});