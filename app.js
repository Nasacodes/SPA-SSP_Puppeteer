 const puppeteer = require('puppeteer');

 (async function (url) { 
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();  
  await page.goto(url);

  await page.waitForSelector("#gh-ac")
  await page.type('#gh-ac', 'Nike', { delay: 100 })
  await page.click('.btn.btn-prim.gh-spr')
  await page.waitForNavigation({waitUntil: 'networkidle0' })
  const pgn1 = await page.evaluate(() => {
      const bodyPage = document.querySelector('.s-page.no-touch.skin-large.srp--grid-view.no-touch.skin-large.gh-1199.gh-flex')
      return bodyPage.innerHTML
  })
  const firstUrl = await page.url();
  console.log({
      pgn1, firstUrl
  })

  await page.waitForSelector(".pagination__items")
  await page.setDefaultNavigationTimeout(0)
  await page.click('.pagination__next')
  const pgn2 = await page.content(() => {
      const bodyPage = document.querySelector('.s-page.no-touch.skin-large.srp--grid-view.no-touch.skin-large.gh-1199.gh-flex')
      return bodyPage.textContent
  })
  const secondUrl = await page.url();
  console.log({
    pgn2, secondUrl
    })

  await page.waitForSelector(".pagination__items")
  await page.click('.pagination__next')
  await page.setDefaultNavigationTimeout(0)
  const pgn3 = await page.content(() => {
      const bodyPage = document.querySelector('.s-page.no-touch.skin-large.srp--grid-view.no-touch.skin-large.gh-1199.gh-flex')
      return bodyPage.textContent
  })
  const thirdUrl = await page.url();
  console.log({
    pgn3, thirdUrl
    })

  await page.waitForSelector(".pagination__items")
  await page.click('.pagination__next')
  await page.setDefaultNavigationTimeout(0)
  const pgn4 = await page.content(() => {
      const bodyPage = document.querySelector('.s-page.no-touch.skin-large.srp--grid-view.no-touch.skin-large.gh-1199.gh-flex')
      return bodyPage.textContent
  })
  const fourthUrl = await page.url();
  console.log({
    pgn4, fourthUrl
    })


  await page.waitForSelector(".pagination__items")
  await page.click('.pagination__next')
  await page.setDefaultNavigationTimeout(0)
  const pgn5 = await page.content(() => {
      const bodyPage = document.querySelector('.s-page.no-touch.skin-large.srp--grid-view.no-touch.skin-large.gh-1199.gh-flex')
      return bodyPage.textContent
  })
  const fifthUrl = await page.url();

  console.log({
      pgn5, fifthUrl
  });
  await browser.close();
 })('https://www.ebay.com/');
