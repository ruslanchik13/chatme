import * as React from "react"
import {StyledButton, StyledButtonProps} from "./StyledButton";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, variant, size, ...props}, ref) => {
    return (
      <StyledButton variant={variant} size={size} ref={ref}{...props}>{children}</StyledButton>
    )
  }
)

export default Button;
