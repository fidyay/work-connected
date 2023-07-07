"use client";
// eslint-disable-next-line no-restricted-imports
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";

type DispatchFunc = () => AppDispatch;
const useTypedDispatch: DispatchFunc = useDispatch;

export default useTypedDispatch;
