import { test, expect } from '../support/fixtures';

test('test-recovery-basket', async ({ loginWorkflow, productPage, basketAPI, page }) => {
  await basketAPI.clearBasket('test@test.com', 'testtestsab');

 // login
  await loginWorkflow.loginAndExpect('test@test.com', 'testtestsab');

  // add to basket
  await productPage.open();
  await productPage.addToBasket();

  await expect(productPage.addToBasketConfirmation).toBeVisible();
  await expect(productPage.basketSummary).toContainText('Panier (1)');

// Logout
await page.getByRole('button', { name: 'test@test.com' }).click();
await page.getByRole('link', { name: ' Déconnexion' }).click();
// Login again
await loginWorkflow.loginAndExpect('test@test.com', 'testtestsab');
});