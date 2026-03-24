import { oi } from "@ordino.ai/ordino-engine";
import { OrdinoSidePanel } from "./panels/OrdinoSidePanel";

/**
 * @class ordino.ai sample page-object structure.
 *
 * ```ts
 * run typedoc --help for a list of supported languages
 * const homePage = new OrdinoHomePage();
 * ```
 */
export class OrdinoHomePage {

    private btn_profile = '.MuiAvatar-root';
    private btn_logout = '#logout-button';

    private sidePanel;

    // Load supporting re-usable panels to launch complete screen
    constructor() {
        this.sidePanel = new OrdinoSidePanel();
    }


    /**
     * Search and find menu option
     * @param options - The menu option selection
     * @return void
     */
    public step_searchOption(options: string) {
        this.sidePanel.step_searchOption(options);
        return this;
    }

    /**
     * Dynamic element binding for choose profile option
     * @param options - The profile option selection
     * @return OrdinoHomePage()
     */
    public step_profileOption() {
        oi.ui.button(this.btn_profile).click();
        oi.ui.button(this.btn_logout).click();
        return this;
    }
}