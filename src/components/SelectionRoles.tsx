"use client";
import React, { useId, useState } from "react";
import Role from "./Role";
import useTypedSelector from "@/hooks/useTypedSelector";
import styles from "@/styles/selection_roles.module.scss";

interface SelectionRolesProps {
  title: string;
}

function SelectionRoles({ title }: SelectionRolesProps) {
  const roles = useTypedSelector((state) => state.roles);
  const selectionId = useId();
  const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());
  return (
    <div className={styles.selection_wrapper}>
      <label className={styles.title} htmlFor={selectionId}>
        {title}
      </label>
      <select
        className={styles.selection}
        multiple
        name="roles"
        id={selectionId}
      >
        {roles.map((role) => {
          return (
            <option selected={selectedRoles.has(role)} key={role} value={role}>
              {role}
            </option>
          );
        })}
      </select>
      <div>
        {roles.map((role) => {
          return (
            <Role
              onClick={() => {
                if (selectedRoles.has(role)) {
                  selectedRoles.delete(role);
                } else {
                  selectedRoles.add(role);
                }
                setSelectedRoles(new Set(selectedRoles));
              }}
              selected={selectedRoles.has(role)}
              key={role}
            >
              {role}
            </Role>
          );
        })}
      </div>
    </div>
  );
}

export default SelectionRoles;
