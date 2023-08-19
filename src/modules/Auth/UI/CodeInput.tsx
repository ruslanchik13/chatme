import {useRef, ChangeEvent, useState, KeyboardEvent} from "react";
import {FlexWrapper, Input} from "@/UI";
import {Div} from "@/UI/Div/Div";


export const CodeInput = () => {

  const [code, setCode] = useState<string[]>([])
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const {value} = e.target;
    const maxLength = 1;

    value ? code[index] = value : code[index] = ''
    setCode([...code]);

    if (value.length === maxLength && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (!code[index] && e.key === 'Backspace' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    }
  }
  return (
    <Div mb={32}>
      <form>
        <FlexWrapper gap={8} direction={'row'}>
          <Input
            ref={(el) => (inputRefs.current[0] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
          />
          <Input
            ref={(el) => (inputRefs.current[1] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
          />
          <Input
            ref={(el) => (inputRefs.current[2] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 2)}
            onKeyDown={(e) => handleKeyDown(e, 2)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
            mr={8}
          />
          <Input
            ref={(el) => (inputRefs.current[3] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 3)}
            onKeyDown={(e) => handleKeyDown(e, 3)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
          />
          <Input
            ref={(el) => (inputRefs.current[4] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 4)}
            onKeyDown={(e) => handleKeyDown(e, 4)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
          />
          <Input
            ref={(el) => (inputRefs.current[5] = el!)}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(e, 5)}
            onKeyDown={(e) => handleKeyDown(e, 5)}
            scale={"medium"}
            width={47}
            fw={700} fs={24} lh={32}
          />
        </FlexWrapper>
      </form>
    </Div>
  );
};

