import { type APIRequestContext } from '@playwright/test';

const API_URL =
  'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/api';

export class LoginAPI {
  constructor(private readonly request: APIRequestContext) {}

  async login(username: string, password: string) {
    const response = await this.request.post(`${API_URL}/login/`, {
      data: { username, password },
    });

    if (!response.ok()) {
      throw new Error(`Login API failed: HTTP ${response.status()}`);
    }
  }
}