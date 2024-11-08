import { Builder, By, until } from 'selenium-webdriver';  // Pastikan ini ada
import { assert } from 'chai';

describe('Melakukan testing UI', function () {
    this.timeout(5000); // Perpanjang timeout menjadi 5000ms
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('testing get user by id', async function () {

        // Buka halaman login lokal
        await driver.get('http://localhost:3001'); // pastikan URL ini sesuai

        // Isi username dan password yang benar
        const inputUserId = await driver.findElement(By.id('userId'));
        await inputUserId.sendKeys("1");

        const submitButton = await driver.findElement(By.id('submit'));
        await submitButton.click();

        const userNameElement = await driver.wait(until.elementLocated(By.id('userName')), 5000)
        await driver.wait(until.elementTextIs(userNameElement, "Name: Miftahul Rizqha"), 5000);

        // Verifikasi apakah nama pengguna ditampilkan dengan benar
        const userName = await userNameElement.getText();
        console.log("Retrieved text:", userName);
        assert.strictEqual(userName, "Name: Miftahul Rizqha"); // Perbaiki perbandingan
    });
});
