import { ordinoSuite } from "@ordino.ai/ordino-engine";
import { OrdinoLoginPage } from "../../pages/OrdinoLoginPage";

const loginPage = new OrdinoLoginPage();

ordinoSuite(
  "Ordino Auth Sign-in - Test Suite",
  { tags: ["@reg", "@auth"] },
  () => {
    it("Test - Auth Sign-in with Valid Credentials", { tags: "@smk" }, () => {
      loginPage
        .visitUrl()
        .step_enterUsername("admin@platform.com")
        .step_enterPassword("admin")
        .step_clickLogin();
    });

    it("Test - Auth Sign-in with In-Valid Credentials", () => {
      loginPage
        .visitUrl()
        .step_enterUsername("AdminX")
        .step_enterPassword("wrongPassword")
        .validate_login_error()
        .step_clickLogin();
    });
  }
);