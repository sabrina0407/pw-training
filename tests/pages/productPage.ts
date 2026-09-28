import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly addToBasketConfirmation: Locator;
  readonly basketSummary: Locator;

  constructor(private readonly page: Page) {
    this.addToBasketConfirmation = page.getByText(
      "The Hitchhiker's Guide to the Galaxy a été ajouté à votre panier.",
    );
    this.basketSummary = page.locator('#top_page');
  }

  async open() {
    await this.page.goto(
      'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/fr/catalogue/the-hitchhikers-guide-to-the-galaxy_4/',
    );
  }

  async addToBasket() {
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
  }
}