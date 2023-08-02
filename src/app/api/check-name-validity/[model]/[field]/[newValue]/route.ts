import { type BodyType as NameQueryParams } from "@/hooks/useCheckFieldUniqueness";
import { NextResponse } from "next/server";
import userModel from "@/db/models/user";
import organizationModel from "@/db/models/organization";
import roleModel from "@/db/models/role";
import chatModel from "@/db/models/chat";

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
    const result = await model.findOne({ [field]: newValue });
    if (!result) return NextResponse.json({ result: true });
    else return NextResponse.json({ result: false });
  } catch (e) {
    console.error(e);
    NextResponse.json({ error: e });
  }
}
