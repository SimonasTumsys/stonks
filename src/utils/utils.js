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
  if (date !== null) {
    return date.getTime() / 1000;
  }
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

export const isEmptyArray = (array) => {
  if (array) {
    return array.length === 0;
  }
  return true;
};

export const makeCompanySymbolArray = (symbols) => {
  const array = symbols.split(" ");
  return array.filter((e) => String(e).trim());
};
