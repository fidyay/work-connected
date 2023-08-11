import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const token = cookies().get("token");
  if (!token) redirect("/authorization/create-organization");
}
