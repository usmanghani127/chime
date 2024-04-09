// @ts-nocheck
import {RouteKeys} from '../src/navigation/routes';
import {element} from 'detox';

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

describe('Sign In Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
    await sleep(3000);
  });

  it('should have background view', async () => {
    await expect(
      element(by.id(`${RouteKeys.SIGN_IN}: background`)),
    ).toBeVisible();
  });

  it('should have wrapper view', async () => {
    await expect(element(by.id(`${RouteKeys.SIGN_IN}: wrapper`))).toBeVisible();
  });

  it('should have chime logo', async () => {
    await expect(
      element(by.id(`${RouteKeys.SIGN_IN}: chimeLogo`)),
    ).toBeVisible();
  });

  it('should have email input field', async () => {
    await expect(
      element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)),
    ).toBeVisible();
  });

  it('should have password input field', async () => {
    await expect(
      element(by.id(`${RouteKeys.SIGN_IN}: passwordInputField`)),
    ).toBeVisible();
  });

  it('should have help button', async () => {
    await expect(element(by.id(`${RouteKeys.SIGN_IN}: help`))).toBeVisible();
  });

  it('should have sign in button', async () => {
    await expect(element(by.text('Log In'))).toBeVisible();
  });

  it('should show alert on tapping help button', async () => {
    await element(by.id(`${RouteKeys.SIGN_IN}: help`)).tap();
    await expect(element(by.text('Hang On'))).toBeVisible();
    await element(by.text('OK')).tap();
  });

  it('should show input error when no email is entered', async () => {
    await element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)).clearText();
    await element(
      by.id(`${RouteKeys.SIGN_IN}: emailInputField`),
    ).tapReturnKey();
    await element(
      by.id(`${RouteKeys.SIGN_IN}: passwordInputField`),
    ).tapReturnKey();
    await expect(element(by.text('Email is required'))).toBeVisible();
  });

  it('should show error when wrong email is entered', async () => {
    await element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)).clearText();
    await element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)).typeText(
      'abcd@gmail.com',
    );
    await element(
      by.id(`${RouteKeys.SIGN_IN}: emailInputField`),
    ).tapReturnKey();
    await element(
      by.id(`${RouteKeys.SIGN_IN}: passwordInputField`),
    ).tapReturnKey();
    await waitFor(element(by.text('Yikes!')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Try Again')).tap();
  });

  it('should show error when wrong password is entered', async () => {
    await element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)).clearText();
    await element(by.id(`${RouteKeys.SIGN_IN}: emailInputField`)).typeText(
      'atuny0@sohu.com',
    );
    await element(by.id(`${RouteKeys.SIGN_IN}: passwordInputField`)).typeText(
      '1234',
    );
    await element(
      by.id(`${RouteKeys.SIGN_IN}: passwordInputField`),
    ).tapReturnKey();
    await waitFor(element(by.text('Yikes!')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.text('Try Again')).tap();
  });

  it('should navigate to Home screen when correct credentials are entered', async () => {
    await element(
      by.id(`${RouteKeys.SIGN_IN}: passwordInputField`),
    ).clearText();
    await element(by.id(`${RouteKeys.SIGN_IN}: passwordInputField`)).typeText(
      '9uQFF1Lh',
    );
    await element(
      by.id(`${RouteKeys.SIGN_IN}: passwordInputField`),
    ).tapReturnKey();
    await waitFor(element(by.text('Success')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
