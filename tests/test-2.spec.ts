import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bc-l2dryrun-lasdapre.lasegunda.epsilon3-andromeda.guidewire.net/BillingCenter.do');
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).fill('su');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('gw');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.locator('#TabBar-AccountsTab > .gw-action--expand-button > .gw-icon').click();
  await page.getByRole('textbox', { name: 'N.° de cuenta:' }).fill('2560');
  await page.getByRole('button', { name: 'buscar' }).click();
});