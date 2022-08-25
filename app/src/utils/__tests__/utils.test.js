import * as utils from "../utils";
import {
  API_KEY,
  API_URL,
  STOCK_CANDLE_URL,
  STOCK_PROFILE_URL,
} from "../constants";

test("check if proper string has special characters", () => {
  expect(utils.hasSpecials("no specials       ")).toBe(false);
});

test("check if improper string has special characters", () => {
  expect(utils.hasSpecials("aaabc#")).toBe(true);
});

test("check if normal string is too long", () => {
  expect(utils.strTooLong("123456789")).toBe(false);
});

test("check if long string is too long", () => {
  expect(utils.strTooLong("12345678912345678912345678912345678912346789")).toBe(
    true
  );
});

test("check if classNames filters booleans", () => {
  expect(utils.classNames(true ? "a" : "b", "c")).toBe("a c");
});

test("check if date is converted correctly to unix", () => {
  expect(utils.toUnixTime(new Date(2022, 8, 25, 19, 1, 9, 0))).toBe(1664121669);
});

test("check if unit is converted correctly to date", () => {
  expect(utils.unixToDate(1664121669)).toStrictEqual(
    new Date(2022, 8, 25, 19, 1, 9, 0)
  );
});

test("check if date is being converted to string correctly", () => {
  expect(utils.dateToString(new Date(1996, 6, 18, 20, 0, 0, 0))).toBe(
    "1996-07-18 20:00:00"
  );
});

test("check if unix correctly converts to string date", () => {
  expect(utils.unixToString(1664121669)).toBe("2022-09-25 19:01:09");
});

test("check if string is padded correctly", () => {
  expect(utils.padStr(9)).toBe("09");
});

test("check if correctly checks for empty object", () => {
  expect(utils.isEmptyObject({})).toBe(true);
});

test("check if correct symbol array is made", () => {
  expect(
    utils.makeCompanySymbolArray("amc ABC msft        ntlx     ibm")
  ).toStrictEqual(["amc", "ABC", "msft", "ntlx", "ibm"]);
});

test("check if makes array of unique objects", () => {
  expect(
    utils.makeUniqueObjectArray([{ a: "a" }, { a: "a" }, { b: "b" }])
  ).toStrictEqual([{ a: "a" }, { b: "b" }]);
});

test("check if proper fetch url for company profile is created", () => {
  expect(utils.createFetchUrlForCompanyProfile("aMc")).toBe(
    API_URL + STOCK_PROFILE_URL + "?symbol=AMC&token=" + API_KEY
  );
});

test("check if proper fetch url for price history is created", () => {
  expect(
    utils.createFetchUrlForPriceHistory(
      "IBm",
      "5",
      new Date(1996, 5, 18, 23, 0, 0, 0),
      new Date(1996, 6, 18, 23, 0, 0, 0)
    )
  ).toBe(
    API_URL +
      STOCK_CANDLE_URL +
      "?symbol=IBM&resolution=5&from=835128000&to=837720000&token=" +
      API_KEY
  );
});

test("check if resolution value is properly identified as minutes", () => {
  expect(utils.isMinutes("5")).toBe(true);
});
