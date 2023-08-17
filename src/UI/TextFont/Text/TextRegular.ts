import styled, {css} from "styled-components";
import {TextProps} from "../interface";

const textRegularStyles = css<TextProps> `
  font-weight: 400;
  text-align: left;
  color: ${({color = "black"}) => color };
`

export const TextRegular15 = styled.div`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.23999999463558197px;
  ${textRegularStyles}
`

export const TextRegular14 = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.23999999463558197px;
  ${textRegularStyles}
`

export const TextRegular13 = styled.div`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.07999999821186066px;
  ${textRegularStyles}
`