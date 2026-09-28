import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/fr/catalogue/the-hitchhikers-guide-to-the-galaxy_4/');
  await page.getByRole('button', { name: 'Ajouter au panier' }).click ()
 await expect(page.getByText('The Hitchhiker\'s Guide to the Galaxy a été ajouté à votre panier.')).toBeVisible();
   await expect(page.locator('#top_page')).toContainText('Panier (1)');

});