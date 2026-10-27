import { expect } from '@playwright/test';
export  class EscritorioPage {

    constructor(page){
        this.page= page;
        this.escritoriomessages = page.locator('#gw-pageTitle:has-text("Mis actividades")');
        this.buscarCuentaButton = page.locator('#TabBar-AccountsTab > .gw-action--expand-button > .gw-icon');
        this.buscarCuentaBox = page.getByRole('textbox', { name: 'N.° de cuenta:' });
        this.buscarButton = page.getByRole('button', { name: 'buscar' });
    }

    async buscarCuenta (nrocuenta) {
        await this.buscarCuentaButton.click();
        await this.buscarCuentaBox.fill(nrocuenta);
        await this.buscarButton.click();


    }

}




  
  
 