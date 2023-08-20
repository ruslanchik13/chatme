import React, {FC} from "react";
import styled from "styled-components";
import {Div, DivProps} from "@/UI/Div/Div";
import {TextRegular15} from "@/UI";
import {Link} from "react-router-dom";
import {IMargin} from "@/UI/Margin/Margin";

interface BarItemProps
  extends React.HTMLAttributes<HTMLDivElement>, IMargin {
  img: React.ReactNode,
  text: string,
  link: string,
  isActive: boolean,
}

const StyledItem = styled.div<DivProps>`
  width: 360px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: ${({bgColor}) => bgColor};
`

const BarItem: FC<BarItemProps> = ({img, link, text, isActive, onClick}) => {
  return (
    <Link to={`/settings${link}`}>
      {isActive ? <StyledItem onClick={onClick} bgColor={"rgba(57, 143, 229, 1)"}>
          <Div>{img}</Div>
          <Div ml={16}>
            <TextRegular15>
              {text}
            </TextRegular15>
          </Div>
        </StyledItem> :
        <StyledItem onClick={onClick}>
          <Div>{img}</Div>
          <Div ml={16}>
            <TextRegular15>
              {text}
            </TextRegular15>
          </Div>
        </StyledItem>
      }


    </Link>

  );
};

export default BarItem;