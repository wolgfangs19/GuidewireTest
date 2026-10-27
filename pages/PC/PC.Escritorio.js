import { expect } from '@playwright/test';
export  class EscritorioPagePC {

    constructor(page){
        this.page= page;
        this.escritoriomessagespc = page.locator('#gw-pageTitle:has-text("Mi resumen")');
        this.buscarCuentaButtonpc = page.locator('#TabBar-AccountTab [data-gw-click="toggleSubMenu"]');
        this.buscarCuentaBoxpc = page.locator('input[name="TabBar-AccountTab-AccountTab_AccountNumberSearchItem"]');
        this.buscarButtonpc = page.locator('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem_Button');
    }

    async buscarCuentaPC (nrocuenta) {
        await this.buscarCuentaButtonpc.click();
        await this.buscarCuentaBoxpc.fill(nrocuenta);
        await this.buscarButtonpc.click();


    }

}