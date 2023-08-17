"use server";
import { cookies } from "next/dist/client/components/headers";

function setTokenToClient(token: string) {
  // set 5 days to expire
  const date = new Date(Date.now() + 86400e3 * 5);
  cookies().set("token", token, { expires: date });
}

export default setTokenToClient;
