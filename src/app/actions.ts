"use server";
import userModel from "@/db/models/user";
import organizationModel from "@/db/models/organization";
import roleModel from "@/db/models/role";
import chatModel from "@/db/models/chat";
import { redirect } from "next/navigation";
import { generateJWT } from "@/functions/JWT";
import { cookies } from "next/dist/client/components/headers";
import setTokenToClient from "@/functions/setTokenToClient";

export async function createOrganisation(data: FormData) {
  const organizationName = (data.get("organization name") as string).trim();
  const creatorName = (data.get("creator's names") as string).trim();
  const password = (data.get("creator's password") as string).trim();
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
  const token = generateJWT({
    username: creatorName,
    organization: organizationName,
    password,
  });
  setTokenToClient(token);
  redirect("/");
}

export async function createUser(data: FormData) {
  const userNames = (data.get("user names") as string).trim();
  const password = (data.get("password") as string).trim();
  const roles = data.getAll("roles");
  console.log(userNames, password, roles);
}

export async function login(data: FormData) {
  let shouldRedirect: boolean = false;
  try {
    const userNames = (data.get("user names") as string).trim();
    const password = (data.get("password") as string).trim();
    const organizationName = (data.get("organization name") as string).trim();
    const userOrganization = await organizationModel.findOne({
      name: organizationName,
    });
    if (userOrganization) {
      const userDoc = await userModel.findOne({
        names: userNames,
        organization: userOrganization.id,
      });
      if (userDoc) {
        if (userDoc.validPassword(password)) {
          const token = generateJWT({
            username: userNames,
            organization: organizationName,
            password,
          });
          setTokenToClient(token);
          shouldRedirect = true;
        }
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (shouldRedirect) {
      redirect("/");
    }
  }
}
