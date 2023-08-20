import {Div} from "@/UI/Div/Div";
import {FC} from "react";
import ArrowToLeftSvg from "@/assets/img/ArrowToLeftSvg";

interface BackProps{
  func: (n: (prev: number) => number) => void;
}

export const Back: FC<BackProps> = ({func}) => {


  return (
    <Div mb={24} mt={24} ml={24}>
      <div onClick={() => func((prev): number => prev - 1)}>
        <ArrowToLeftSvg />
      </div>
    </Div>
  );
};

