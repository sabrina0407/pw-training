import { test as base, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { ProductPage } from './productPage';
import { ProductListPage } from './productListPage';

type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  productListPage: ProductListPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  productListPage: async ({ page }, use) => {
    await use(new ProductListPage(page));
  },
});

export { expect };