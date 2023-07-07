"use client";
import React from "react";
import Cross from "./svg/Cross";

interface RoleProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

function Role({ children, onClick }: RoleProps) {
  return (
    <span onClick={onClick}>
      {"@" + children}
      {onClick && <Cross />}
    </span>
  );
}

export default Role;
