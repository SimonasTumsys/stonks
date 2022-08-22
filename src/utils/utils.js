export function hasSpecials(str) {
  const specials = /[^A-Za-z ]/g;
  return specials.test(str);
}

export function strTooLong(str) {
  return str.length > 35;
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function toUnixTime(date) {
  if (date !== null) {
    return date.getTime() / 1000;
  }
}

export function questionOrAnd(url) {
  return url.includes("?") ? "&" : "?";
}
