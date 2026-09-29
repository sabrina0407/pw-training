import { test, expect } from '../support/fixtures';

test('login-ko', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login('test@test.com', 'test');

  await expect(loginPage.loginError).toBeVisible();
});