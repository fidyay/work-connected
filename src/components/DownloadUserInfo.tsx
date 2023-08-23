"use client";
import { type ReactNode, useEffect } from "react";
import useTypedSelector from "@/hooks/useTypedSelector";
import useTypedDispatch from "@/hooks/useTypedDispatch";
import getCookieValue from "@/functions/getCookieValueOnClient";
import { fetchCurrentUser } from "@/state/currentUserSlice";
import { fetchRoles } from "@/state/rolesSlice";

interface DownloadUserInfoProps {
  children: ReactNode;
}

function DownloadUserInfo({ children }: DownloadUserInfoProps) {
  const dispatch = useTypedDispatch();
  const currentUserLoading = useTypedSelector(
    (state) => state.currentUser.loading
  );
  const rolesLoading = useTypedSelector((state) => state.roles.loading);
  const pending =
    currentUserLoading === "pending" || rolesLoading === "pending";
  useEffect(() => {
    const token = getCookieValue("token");
    if (token) {
      try {
        if (currentUserLoading === "idle") {
          dispatch(fetchCurrentUser());
        }
        if (rolesLoading === "idle") {
          dispatch(fetchRoles());
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [currentUserLoading, dispatch, rolesLoading]);
  return <>{children}</>;
}

export default DownloadUserInfo;
