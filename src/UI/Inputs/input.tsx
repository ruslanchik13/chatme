import styled, {css} from "styled-components";
import {borderMedium} from "@/styles/variables";
import {InputProps} from "./types";

const smallScale = css`
  height: 40px;
  padding: 8px 16px 8px 16px;
`

const mediumScale = css`
  height: 56px;
  padding: 16px;
`

export const Input = styled.input<InputProps>`
  ${({scale}) => scale === 'small' ? smallScale : mediumScale};
  ${({width}) => width};
  ${borderMedium};
  background-color: rgba(201, 204, 209, 0.24);
`