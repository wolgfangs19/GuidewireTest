import { expect } from '@playwright/test';
export  class CuentaPage {

    constructor (page){
    this.page=page
    this.cuentaMessage = page.locator('#gw-pageTitle:has-text("Resumen de cuenta")');
    this.accionButton = page.getByRole('button', { name: 'Acciones' });
    this.nuevoPagoButton = page.locator('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments');
    this.nuevoPagoDirectoButton = page.locator('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments-AccountDetailMenuActions_NewDirectBillPayment')


    }
async nuevoPago (){
    await this.accionButton.click();
    await this.nuevoPagoButton.hover();
    await this.nuevoPagoDirectoButton.click();

}

 }

