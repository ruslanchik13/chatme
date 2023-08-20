import styled, {css} from "styled-components";
import {TextProps} from "../types";
import {Margin} from "@/UI/Margin/Margin";

const textBoldStyles = css<TextProps>`
  text-align: ${({align }) => align  } | left;
  font-weight: 700;
  color: ${({color }) => color };
  ${Margin}
`

export const TextBold24 = styled.div<TextProps>`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.36000001430511475px;
  ${textBoldStyles}
`

export const TextBold20 = styled.div<TextProps>`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.3799999952316284px;
  ${textBoldStyles}
`

export const TextBold17 = styled.div<TextProps>`
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.4099999964237213px;
  ${textBoldStyles}
`