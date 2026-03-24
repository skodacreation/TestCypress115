import { oi } from "@ordino.ai/ordino-engine";
import { OrdinoHomePage } from "./OrdinoHomePage";

/**
 * @class ordino.ai sample page-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const loginPage = new OrdinoLoginPage();
 * ```
 */
export class OrdinoLoginPage {

    private txt_username = '#username';
    private txt_password = '#password';
    private btn_login = '#login-button';

    private txt_error = '#username-helper-text';

    /**
     * Method to set base url
     * @return OrdinoLoginPage()
     */
    public visitUrl() {
        oi.ui.visit("/"); // Visit the base URL defined in Ordino config
        return this;
    }

    /**
     * Method to enter username
     * @param username - The username to be entered
     * @return OrdinoLoginPage()
     */
    public step_enterUsername(username: string) {
        oi.ui.textbox(this.txt_username).clearAndType(username);
        return this;
    }

    /**
     * Method to enter password
     * @param password - The password to be entered
     * @return OrdinoLoginPage()
     */
    public step_enterPassword(password: string) {
        oi.ui.textbox(this.txt_password).enterText(password);
        return this;
    }

    public validate_login_error() {
        oi.ui.label(this.txt_error).assertText("Enter a valid email");
        return this;
    }

    /**
     * Method to click the login button and re-direct home-page
     * @returns  OrdinoHomePage()
     */
    public step_clickLogin() {
        oi.ui.button(this.btn_login).click();
        return new OrdinoHomePage();
    }


}