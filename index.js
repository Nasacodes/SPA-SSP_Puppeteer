const puppeteer = require('puppeteer');

(async function (url) { 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();  
  await page.goto(url);
  const title = await page.title();
  const htmlPage = await page.content(() => {
      return htmlPage;
  });

  console.log(title, htmlPage)
  await browser.close();
})('https://brew.sh/');