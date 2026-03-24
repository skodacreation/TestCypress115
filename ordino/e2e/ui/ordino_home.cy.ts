import { ordinoSuite } from "@ordino.ai/ordino-engine";
import { OrdinoLoginPage } from "../../pages/OrdinoLoginPage";

const loginPage = new OrdinoLoginPage();

ordinoSuite(
  "Ordino Home Dashboard - Test Suite",{ tags: ["@reg", "@home"] },() => {

    it.only("Test - Verify Profile Logout", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("admin@platform.com")
        .step_enterPassword("admin")
        .step_clickLogin()
        .step_profileOption();
    });

    it("Test - Verify Given Menu Search Selection", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("admin@platform.com")
        .step_enterPassword("admin")
        .step_clickLogin()
        .step_searchOption("Leave")
        .step_profileOption();
    });
  }
);