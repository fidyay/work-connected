import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const url = request.url;
  redirect(url + "authorization/create-organization");
}
