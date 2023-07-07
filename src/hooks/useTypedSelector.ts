"use client";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStoreType } from "@/state/store";

const useTypedSelector: TypedUseSelectorHook<RootStoreType> = useSelector;

export default useTypedSelector;
