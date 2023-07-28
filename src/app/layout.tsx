import React from "react";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import ReduxProvider from "@/components/ReduxProvider";
import "@/styles/global.scss";
import "@/db/mongodb";

export const metadata: Metadata = {
  title: "Work Connected",
  description: "Video conference and chat web application",
};

const roboto = Roboto({
  subsets: ["cyrillic-ext", "latin-ext"],
  style: "normal",
  weight: "400",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
