"use client";
import React, { useId } from "react";
import Role from "./Role";
import useTypedSelector from "@/hooks/useTypedSelector";

interface SelectionRolesProps {
  title: string;
}

function SelectionRoles({ title }: SelectionRolesProps) {
  const roles = useTypedSelector((state) => state.roles);
  const selectionId = useId();
  return (
    <div>
      <label htmlFor={selectionId}>{title}</label>
      <select multiple name="roles" id={selectionId}>
        {roles.map((role) => {
          return (
            <option key={role} value={role}>
              <Role>{role}</Role>
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectionRoles;
