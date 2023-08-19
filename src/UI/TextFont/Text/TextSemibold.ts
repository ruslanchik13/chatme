import styled, {css} from "styled-components";
import {TextProps} from "../types";
import {Margin} from "@/UI/Margin/Margin";

const textSemiBoldStyles = css<TextProps>`
  font-weight: 600;
  text-align: left;
  color: ${({color }) => color };
  ${Margin}
`

export const TextSemiBold15 = styled.div<TextProps>`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.23999999463558197px;
  ${textSemiBoldStyles}
`

export const TextSemiBold14 = styled.div<TextProps>`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.23999999463558197px;
  ${textSemiBoldStyles}
`
export const TextSemiBold13 = styled.div<TextProps>`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.07999999821186066px;
  ${textSemiBoldStyles}
`