import {FC} from 'react';
import {Input} from "@/UI";
import {InputProps} from "./types";

interface MessageInputProps extends InputProps{}

export const MessageInput: FC<MessageInputProps> = ({width, scale}) => {
  return (
    <div>
      <Input width={width} scale={scale}/>
    </div>
  );
};

