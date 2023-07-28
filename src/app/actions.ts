"use server";
import userModel from "@/db/models/user";
import organizationModel from "@/db/models/organization";
import roleModel from "@/db/models/role";
import chatModel from "@/db/models/chat";
import { redirect } from "next/navigation";

export async function createOrganisation(data: FormData) {
  const organizationName = data.get("organization name") as string;
  const creatorName = data.get("creator's names") as string;
  const password = data.get("creator's password") as string;
  const adminRole = new roleModel({
    name: "admin",
    chatActions: [],
    controledBy: null,
  });
  const organization = new organizationModel({
    name: organizationName,
    chats: [],
    roles: [adminRole._id],
  });
  adminRole.organization = organization._id;
  const user = new userModel({
    names: creatorName,
    organization: organization._id,
    roles: [adminRole._id],
  });
  user.setPassword(password);
  organization.users = [user._id];
  await Promise.all([organization.save(), user.save(), adminRole.save()]);
  redirect("/");
}
