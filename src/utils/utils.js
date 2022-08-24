import {
  API_KEY,
  API_URL,
  STOCK_CANDLE_URL,
  STOCK_PROFILE_URL,
} from "./constants";

export const hasSpecials = (str) => {
  const specials = /[^A-Za-z ]/g;
  return specials.test(str);
};

export const strTooLong = (str) => {
  return str.length > 35;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const toUnixTime = (date) => {
  if (date) {
    return Math.floor(date.getTime() / 1000);
  }
};

export const unixToDate = (unixTime) => {
  if (unixTime) {
    return new Date(unixTime * 1000);
  }
};

export const dateToString = (date) => {
  if (date) {
    let dateStr =
      padStr(date.getFullYear()) +
      "-" +
      padStr(1 + date.getMonth()) +
      "-" +
      padStr(date.getDate()) +
      " " +
      padStr(date.getHours()) +
      ":" +
      padStr(date.getMinutes()) +
      ":" +
      padStr(date.getSeconds());
    return dateStr;
  }
};

export const unixToString = (unixTime) => {
  if (unixTime) {
    return dateToString(unixToDate(unixTime));
  }
};

export const padStr = (i) => {
  return i < 10 ? "0" + i : "" + i;
};

export const questionOrAnd = (url) => {
  return url.includes("?") ? "&" : "?";
};

export const isEmptyObject = (object) => {
  if (object) {
    return Object.entries(object).length === 0;
  }
  return true;
};

export const makeCompanySymbolArray = (symbols) => {
  const array = symbols.split(" ");
  return array.filter((e) => String(e).trim());
};

export const makeUniqueObjectArray = (objects) => {
  const stringSet = new Set();
  const resultArr = [];
  for (let o of objects) {
    if (!isEmptyObject(o)) {
      stringSet.add(JSON.stringify(o));
    }
  }
  for (let s of stringSet) {
    resultArr.push(JSON.parse(s));
  }
  return resultArr;
};

export const createFetchUrlForCompanyProfile = (symbol) => {
  let fetchUrl = API_URL + STOCK_PROFILE_URL;
  if (symbol && !hasSpecials(symbol) && !strTooLong(symbol)) {
    fetchUrl += "?symbol=" + symbol.toUpperCase() + "&token=" + API_KEY;
  }
  return fetchUrl;
};

export const createFetchUrlForPriceHistory = async (
  symbol,
  resolution,
  from,
  to
) => {
  let fetchUrl = API_URL + STOCK_CANDLE_URL;
  if (!hasSpecials(symbol) && !strTooLong(symbol)) {
    fetchUrl +=
      "?symbol=" +
      symbol.toUpperCase() +
      "&resolution=" +
      resolution +
      "&from=" +
      toUnixTime(from) +
      "&to=" +
      toUnixTime(to) +
      "&token=" +
      API_KEY;
  }
  return fetchUrl;
};
