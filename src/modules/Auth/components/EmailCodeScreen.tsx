import {FlexWrapper, TextBold24, TextRegular15} from "@/UI";
import StartButton from "@/modules/Auth/UI/StartButton";
import {StyledText} from "@/modules/Auth/UI/StyledText";
import {CodeInput} from "@/modules/Auth/UI/CodeInput";
import {FC} from "react";
import {Back} from "@/modules/Auth/components/Back";

interface EmailCodeScreenProps {
  mail: string,
  setMailSc: (n: (n: number) => number) => void,
}

const EmailCodeScreen: FC<EmailCodeScreenProps> = ({mail, setMailSc}) => {
  return (
    <>
      <Back func={setMailSc}/>
      <FlexWrapper height={1080} direction={"column"}>
        <TextBold24 mb={8}>
          Enter sign-in code
        </TextBold24>
        <TextRegular15 mb={32}>
          <StyledText>
            We just sent it to {mail} <br/> Haven’t received? Resend
          </StyledText>
        </TextRegular15>
        <CodeInput/>
        <StartButton variant={"primary"} size={"large"}>
          Next
        </StartButton>
      </FlexWrapper>
    </>

  );
};

export default EmailCodeScreen;