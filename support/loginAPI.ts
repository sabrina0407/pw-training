import { Page, type APIRequestContext } from '@playwright/test';

const API_URL =
  'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/api';

export class LoginAPI {
  constructor(private readonly page: Page) {}

  async login(username: string, password: string) {
    const response = await this.page.request.post(`${API_URL}/login/`, {
      data: { username, password },
    });

    if (!response.ok()) {
      throw new Error(`Login API failed: HTTP ${response.status()}`);
    }
  }
}