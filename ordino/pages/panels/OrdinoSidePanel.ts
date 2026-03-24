import { oi } from "@ordino.ai/ordino-engine";

/**
 * @class ordino.ai sample panel-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const homePage = new OrdinoSidePanel();
 * ```
 */
export class OrdinoSidePanel {

    private txt_search = "//input[@placeholder='Search']";
    private btn_menu = "//ul[@class='oxd-main-menu']//span"

    /**
     * Search and find menu option
     * @param options - The menu option selection
     * @return void
     */
    public step_searchOption(options: string) {
        oi.ui.textbox(this.txt_search).enterText(options);
        oi.ui.wait(3000)
        // @ts-ignore - sample usage of cypress pure scripting
        oi.ui.button(this.btn_menu).clickFirst();
    }
}