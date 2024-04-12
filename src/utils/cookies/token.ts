import { deleteCookie, getCookie, setCookie } from "cookies-next";
export const JWT_ACCESS_TOKEN_KEY = "access_token";
export const JWT_REFRESH_TOKEN_KEY = "refresh_token";

export const setTokenInCookies = (
  accessToken: string,
  refreshToken: string
): void => {
  setCookie(JWT_ACCESS_TOKEN_KEY, accessToken);
  setCookie(JWT_REFRESH_TOKEN_KEY, refreshToken);
};

export const deleteTokenFromCookie = () => {
  deleteCookie(JWT_ACCESS_TOKEN_KEY);
  deleteCookie(JWT_REFRESH_TOKEN_KEY);
};

export const getTokenFromCookie = () => {
  const accessToken = getCookie(JWT_ACCESS_TOKEN_KEY);
  return accessToken;
};
