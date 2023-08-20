import styled, {css} from "styled-components";
import {borderFull} from "@/styles/variables";
import {IMargin, Margin} from "@/UI/Margin/Margin";

interface AvatarProps extends IMargin{
  size: string;
}

const sizeStyles = (size: string) =>
  ({
    Size24: css`width: 24px;height: 24px;`,
    Size32: css`width: 32px;height: 32px;`,
    Size40: css`width: 40px;height: 40px;`,
    Size56: css`width: 56px;height: 56px;`,
    Size72: css`width: 72px;height: 72px;`,
    Size96: css`width: 96px;height: 96px;`
  }[size])



export const Avatar = styled.div<AvatarProps>`
  ${borderFull};
  ${({size}) => sizeStyles(size)};
  background-color: black;
  ${Margin};
`