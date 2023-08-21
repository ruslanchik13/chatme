import {css} from "styled-components";

export interface IMargin {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
}

export const Margin = css<IMargin>`
  //margin-top: ${({mt}) => mt ? mt + "px" : 0};
  margin-bottom: ${({mb}) => mb ? mb + "px" : 0};
  margin-left: ${({ml}) => ml ? ml + "px" : 0};
  margin-right: ${({mr}) => mr ? mr + "px" : 0};
  ${({mt}) => mt ? "margin-top: " + mt + "px" : ''}
`