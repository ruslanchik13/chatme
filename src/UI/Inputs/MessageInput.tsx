import {FC} from 'react';
import {Input} from "@/UI";
import {InputProps} from "./types";

interface MessageInputProps extends InputProps{}

export const MessageInput: FC<MessageInputProps> = ({width, scale, ...props}) => {
  return (
    <>
      <Input {...props} width={width} scale={scale} />
    </>
  );
};

