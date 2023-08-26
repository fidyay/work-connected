"use client";
import React, { useState } from "react";
import Role from "./Role";
import useTypedSelector from "@/hooks/useTypedSelector";
import styles from "@/styles/selection_roles.module.scss";
import { type EntityId } from "@reduxjs/toolkit";

interface SelectionRolesProps {
  title: string;
}

function SelectionRoles({ title }: SelectionRolesProps) {
  const roles = useTypedSelector((state) => state.roles.roles);
  const [selectedRoles, setSelectedRoles] = useState<Set<EntityId>>(new Set());
  return (
    <fieldset className={styles.selection_wrapper}>
      <legend className={styles.title}>{title}</legend>
      <div>
        {roles.ids.map((roleId) => {
          return (
            <Role
              value={roleId as string}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  if (selectedRoles.has(roleId)) {
                    selectedRoles.delete(roleId);
                  } else {
                    selectedRoles.add(roleId);
                  }
                  setSelectedRoles(new Set(selectedRoles));
                }
              }}
              selected={selectedRoles.has(roleId)}
              key={roleId}
            >
              {roles.entities[roleId]?.name as string}
            </Role>
          );
        })}
      </div>
    </fieldset>
  );
}

export default SelectionRoles;
