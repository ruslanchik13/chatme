import * as React from "react";
import {IMargin} from "@/UI/Margin/Margin";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, IMargin {
  scale: "small" | "medium",
  width: number,
  errText?: string,
  fw?: number,
  fs?: number,
  lh?: number

}