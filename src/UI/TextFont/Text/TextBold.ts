import styled, {css} from "styled-components";
import {TextProps} from "../interface";

const textBoldStyles = css<TextProps>`
  text-align: left;
  font-weight: 700;
  color: ${({color = "black"}) => color };
`

export const TextBold24 = styled.div`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.36000001430511475px;
  ${textBoldStyles}
`

export const TextBold20 = styled.div`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.3799999952316284px;
  ${textBoldStyles}
`

export const TextBold17 = styled.div`
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.4099999964237213px;
  ${textBoldStyles}
`