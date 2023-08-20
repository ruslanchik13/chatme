import styled from "styled-components";

interface FlexWrapperProps {
  direction?: 'row' | 'column';
  height?: number,
  gap?: number,
  justify?: string,
  align?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  height: ${({height}) => height + 'px'};
  display: flex;
  justify-content: ${({justify = "center"}) => justify};
  align-items: ${({align = "center"}) => align};
  flex-direction: ${({direction}) => direction};
  gap: ${({gap}) => gap + 'px'}
`