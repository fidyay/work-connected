import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import { getJWTBody } from "@/functions/JWT";
import userModel from "@/db/models/user";
import organizationModel from "@/db/models/organization";
import { NextResponse } from "next/server";
import { type CurrentUser } from "@/state/currentUserSlice";

export async function GET(req: Request) {
  const token = cookies().get("token");
  if (!token) redirect("/authorization/login");
  const tokenValue = token.value;
  const tokenBody = getJWTBody(tokenValue);
  try {
    const organizationDoc = await organizationModel.findOne({
      name: tokenBody.organization,
    });
    if (organizationDoc) {
      const userDoc = await userModel.findOne({
        names: tokenBody.username,
        organization: organizationDoc.id,
      });
      if (userDoc) {
        const resp: CurrentUser = {
          id: userDoc.id,
          names: userDoc.names,
          organization: organizationDoc.name,
          organizationId: organizationDoc.id,
          roles: userDoc.roles,
        };
        return NextResponse.json(resp);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
