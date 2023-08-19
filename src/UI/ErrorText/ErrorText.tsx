import React, {FC} from 'react';
import {TextRegular13} from "@/UI";
import {Div} from "@/UI/Div/Div";

interface ErrorTextProps{
  children: React.ReactNode
}

const ErrorText: FC<ErrorTextProps> = ({children}) => {
  return (
    <Div position={"absolute"}>
      <TextRegular13 ml={16} mt={8} color={"red"}>
        {children}
      </TextRegular13>
    </Div>

  );
};

export default ErrorText;