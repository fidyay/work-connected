"use client";

type CookieValue = string | null;
function getCookieValue(valueName: string): CookieValue {
  let value: CookieValue = null;
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.includes(valueName));
  if (cookie) value = cookie.split("=")[1];
  return value;
}

export default getCookieValue;
