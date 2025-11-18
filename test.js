const { Builder, By } = require("selenium-webdriver");

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("file://" + process.cwd() + "/index.html");

    await driver.findElement(By.id("n1")).sendKeys("5");
    await driver.findElement(By.id("n2")).sendKeys("10");

    await driver.findElement(By.id("add")).click();

    let result = await driver.findElement(By.id("res")).getText();
    console.log("Result:", result);

    await driver.quit();
}
test();
