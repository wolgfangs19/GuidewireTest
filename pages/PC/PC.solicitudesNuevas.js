import { expect } from '@playwright/test';
export  class SolicitudesNuevaspc {

    constructor(page){
        this.page= page;
        this.solicitudesNuevasmessagespc = page.locator('#gw-pageTitle:has-text("Solicitudes nuevas")');
        this.buscarAgenteButtonpc = page.getByRole('button', { name: 'Seleccionar organización...' });
        this.organizacionesMessagespc = page.locator('#gw-pageTitle:has-text("Organizaciones")');
        this.nroAgenteBox = page.getByRole('textbox', { name: 'Código de Productor' });
        this.nombreAgente  = page.getByText('ALEMANDI, HECTOR CARLOS');
        this.seleccionarAgenteButton = page.locator('.gw-label', { hasText: 'Seleccionar' });
        this.tituloTipoPoliza = this.page.getByRole('heading', { name: 'Tipo de póliza' });
        this.desplegableTipoPolizaAU = this.page.locator('select[name$="PolicyType"]');
        this.opcionAutomotores = this.page.locator('option').filter({ hasText: 'Automotores' });
        this.botonSiguiente = this.page.locator('[aria-label="Siguiente"]');
        
        //pagina solicitud
        this.solicitudesInfmessagespc = page.locator('#gw-pageTitle:has-text("Información de Solicitud de Póliza")');
        
        //pagina vehiculos
        this.botonAgregarVehiculo = this.page.locator('[aria-label="Agregar Vehículo"]');
        this.opcionAutosPersonales = this.page.locator('[id$="PrivatePassengerAddMenuItem"]');
        this.desplegableAñoVehiculo = this.page.locator('select[name$="-Year"]');
        this.desplegableMarcaVehiculo = this.page.locator('select[name$="-Make"]');
        this.campoBusquedaModelo = this.page.locator('input[name$="-searchStringInput1"]');
        this.desplegablePlanCobertura = this.page.locator('select[name$="-coveragePlans"]');
        this.campoValorDeclarado = this.page.locator('input[name$="-StatedValue"]');
        this.campoValorSugerido = this.page.locator('.gw-value-readonly-wrapper');
        this.campoPatente = this.page.locator('input[name$="-patente"]');
        this.campoMotor = this.page.locator('input[name$="-motor"]');
        this.campoChasis = this.page.locator('input[name$="-chasisNumber"]');
        this.botonCotizacion = this.page.locator('[aria-label="Cotización"]');

        //cotizacion page
        this.cotizacionmessagespc = page.locator('#gw-pageTitle:has-text("Cotización")');
        this.opcionesContratacionButton = this.page.getByText('Opciones de contratación', { exact: true });
        this.botonEmitirPoliza = this.page.getByText('Emitir la póliza', { exact: true });

        //solicitud contrada
        this.solicitudContratadanmessagespc = page.locator('#gw-pageTitle:has-text("Solicitud Contratada")');
  


    }

    async seleccionarAgente(nroAgente){
        this.buscarAgenteButtonpc.click();
        this.nroAgenteBox.fill(nroAgente);
        await page.getByRole('button', { name: 'Buscar' }).click();
        this.seleccionarAgenteButton.click();


    }

    async seleccionarProducto(nombreProducto) {
    // Armamos todo el flujo encadenado en una sola línea limpia
    await this.page.locator('tr')
      .filter({ hasText: nombreProducto })
      .getByRole('button', { name: 'Elegir' })
      .click();
  }

  async seleccionarAnio(año) {
  // Playwright busca dinámicamente la opción del año que le pases por parámetro
  await this.desplegableAñoVehiculo.selectOption({ label: año.toString() });
}

  async seleccionarModelo(modeloIniciales, numeroDeOpcion) {
    // 1. Escribís "UNO" en el cuadro que definiste en el constructor
    await this.campoBusquedaModelo.fill(modeloIniciales);

      // . Le hacés clic a la opción calculando su posición (-1 para ajustar el índice)
    await page.getByRole('option').nth(numeroDeOpcion - 1).click();
    page.locator('#SubmissionWizard-JobWizardInfoBar').click();
  }
  async seleccionarPlanCobertura(nombrePlan) {
    // .selectOption busca y selecciona el texto exacto que ve el usuario en la pantalla
    await this.desplegablePlanCobertura.selectOption({ label: nombrePlan });
  }

  async gestionarValorDeclarado() {
    // 1. Leemos el valor actual del cuadro de texto abajo
    const valorActual = await this.campoValorDeclarado.inputValue();

    // 2. Si está en "0", ejecutamos la acción
    if (valorActual === '0') {
      // 3. Capturamos el texto de arriba (ej: "$ 15,000,000.00")
      const textoSugerido = await this.campoValorSugerido.innerText();

      // 4. Limpieza: Dejamos solo los números (elimina $, comas y el .00 del final)
      const soloNumeros = textoSugerido.replace(/[^0-9]/g, '').slice(0, -2);

      // 5. Llenamos el casillero abajo con los números limpios ("15000000")
      await this.campoValorDeclarado.fill(soloNumeros);
    }
  }

  async ingresarPatenteAleatoria() {
    // 1. Generamos 3 letras aleatorias
    const letrasDisponibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letrasAleatorias = '';
    for (let i = 0; i < 3; i++) {
      const posicionAzar = Math.floor(Math.random() * letrasDisponibles.length);
      letrasAleatorias += letrasDisponibles.charAt(posicionAzar);
    }

    // 2. Generamos un número aleatorio de 3 dígitos (entre 100 y 999)
    const numerosAleatorios = Math.floor(100 + Math.random() * 900);

    // 3. Unimos ambas partes para formar el formato ZXC123
    const patenteFinal = letrasAleatorias + numerosAleatorios;

    // 4. Escribimos la patente generada en el casillero
    await this.campoPatente.fill(patenteFinal);
  }

   async ingresarMotorAleatorio() {
    // 1. Creamos una variable vacía para ir armando el número de motor
    let motorAleatorio = '';
    // 2. Hacemos un bucle que dé 10 vueltas para meter 10 dígitos individuales
    for (let i = 0; i < 10; i++) {
      // Genera un número entero al azar entre 0 y 9
      const digitoAzar = Math.floor(Math.random() * 10);
      motorAleatorio += digitoAzar;
    }
    // 3. Escribimos los 10 números generados en el casillero del motor
    await this.campoMotor.fill(motorAleatorio);
  }

async ingresarChasisAleatorio() {
    // 1. Variable vacía para armar el número final
    let chasisAleatorio = '';
    // 2. Un bucle de 12 vueltas para generar los 12 dígitos individuales
    for (let i = 0; i < 12; i++) {
      // Genera un dígito al azar entre 0 y 9
      const digitoAzar = Math.floor(Math.random() * 10);
      chasisAleatorio += digitoAzar;
    }
    // 3. Escribimos los 12 números generados en el casillero
    await this.campoChasis.fill(chasisAleatorio);
  }

  async emitirPolizaConfirmando() {
    // 1. Escuchador: Le decimos a Playwright que, si aparece un diálogo, le dé a "Aceptar"
    this.page.once('dialog', async dialog => {
      await dialog.accept(); 
    });
    // 2. Ahora sí, hacemos clic en el botón que definimos en el constructor
    await this.botonEmitirPoliza.click();
  }

}