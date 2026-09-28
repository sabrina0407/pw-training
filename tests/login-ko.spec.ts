import { test, expect } from '../support/fixtures';

test('login-ko', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login('sabsebbane@hotmail.fr', 'test');

  await expect(loginPage.loginError).toBeVisible();
});