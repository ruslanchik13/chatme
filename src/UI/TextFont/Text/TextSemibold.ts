import styled, {css} from "styled-components";
import {TextProps} from "../interface";

const textSemiBoldStyles = css<TextProps>`
  font-weight: 600;
  text-align: left;
  color: ${({color = "black"}) => color };
`

export const TextSemiBold15 = styled.div`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.23999999463558197px;
  ${textSemiBoldStyles}
`

export const TextSemiBold14 = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.23999999463558197px;
  ${textSemiBoldStyles}
`
export const TextSemiBold13 = styled.div`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.07999999821186066px;
  ${textSemiBoldStyles}
`