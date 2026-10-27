import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/BC/BC.LoginPage';
import { CuentaPagepc } from '../pages/PC/PC.cuenta';
import { EscritorioPagePC } from '../pages/PC/PC.Escritorio';
import { SolicitudesNuevaspc } from '../pages/PC/PC.solicitudesNuevas';

test('Emitir poliza', async ({ page }) => {
    await page.goto('https://pc-l2dryrun-lasdapre.lasegunda.epsilon3-andromeda.guidewire.net/');

    const login = new LoginPage(page);
    const escritorioPage = new EscritorioPagePC(page);
    const cuentaPage = new CuentaPagepc(page);
    const solicitudesNuevas = new SolicitudesNuevaspc(page);
    
    
    await login.hacerLogin('su','gw');
    
    escritorioPage.buscarCuentaPC('8541');

    /*
    cuentaPage.nuevaSolicitudButton.click();


    solicitudesNuevas.seleccionarAgente('4527');
    solicitudesNuevas.seleccionarProducto('Automotor');  
    solicitudesNuevas.botonSiguiente.click();
    solicitudesNuevas.botonSiguiente.click();
    solicitudesNuevas.seleccionarAnio('2020');
    solicitudesNuevas.seleccionarModelo('uno',2);
    solicitudesNuevas.seleccionarPlanCobertura('kkjhg');
    solicitudesNuevas.gestionarValorDeclarado();
    solicitudesNuevas.ingresarPatenteAleatoria();
    solicitudesNuevas.ingresarMotorAleatorio();
    solicitudesNuevas.ingresarChasisAleatorio();
    solicitudesNuevas.botonSiguiente.click();
    solicitudesNuevas.emitirPolizaConfirmando();

*/






});