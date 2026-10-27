import { test, expect, type Page} from '@playwright/test';
import { LoginPage } from '../pages/BC/BC.LoginPage';
import { PagosPage } from '../pages/BC/BC.PagosPage';
import { EscritorioPage } from '../pages/BC/BC.EscritorioPage';
import { CuentaPage } from '../pages/BC/BC.CuentaPage';



test ('pago parcial', async ({page}) => {
    await page.goto('https://bc-l2dryrun-lasdapre.lasegunda.epsilon3-andromeda.guidewire.net/BillingCenter.do');
    const nroCuenta='974575';
    const nroPoliza ='6-41001425-1';

    const login = new LoginPage(page);
    await login.hacerLogin('su','gw');

    const escritorio = new EscritorioPage(page);
    await escritorio.buscarCuenta(nroCuenta);

    const cuenta = new CuentaPage(page);
    await cuenta.nuevoPago();

    const pago = new PagosPage(page);
    //await pago.PagoParcial(nroPoliza);
    //await pago.PagoCuota(nroPoliza);    
    //await pago.PagoTotalPoliza(nroPoliza);
    await pago.PagoExceso(nroPoliza);

});