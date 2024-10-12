import { jwtDecode } from "jwt-decode";

export const jwtTokenDecode = (token: string) => {
  return jwtDecode(token);
};
