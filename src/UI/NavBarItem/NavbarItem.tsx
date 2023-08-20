import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "@/UI";
import {IMargin} from "@/UI/Margin/Margin";
import {Div} from "@/UI/Div/Div";
import {Counter} from "@/UI/NavBarItem/Counter";
import {Link} from "react-router-dom";

interface NavbarItemProps
  extends React.HTMLAttributes<HTMLDivElement>, IMargin {
  img: React.ReactNode,
  activeImg: React.ReactNode
  isActive?: boolean,
  counter?: number,
  link: string,
}

const ActiveTab = styled.div`
  width: 2px;
  height: 48px;
  border-radius: 0 100px 100px 0;
  background-color: rgba(36, 139, 242, 1);
  margin-left: -20px;
`

const NavbarItem: FC<NavbarItemProps> =
  ({
     img,
     activeImg,
     isActive,
     onClick,
     counter,
     link,
   }) => {
    return (
      <Div position={"relative"}>
        <Link to={link}>
          <FlexWrapper gap={18} onClick={onClick} height={56} justify={"start"} direction={"row"}>
            <Counter>{counter}</Counter>
            {isActive ? <ActiveTab/> : ''}
            {isActive ? activeImg : img}
          </FlexWrapper>
        </Link>
      </Div>

    );
  };

export default NavbarItem;