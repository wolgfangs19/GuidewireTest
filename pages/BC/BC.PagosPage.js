
import { expect } from '@playwright/test';
export class PagosPage{

    constructor(page){
    this.page=page;
    this.pagosPageMessage = page.locator('#gw-pageTitle:has-text("Pagos mediante facturación directa")');
    this.nroPolizaButton = page.locator('select[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UnappliedFunds"]');
    this.montoBox=page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-Amount"]');
    this.empresaButton=page.locator('select[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UWCompany"]');
    this.entidadButton=page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-CollectorEntity"]');
    this.pageClick=page.locator('#NewDirectBillPayment-EditDBPaymentScreen-2');
    this.entidadMessages=page.locator('.gw-value-readonly-wrapper',{ hasText: "RODRIGUEZ, ROBERTO HUGO" });
    this.remesaButton=page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-ConsignmentNumber"]');
    this.loteButton=page.locator('input[name="NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-paymentLot"]');
    this.ejecutarPagoButton=page.locator('#NewDirectBillPayment-EditDBPaymentScreen-Update');

    }

    async PagoParcial (nroPoliza){
        await this.nroPolizaButton.selectOption({ label: nroPoliza });
        const textoCuota = await this.page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-0-InvoiceUnpaidAmount').first().innerText();
        //limpiamos el string de cualquiersigno
        const numeroLimpio = textoCuota.replace(/[^0-9.]/g, '');
        //pasamos de string a numero
        const valorNumerico = parseFloat(numeroLimpio); 
        //hacemos pago parcial
        const pagoParcial = valorNumerico * 0.6;
        //metemos el monto en el box como string
        await this.montoBox.fill(pagoParcial.toString());
        await this.empresaButton.selectOption({ index: 1 });
        await this.entidadButton.fill('780');
        await this.pageClick.click();
        await expect(this.entidadMessages).toBeVisible();
        await this.remesaButton.fill('2047594');

    const hoy = new Date();
    // 2. Extraemos el Año (AAAA), Mes (MM) y Día (DD) asegurando que tengan dos dígitos
    const anio = hoy.getFullYear(); // Devuelve por ejemplo 2026
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
    const dia = String(hoy.getDate()).padStart(2, '0');
    // 3. Unimos todo en una constante con formato AAAAMMDD
    const fechaFormateada = `${anio}${mes}${dia}`; 

    await this.loteButton.fill(fechaFormateada);
    await this.ejecutarPagoButton.click();

    }

    async PagoCuota (nroPoliza){
        await this.nroPolizaButton.selectOption({ label: nroPoliza });
        const textoCuota = await this.page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-0-InvoiceUnpaidAmount').innerText();
        //limpiamos el string de cualquiersigno
        const numeroLimpio = textoCuota.replace(/[^0-9.]/g, '');
        //pasamos de string a numero
        const valorNumerico = parseFloat(numeroLimpio); 
        //metemos el monto en el box como string
        await this.montoBox.fill(valorNumerico.toString());
        await this.empresaButton.selectOption({ index: 1 });
        await this.entidadButton.fill('780');
        await this.pageClick.click();
        await expect(this.entidadMessages).toBeVisible();
        await this.remesaButton.fill('2047594');

    const hoy = new Date();
    // 2. Extraemos el Año (AAAA), Mes (MM) y Día (DD) asegurando que tengan dos dígitos
    const anio = hoy.getFullYear(); // Devuelve por ejemplo 2026
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
    const dia = String(hoy.getDate()).padStart(2, '0');
    // 3. Unimos todo en una constante con formato AAAAMMDD
    const fechaFormateada = `${anio}${mes}${dia}`; 

    await this.loteButton.fill(fechaFormateada);
    await this.ejecutarPagoButton.click();

    }

    async PagoTotalPoliza (nroPoliza){
        await this.nroPolizaButton.selectOption({ label: nroPoliza });
        const textoCuotaTotal = await this.page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-InvoiceUnpaidAmountFooter').innerText()
        //limpiamos el string de cualquiersigno
        const numeroLimpio = textoCuotaTotal.replace(/[^0-9.]/g, '');
        //pasamos de string a numero
        const valorNumerico = parseFloat(numeroLimpio); 
        //metemos el monto en el box como string
        await this.montoBox.fill(valorNumerico.toString());
        await this.empresaButton.selectOption({ index: 1 });
        await this.entidadButton.fill('780');
        await this.pageClick.click();
        await expect(this.entidadMessages).toBeVisible();
        await this.remesaButton.fill('2047594');

    const hoy = new Date();
    // 2. Extraemos el Año (AAAA), Mes (MM) y Día (DD) asegurando que tengan dos dígitos
    const anio = hoy.getFullYear(); // Devuelve por ejemplo 2026
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
    const dia = String(hoy.getDate()).padStart(2, '0');
    // 3. Unimos todo en una constante con formato AAAAMMDD
    const fechaFormateada = `${anio}${mes}${dia}`; 

    await this.loteButton.fill(fechaFormateada);
    await this.ejecutarPagoButton.click();

    }

      async PagoExceso (nroPoliza){
        await this.nroPolizaButton.selectOption({ label: nroPoliza });
        const textoCuotaTotal = await this.page.locator('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groupsAggInvoice-InvoiceUnpaidAmountFooter').innerText()
        //limpiamos el string de cualquiersigno
        const numeroLimpio = textoCuotaTotal.replace(/[^0-9.]/g, '');
        //pasamos de string a numero
        const valorNumerico = parseFloat(numeroLimpio);
        const pagoExceso = valorNumerico * 1.1; 
        //metemos el monto en el box como string
        await this.montoBox.fill(pagoExceso.toString());
        await this.empresaButton.selectOption({ index: 1 });
        await this.entidadButton.fill('780');
        await this.pageClick.click();
        await expect(this.entidadMessages).toBeVisible();
        await this.remesaButton.fill('2047594');

    const hoy = new Date();
    // 2. Extraemos el Año (AAAA), Mes (MM) y Día (DD) asegurando que tengan dos dígitos
    const anio = hoy.getFullYear(); // Devuelve por ejemplo 2026
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso sumamos 1
    const dia = String(hoy.getDate()).padStart(2, '0');
    // 3. Unimos todo en una constante con formato AAAAMMDD
    const fechaFormateada = `${anio}${mes}${dia}`; 

    await this.loteButton.fill(fechaFormateada);
    //await this.ejecutarPagoButton.click();

    }


}
