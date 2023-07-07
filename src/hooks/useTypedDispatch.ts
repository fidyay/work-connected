"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";

type DispatchFunc = () => AppDispatch;
const useTypedDispatch: DispatchFunc = useDispatch;

export default useTypedDispatch;
