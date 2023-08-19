import React from "react";
import {IMargin, Margin} from "@/UI/Margin/Margin";
import styled from "styled-components";

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>, IMargin {
  children: React.ReactNode,
  width?: number,
  height?: number,
  position?: string
}
export const Div = styled.div<DivProps>`
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};
  ${Margin};
  position: ${({position}) => position};
`