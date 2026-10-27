import { test, expect } from '@playwright/test';


test ('tc01 - inicio  happy path', async ({page}) => {
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

    // tener la lista de elementos
    const itemsAntes = page.getByTestId("product-name");
    await expect(itemsAntes.first()).not.toHaveText('');
    const primerTextoinicial = await itemsAntes.first().innerText();
    console.log(primerTextoinicial);

    //ordenar
    await page.getByTestId("sort").selectOption({label:'Nombre (A - Z)'});

    //validar
    const items = page.getByTestId("product-name");
    await expect(items.first()).not.toHaveText(primerTextoinicial);
    const nombreProductos = await items.allTextContents();
    console.log(nombreProductos);

    //validar que se ordena
    //1 obtener textos limpios de espacios
    const actualTitles = (await items.allTextContents()).map(text => text.trim());
    //2 copia del arreglo y orden alfabetico
    const expectedTitles = [...actualTitles].sort((a,b) => a.localeCompare(b));
    //3 validar arreglo original igual a ordenado
    expect(actualTitles).toEqual(expectedTitles);


});