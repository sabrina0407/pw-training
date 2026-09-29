import { test as base, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { ProductPage } from './productPage';
import { ProductListPage } from './productListPage';
import { BasketAPI } from './basketAPI';
import { LoginWorkflow } from './loginWorkflow';
import { LoginAPI } from './loginAPI';

type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  productListPage: ProductListPage;
  basketAPI: BasketAPI;
  loginAPI: LoginAPI;
  loginWorkflow: LoginWorkflow;
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
  basketAPI: async ({ context }, use) => {
    await use(new BasketAPI(context.request));
  },
  loginAPI: async ({ context }, use) => {
    await use(new LoginAPI(context.request));
  },
  loginWorkflow: async ({ loginAPI, page, productListPage }, use) => {
    await use(new LoginWorkflow(loginAPI, page, productListPage));
  },
});

export { expect };