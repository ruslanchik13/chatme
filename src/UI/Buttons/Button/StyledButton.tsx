import styled, {css} from "styled-components";
import {borderFull, borderMedium, opacity48, opacity64} from "../../../styles/variables";

export interface StyledButtonProps {
  variant?: string,
  size: 'medium' | 'large'
}

const mediumSize = css`
  padding: 0 16px 0 16px;
  ${borderFull};
  height: 32px;
`

const largeSize = css`
  padding: 0 24px 0 24px;
  ${borderMedium};
  height: 40px;
`

const variantStyles = (variant = 'primary') =>
  ({
    primary: css`
      background-color: rgba(36, 139, 242, 1);
      color: white;
      &:hover {
        background-color: rgba(51, 153, 255, 1);
      }
      &:active {
        background-color: rgba(22, 119, 217, 1);
      }
    `,
    danger: css`
      background-color: rgba(242, 48, 81, 1);
      color: white;
      &:hover {
        background-color: rgba(255, 64, 96, 1);
      }
      &:active {
        background-color: rgba(217, 33, 64, 1);
      }
    `,
    secondary: css`
      background-color: rgba(201, 204, 209, 0.24);
      color: rgba(113, 116, 122, 1);
      &:hover {
        background-color: rgba(235, 237, 240, 1);
      }
      &:active {
        background-color: rgba(230, 231, 235, 1);
      }
    `,
    ghost: css`
      background-color: transparent;
      color: rgba(113, 116, 122, 1);
      &:hover {
       ${opacity64}
      }
      &:active {
        ${opacity48}
      }
    `
  }[variant]);

export const StyledButton = styled.button<StyledButtonProps>`
  ${({variant}) => variantStyles(variant)};
  ${({size}) => size === 'medium' ? mediumSize : largeSize}
`