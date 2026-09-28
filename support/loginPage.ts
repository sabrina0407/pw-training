import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly loginError: Locator;

  constructor(private readonly page: Page) {
    this.loginError = page.getByText('Please enter a correct');
  }

  async open() {
    await this.page.goto(
      'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/en-gb/accounts/login/',
    );
    await this.page.getByRole('link', { name: ' Account' }).click();
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Email address *' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}