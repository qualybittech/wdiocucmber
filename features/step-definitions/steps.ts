import { Given, When, Then } from '@wdio/cucumber-framework';
import emailyaLoginPage from '../pageobjects/emailya.login.page';

import LoginPage from '../pageobjects/login.page';
import Page from '../pageobjects/page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then('I should logged into emailya app sucessfully', async () => {
  await expect(emailyaLoginPage.loginHeader.toBeExisting());
})

When(/^I login with (.*) and (.*)/, async (useremail,emailyapassword) => {
  await emailyaLoginPage.emailyaLogin(useremail,emailyapassword)
})

Given('I am on emailya login page', async () => {
  await emailyaLoginPage.emailyaAppLaunch('https://www.app.emailya.io/invite')
})

