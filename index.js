const puppeteer = require("puppeteer");

(async function main() {
  try {
    // Configures puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    // Navigate to whatsapp
    await page.goto("https://web.whatsapp.com/");
    await page.waitForSelector("._13NKt");
    await delay(5000);

    // Change to contact you want to send messages to
    const contactName = "Pedrinho";
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector("._2vbn4");

    // Finds the message bar and focuses on it
    const editor = await page.$("div[tabindex='-1']");
    await editor.focus();

    // Amount of messages you want to send
    const amountOfMessages = 100;

    // Loops through cycle of sending messages
    for (let i = 0; i < amountOfMessages; i++) {
      await page.evaluate(() => {
        const message = "Yo";
        document.execCommand("insertText", false, message);
      });
      await page.click("span[data-testid='send']");
      await delay(500);
    }
  } catch (error) {
    console.log(error);
  }
})();

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
