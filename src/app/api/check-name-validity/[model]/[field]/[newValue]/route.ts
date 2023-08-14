import { type NameQueryParams } from "@/hooks/useCheckFieldUniqueness";
import { NextResponse } from "next/server";
import userModel from "@/db/models/user";
import organizationModel from "@/db/models/organization";
import roleModel from "@/db/models/role";
import chatModel from "@/db/models/chat";
import { cookies } from "next/dist/client/components/headers";
import { getJWTBody } from "@/functions/JWT";

type Model =
  | typeof userModel
  | typeof organizationModel
  | typeof roleModel
  | typeof chatModel;

export async function GET(
  req: Request,
  { params }: { params: NameQueryParams }
) {
  const { field, newValue, model: modelName } = params;
  let model: Model;
  try {
    switch (modelName) {
      case "User":
        model = userModel;
        break;
      case "Organization":
        model = organizationModel;
        break;
      case "Role":
        model = roleModel;
        break;
      case "Chat":
        model = chatModel;
        break;
      default:
        return NextResponse.json({ result: false });
    }
    if (model === organizationModel) {
      const result = await model.findOne({ [field]: newValue });
      if (!result) return NextResponse.json({ result: true });
      else return NextResponse.json({ result: false });
    } else {
      const creatorsCookies = cookies().get("token");
      if (!creatorsCookies)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      const jwtBody = getJWTBody(creatorsCookies.value);
      const userOrg = await organizationModel.findOne({
        name: jwtBody.organization,
      });
      const result = await model.findOne({
        [field]: newValue,
        organization: userOrg.id,
      });
      if (!result) return NextResponse.json({ result: true });
      else return NextResponse.json({ result: false });
    }
  } catch (e) {
    console.error(e);
    NextResponse.json({ error: e });
  }
}
