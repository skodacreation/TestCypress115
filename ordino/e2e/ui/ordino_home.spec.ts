import { test } from '../../fixtures/pages';

test.describe('Ordino Home Dashboard - Test Suite', () => {

    test('Verify Profile Logout', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });  
    
    test('Verify Profile Logout2 ', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });
    
    //skip the test
    test.skip('Verify Profile Logout3 ', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_logout();
    });

    test('Verify Dashboard Title', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_verifyDashboardTitle();
        await homePage.step_verifyDashboardWelcomeText();
    }); 

    test('Verify Dashboard Title 5', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_verifyDashboardTitle();
        await homePage.step_verifyDashboardWelcomeText();
    }); 
    test('Verify Dashboard Title 6', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("admin@platform.com");
        await loginPage.step_enterPassword("admin");
        await loginPage.step_clickLogin();           
        await homePage.step_verifyDashboardTitle();
        await homePage.step_verifyDashboardWelcomeText();
    }); 
    

});