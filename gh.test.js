let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    jest.setTimeout(7000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    jest.setTimeout(7000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(7000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

describe.only("Tests of the pricing page on Github", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/pricing");
  });

  test("Title prising page'", async () => {
    jest.setTimeout(7000);

    const actual = await page.title();
    const expected = "Pricing · Plans for every developer · GitHub";

    expect(actual).toEqual(expected);
  });

  test("Home page visibility", async () => {
    jest.setTimeout(7000);

    const actual = await page.$eval("h1[class='h2-mktg']", (link) => link.textContent);
    const expected = "Get the complete developer platform";

    expect(actual).toContain(expected);
  });
})

test.only("Title issues page'", async () => {
  await page.goto("https://github.com/features/issues");
  jest.setTimeout(7000);

  const actual = await page.title();
  const expected = "GitHub Issues · Project planning for developers · GitHub";

  expect(actual).toEqual(expected);
 });