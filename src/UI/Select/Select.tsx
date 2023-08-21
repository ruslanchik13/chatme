import {FC, useState} from 'react';
import styled, {css} from "styled-components";
import {borderMedium, shadowLow} from "@/styles/variables";
import {Div, DivProps} from "@/UI/Div/Div";
import {Margin} from "@/UI/Margin/Margin";
import {Border} from "@/UI/Border/Border";

const small = css`
  height: 40px;
  padding: 8px 16px 8px 16px;
  ${borderMedium}
`

const medium = css`
  height: 56px;
  padding: 8px 16px 8px 16px;
  ${borderMedium}
`

interface SelectProps extends DivProps, SSelectProps {
  values: string[];
}

interface SSelectProps extends DivProps {
  size: 'small' | 'medium';
}

const SSelect = styled.div<SSelectProps>`
  ${Margin};
  ${Border};
  ${({size}) => size === 'small' ? small : medium};
  width: ${({width}) => width + "px"};
  background-color: rgba(201, 204, 209, 0.24);
`

interface SDivProps extends DivProps {
  active: boolean,
}

const SDiv = styled.div<SDivProps>`
  display: ${({active}) => active ? "block" : "none"};
`


const Select: FC<SelectProps> = ({size, values, width}) => {

  const [value , setValue] = useState<string>('Month')
  const [active, setActive] = useState(false)

  return (
    <Div position={"relative"}>
      <SSelect width={width} onClick={() => setActive(prev => !prev)} size={size}>
        {value}
      </SSelect>
      <SDiv active={active}  width={width} bgColor={"white"} top={0} position={"absolute"} shadow={shadowLow}>
        <Div width={width} height={8}/>
        {values.map((item) =>
          <SDiv onClick={() => setValue(item)} active={active}>{item}</SDiv>
        )}
      </SDiv>

    </Div>

  );
};

export default Select;