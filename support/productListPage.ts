import { type Locator, type Page } from '@playwright/test';

export class ProductListPage {
  readonly productsHeading: Locator;
  readonly signedInAccount: Locator;

  constructor(page: Page) {
    this.productsHeading = page.getByRole('heading', { name: 'All products' });
    this.signedInAccount = page.getByRole('button', {
      name: ' sabsebbane@hotmail.fr',
    });
  }
}