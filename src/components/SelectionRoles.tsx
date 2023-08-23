"use client";
import React, { useId, useState } from "react";
import Role from "./Role";
import useTypedSelector from "@/hooks/useTypedSelector";
import styles from "@/styles/selection_roles.module.scss";
import { type EntityId } from "@reduxjs/toolkit";

interface SelectionRolesProps {
  title: string;
}

function SelectionRoles({ title }: SelectionRolesProps) {
  const roles = useTypedSelector((state) => state.roles.roles);
  const selectionId = useId();
  const [selectedRoles, setSelectedRoles] = useState<Set<EntityId>>(new Set());
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
        {roles.ids.map((roleId) => {
          return (
            <option
              selected={selectedRoles.has(roleId)}
              key={roleId}
              value={roleId}
            >
              {roles.entities[roleId]?.name}
            </option>
          );
        })}
      </select>
      <div>
        {roles.ids.map((roleId) => {
          return (
            <Role
              onClick={() => {
                if (selectedRoles.has(roleId)) {
                  selectedRoles.delete(roleId);
                } else {
                  selectedRoles.add(roleId);
                }
                setSelectedRoles(new Set(selectedRoles));
              }}
              selected={selectedRoles.has(roleId)}
              key={roleId}
            >
              {roles.entities[roleId]?.name as string}
            </Role>
          );
        })}
      </div>
    </div>
  );
}

export default SelectionRoles;
