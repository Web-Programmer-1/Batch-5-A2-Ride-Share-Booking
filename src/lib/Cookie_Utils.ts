import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  _id: string;
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export const getUserIdFromCookie = (): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; access-token=`);
  if (parts.length !== 2) return null;

  const token = parts.pop()?.split(';').shift();
  if (!token) return null;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded._id;
  } catch (err) {
    console.error("JWT decode error:", err);
    return null;
  }
};
