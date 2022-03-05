const puppeteer = require("puppeteer");

async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    /*
    await page.setUserAgent(
       Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
    )
    */
    await page.goto("https://web.whatsapp.com/");
    await page.waitForSelector("._1MXsz");
    await delay(5000);
  } catch (error) {
    console.log(error);
  }
}

function delay() {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
