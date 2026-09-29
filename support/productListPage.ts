import { type Locator, type Page, expect } from '@playwright/test';

export class ProductListPage {
  readonly page: Page;
    readonly productsHeading: Locator;
  readonly signedInAccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsHeading = page.getByRole('heading', { name: 'All products' });
  ;
  } 
  
  async expectLoggedUser (email: string) {
   await expect(this.page.getByRole('button', {
      name: email ,
    })).toBeVisible();
  }
 }