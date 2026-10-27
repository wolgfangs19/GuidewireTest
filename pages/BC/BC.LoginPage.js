import { expect } from '@playwright/test';
export class LoginPage {

    constructor(page){
        this.page= page;
        this.LoginScreen = page.locator('#Login-LoginScreen-4');
        this.usuarioBox = page.locator('[name="Login-LoginScreen-LoginDV-username"]');
        this.passBox = page.locator('[name="Login-LoginScreen-LoginDV-password"]');
        this.loginButton = page.getByRole('button', {name: 'Iniciar sesión'});

    }


   async hacerLogin(usuario, contrasenia) {
        // 1. Esperamos a que la pantalla de login esté visible
        await this.LoginScreen.waitFor({ state: 'visible' });

        // 2. Llenamos los campos usando las propiedades del constructor
        await this.usuarioBox.fill(usuario);
        await this.passBox.fill(contrasenia);

        // 3. Hacemos clic en el botón para ingresar
        await this.loginButton.click();

   }


}
