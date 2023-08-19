import styled from "styled-components";

interface FlexWrapperProps {
  direction: 'row' | 'column';
  height?: number,
  gap?: number
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  height: ${({height}) => height + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({direction}) => direction};
  gap: ${({gap}) => gap + 'px'}
`