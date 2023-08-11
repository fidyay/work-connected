import { sign, verify } from "jsonwebtoken";

const JWTKey = process.env.JWT_PRIVATE_KEY as string;

interface JWTBody {
  username: string;
  organization: string;
  password: string;
}

export function generateJWT(body: JWTBody) {
  return sign(body, JWTKey);
}

export function getJWTBody(jwt: string) {
  return verify(jwt, JWTKey) as JWTBody;
}
