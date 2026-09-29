import { expect } from '@playwright/test';
import { type Page } from '@playwright/test';
import { LoginAPI } from './loginAPI';
import { ProductListPage } from './productListPage';

export class LoginWorkflow {
  constructor(
    private readonly loginAPI: LoginAPI,
    private readonly page: Page,
    private readonly productListPage: ProductListPage,
  ) {}

  async loginAndExpect(email: string, password: string) {
    await this.loginAPI.login(email, password);
    await this.page.goto(
      'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/en-gb/catalogue/',
    );
    await expect(this.productListPage.productsHeading).toBeVisible();
    await this.productListPage.expectLoggedUser(email);
  }
}