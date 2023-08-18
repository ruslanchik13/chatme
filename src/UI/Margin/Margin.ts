import {css} from "styled-components";

export interface IMargin {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
}

export const Margin = css<IMargin>`
  margin-top: ${({mt}) => mt + "px"};
  margin-bottom: ${({mb}) => mb + "px"};
  margin-left: ${({ml}) => ml + "px"};
  margin-right: ${({mr}) => mr + "px"};
`