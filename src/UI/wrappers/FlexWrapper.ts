import styled from "styled-components";

interface FlexWrapperProps {
  direction: 'row' | 'column';
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({direction}) => direction};
`