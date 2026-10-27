import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://bc-l2dryrun-lasdapre.lasegunda.epsilon3-andromeda.guidewire.net/BillingCenter.do');


  const nroPoliza='6-41003523-1';
  const nroCuenta='974575';

  // Expect a title "to contain" a substring.
  await expect(page.locator('#Login-LoginScreen-4')).toBeVisible();
  await page.locator('[name="Login-LoginScreen-LoginDV-username"]').fill('su');
  await page.locator('[name="Login-LoginScreen-LoginDV-password"]').fill('gw');
  await page.getByRole('button', {name: 'Iniciar sesión'}).click();

  await expect(page.locator('#gw-pageTitle:has-text("Mis actividades")')).toBeVisible();

  await page.locator('#TabBar-AccountsTab > .gw-action--expand-button > .gw-icon').click();
  await page.getByRole('textbox', { name: 'N.° de cuenta:' }).fill(nroCuenta);
  await page.getByRole('button', { name: 'buscar' }).click();
  
  await expect(page.locator('#gw-pageTitle:has-text("Resumen de cuenta")')).toBeVisible();
  await page.getByRole('button', { name: 'Acciones' }).click();
  await page.locator('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments').hover();
  await page.locator('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments-AccountDetailMenuActions_NewDirectBillPayment').click();

  await expect(page.locator('#gw-pageTitle:has-text("Pagos mediante facturación directa")')).toBeVisible();
  await page.locator('select[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UnappliedFunds"]').selectOption({ label: nroPoliza });
  
  
  //const textoCuota = await page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-0-InvoiceUnpaidAmount').first().innerText();
   const textoCuotaTotal = await page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-InvoiceUnpaidAmountFooter').innerText();
  //limpiamos el string de cualquiersigno
  const numeroLimpio = textoCuotaTotal.replace(/[^0-9.]/g, '');
  //pasamos de string a numero
  const valorNumerico = parseFloat(numeroLimpio); 
  console.log('--- EL NÚMERO CAPTURADO ES:', textoCuotaTotal);
  //hacemos pago parcial
  const pagoParcial = valorNumerico * 0.6;
  //metemos el monto en el box como string
  await page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-Amount"]').fill(pagoParcial.toString());

  await page.locator('select[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UWCompany"]').selectOption({ index: 1 });
  await page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-CollectorEntity"]').fill('780');
  await page.locator('#NewDirectBillPayment-EditDBPaymentScreen-2').click();
  await expect(page.locator('.gw-value-readonly-wrapper',{ hasText: "RODRIGUEZ, ROBERTO HUGO" })).toBeVisible();
  await page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-ConsignmentNumber"]').fill('2047594');
   

  const hoy = new Date();
// 2. Extraemos el Año (AAAA), Mes (MM) y Día (DD) asegurando que tengan dos dígitos
const anio = hoy.getFullYear(); // Devuelve por ejemplo 2026
const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
const dia = String(hoy.getDate()).padStart(2, '0');
// 3. Unimos todo en una constante con formato AAAAMMDD
const fechaFormateada = `${anio}${mes}${dia}`; 
await page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-paymentLot"]').fill(fechaFormateada);
//await page.locator('#NewDirectBillPayment-EditDBPaymentScreen-Update').click();

});


