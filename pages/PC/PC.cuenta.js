export  class CuentaPagepc {

    constructor (page){
    this.page=page
    this.cuentaMessagepc = page.locator('.gw-vw--value.gw-align-h--left .gw-value-readonly-wrapper');
    this.nuevaSolicitudButton = page.locator('.gw-action--inner', { hasText: 'Nueva solicitud' });
    
    }


}