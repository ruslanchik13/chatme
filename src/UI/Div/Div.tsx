import React from "react";
import {IMargin, Margin} from "@/UI/Margin/Margin";
import styled, {RuleSet} from "styled-components";
import {Border, IBorder} from "@/UI/Border/Border";

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>, IMargin, IBorder {
  children?: React.ReactNode,
  width?: number,
  height?: number,
  position?: string,
  bgColor?: string,
  shadow?: RuleSet<object>,
  top?: number
}
export const Div = styled.div<DivProps>`
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};
  ${Margin};
  ${Border};
  ${({shadow}) => shadow}
  top: ${({top}) => top};
  position: ${({position}) => position};
  background-color: ${({bgColor}) => bgColor};
`