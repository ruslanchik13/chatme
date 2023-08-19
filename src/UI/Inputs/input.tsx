import styled, {css} from "styled-components";
import {borderMedium} from "@/styles/variables";
import {InputProps} from "./types";
import ErrorText from "@/UI/ErrorText/ErrorText";
import React from "react";
import {Div} from "@/UI/Div/Div";

const smallScale = css`
  height: 40px;
  padding: 8px 16px 8px 16px;
`

const mediumScale = css`
  height: 56px;
  padding: 16px;
`

export const StyledInput = styled.input<InputProps>`
  ${({scale}) => scale === 'small' ? smallScale : mediumScale};
  width: 100%;
  ${borderMedium};
  background-color: rgba(201, 204, 209, 0.24);
  font-weight:  ${({fw}) => fw};
  font-size:  ${({fs}) => fs + 'px'};
  line-height:  ${({lh}) => lh + 'px'};
`
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
     errText,
     width,
     scale,
     ...props
   }, ref) => {
    return (
      <Div width={width} {...props} position={"relative"}>
        <StyledInput ref={ref} type={"text"} width={width} scale={scale} {...props}/>
        <ErrorText>
          {errText}
        </ErrorText>
      </Div>
    )
  })

