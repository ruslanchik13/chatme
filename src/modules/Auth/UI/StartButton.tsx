import React, {FC} from 'react';
import {StyledButton, StyledButtonProps, TextSemiBold15} from "@/UI";

interface StartButtonProps extends StyledButtonProps {
  children: React.ReactNode,
}

const StartButton: FC<StartButtonProps> = ({children, size, variant, ...props}) => {
  return (
    <StyledButton size={size} variant={variant} {...props}>
      <TextSemiBold15>
        {children}
      </TextSemiBold15>
    </StyledButton>
  );
};

export default StartButton;