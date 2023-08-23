import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import { getJWTBody } from "@/functions/JWT";
import roleModel from "@/db/models/role";
import organizationModel from "@/db/models/organization";
import { NextResponse } from "next/server";
import { type Role } from "@/state/rolesSlice";

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
      const roleDocs = await roleModel.find({
        organization: organizationDoc.id,
      });
      if (roleDocs) {
        const resp: Role[] = roleDocs.map((roleDoc) => {
          const {
            id,
            name,
            controledBy,
            chatActions: chatPermissions,
          } = roleDoc;
          return { id, name, controledBy, chatPermissions };
        });
        return NextResponse.json(resp);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
