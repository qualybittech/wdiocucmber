import { Given, When, Then } from '@wdio/cucumber-framework';
import v2LoginPage from '../pageobjects/v2.login.page';
import allureReporter from '@wdio/allure-reporter'
import v2HomePage from '../pageobjects/v2.home.page';
import utils from '../utils/utils';

Given('I am on V2 Home page', async () => {
  allureReporter.addFeature('Login V2');
  allureReporter.addStory('Story_name');
  await v2LoginPage.v2AppLaunch('/')
})

When(/^I login using (.*) and (.*)/, async (v2useremail,v2password) => {
  await v2LoginPage.v2Login(v2useremail,v2password)
})

Then('I should logged into v2 app sucessfully', async () => {
  await expect(v2LoginPage.loginHeader).toBeDisplayed();
})


When('I navigate to create case', async () => {
  await v2HomePage.navigateToCreateCase();
})

When(/^I upload files (.*)/, async (fileInputPath) => {
  await v2HomePage.uploadFiles(fileInputPath);
})

Then('I should logged into v2 app sucessfully', async () => {
  await v2HomePage.logoutV2();
})

Then('I should navigate and extract title for each page', async () => {
  await utils.getAllLinksTitleCSV(browser.config.baseUrl);
})