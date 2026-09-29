import { type APIRequestContext } from '@playwright/test';

const API_URL =
  'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/api';

export class BasketAPI {
  constructor(private readonly request: APIRequestContext) {}

  async clearBasket(username: string, password: string) {
    const loginResponse = await this.request.post(`${API_URL}/login/`, {
      data: { username, password },
    });

    if (!loginResponse.ok()) {
      throw new Error(`Basket API login failed: HTTP ${loginResponse.status()}`);
    }

    try {
      const basketResponse = await this.request.delete(`${API_URL}/basket/`);
      if (!basketResponse.ok()) {
        throw new Error(`Basket API clear failed: HTTP ${basketResponse.status()}`);
      }
    } finally {
      const logoutResponse = await this.request.delete(`${API_URL}/login/`);
      if (!logoutResponse.ok()) {
        throw new Error(`Basket API logout failed: HTTP ${logoutResponse.status()}`);
      }
    }
  }
}