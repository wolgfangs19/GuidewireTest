import { test, expect } from '@playwright/test';


test.beforeEach("TC COMPRA 00 - LOGIN", async({page})=> {

 //paso 1 abrir pagina y validar titulo
    await page.goto("https://practicesoftwaretesting.com/");
    await expect (page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");


    //paso 2 click en iniciar sesion
    await page.getByTestId("nav-sign-in").click();
    //paso 3 llenar us y pass
    await page.getByTestId("email").fill("customer2@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01");
    //paso 4 click iniciar sescion
    await page.getByTestId("login-submit").click();
    //paso 5 validar que llegamos a home

    await expect(page.getByTestId("page-title")).toContainText("Mi cuenta");

    //clici inicio
    await page.getByTestId("nav-home").click();

})

test.afterEach("TC COMPRA 00 - LOGout", async({page})=> {
//codigo de lojout

})

test ('tc03 - compra', async ({page}) => {
   

    //buscar producto 2
    await page.getByTestId ("search-query").fill("Ruler");
    //clicl en buscar
    await page.getByTestId ("search-submit").click();

    //seleccionar un producto aleatorio
    const tarjetas2 = page.locator('[data-test="search_completed"] a.card');
    await expect(tarjetas2.first()).not.toHaveText('');

    //contar cuantas tarjetas hay disponibles
    const canttarjetas2 = await tarjetas2.count();

    if(canttarjetas2 >0) {
        const randomindex = Math.floor(Math.random() * canttarjetas2);
        await tarjetas2.nth(randomindex).click();

    
    }
    else { 
        throw  new Error ('no se encontraron las tarjetas');
    }

    //añadir al carrito
    await page.getByTestId("add-to-cart").click();

    //verificar mensaje de agregado
    const toast2 =page.getByRole('alert',{name: 'Producto añadido al carrito'});
    await expect(toast2).toBeVisible();


     //clici inicio
    await page.getByTestId("nav-home").click();

    //buscar producto
    await page.getByTestId ("search-query").fill("Hammer");
    //clicl en buscar
    await page.getByTestId ("search-submit").click();

    //seleccionar un producto aleatorio
    const tarjetas = page.locator('[data-test="search_completed"] a.card');
    await expect(tarjetas.first()).not.toHaveText('');

    //contar cuantas tarjetas hay disponibles
    const canttarjetas = await tarjetas.count();

    if(canttarjetas >0) {
        const randomindex = Math.floor(Math.random() * canttarjetas);
        await tarjetas.nth(randomindex).click();

    
    }
    else { 
        throw  new Error ('no se encontraron las tarjetas');
    }

    //añadir al carrito
    await page.getByTestId("add-to-cart").click();

    //verificar mensaje de agregado
    const toast =page.getByRole('alert',{name: 'Producto añadido al carrito'});
    await expect(toast).toBeVisible();

    //clicl inicio
    await page.getByTestId("nav-home").click();
    //click carrito de compras
    await page.getByTestId("nav-cart").click();

    //verificar que estamos en la pantalla carrito
    await expect(page.getByRole('button', { name : 'Proceder al pago', exact: true})).toBeVisible();


  

   


});

test ('tc04 - compra2', async ({page}) => {

    //buscar producto 2
    await page.getByTestId ("search-query").fill("Ruler");
    //clicl en buscar
    await page.getByTestId ("search-submit").click();

    //seleccionar un producto aleatorio
    const tarjetas2 = page.locator('[data-test="search_completed"] a.card');
    await expect(tarjetas2.first()).not.toHaveText('');

    //contar cuantas tarjetas hay disponibles
    const canttarjetas2 = await tarjetas2.count();

    if(canttarjetas2 >0) {
        const randomindex = Math.floor(Math.random() * canttarjetas2);
        await tarjetas2.nth(randomindex).click();

    
    }
    else { 
        throw  new Error ('no se encontraron las tarjetas');
    }

    //añadir al carrito
    await page.getByTestId("add-to-cart").click();

    //verificar mensaje de agregado
    const toast2 =page.getByRole('alert',{name: 'Producto añadido al carrito'});
    await expect(toast2).toBeVisible();


     //clici inicio
    await page.getByTestId("nav-home").click();

    //buscar producto
    await page.getByTestId ("search-query").fill("Hammer");
    //clicl en buscar
    await page.getByTestId ("search-submit").click();

    //seleccionar un producto aleatorio
    const tarjetas = page.locator('[data-test="search_completed"] a.card');
    await expect(tarjetas.first()).not.toHaveText('');

    //contar cuantas tarjetas hay disponibles
    const canttarjetas = await tarjetas.count();

    if(canttarjetas >0) {
        const randomindex = Math.floor(Math.random() * canttarjetas);
        await tarjetas.nth(randomindex).click();

    
    }
    else { 
        throw  new Error ('no se encontraron las tarjetas');
    }

    //añadir al carrito
    await page.getByTestId("add-to-cart").click();

    //verificar mensaje de agregado
    const toast =page.getByRole('alert',{name: 'Producto añadido al carrito'});
    await expect(toast).toBeVisible();

    //clicl inicio
    await page.getByTestId("nav-home").click();
    //click carrito de compras
    await page.getByTestId("nav-cart").click();

    //verificar que estamos en la pantalla carrito
    await expect(page.getByRole('button', { name : 'Proceder al pago', exact: true})).toBeVisible();


  

   


});