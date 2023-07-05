"use client";
import store from "@/state/store";
import { Provider } from "react-redux";
import React from "react";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
