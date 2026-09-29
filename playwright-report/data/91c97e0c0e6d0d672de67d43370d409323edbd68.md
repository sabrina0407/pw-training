# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-recovery-basket.spec.ts >> test-recovery-basket
- Location: tests\test-recovery-basket.spec.ts:3:5

# Error details

```
Error: Basket API login failed: HTTP 500
```

# Test source

```ts
  1  | import { type APIRequestContext } from '@playwright/test';
  2  | 
  3  | const API_URL =
  4  |   'https://simplecommerce1nz5qlcr-sabrina.functions.fnc.fr-par.scw.cloud/api';
  5  | 
  6  | export class BasketAPI {
  7  |   constructor(private readonly request: APIRequestContext) {}
  8  | 
  9  |   async clearBasket(username: string, password: string) {
  10 |     const loginResponse = await this.request.post(`${API_URL}/login/`, {
  11 |       data: { username, password },
  12 |     });
  13 | 
  14 |     if (!loginResponse.ok()) {
> 15 |       throw new Error(`Basket API login failed: HTTP ${loginResponse.status()}`);
     |             ^ Error: Basket API login failed: HTTP 500
  16 |     }
  17 | 
  18 |     try {
  19 |       const basketResponse = await this.request.delete(`${API_URL}/basket/`);
  20 |       if (!basketResponse.ok()) {
  21 |         throw new Error(`Basket API clear failed: HTTP ${basketResponse.status()}`);
  22 |       }
  23 |     } finally {
  24 |       const logoutResponse = await this.request.delete(`${API_URL}/login/`);
  25 |       if (!logoutResponse.ok()) {
  26 |         throw new Error(`Basket API logout failed: HTTP ${logoutResponse.status()}`);
  27 |       }
  28 |     }
  29 |   }
  30 | }
```