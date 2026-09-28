import { test as base, expect } from '@playwright/test';
import { ProductPage } from '../tests/pages/productPage';

type Fixtures = {
  productPage: ProductPage;
};

export const test = base.extend<Fixtures>({
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect };