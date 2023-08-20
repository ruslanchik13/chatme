import {FlexWrapper, Input, TextBold24, TextRegular15} from "@/UI";
import {Avatar} from "@/UI/Avatar/Avatar";
import {StyledText} from "@/modules/Auth/UI/StyledText";
import StartButton from "@/modules/Auth/UI/StartButton";
import {FC} from "react";
import {Back} from "@/modules/Auth/components/Back";

interface WelcomeScreenProps {
  setMailSc: (n: (n: number) => number) => void,
}

export const WelcomeScreen: FC<WelcomeScreenProps> = ({setMailSc}) => {
  return (
    <>
      <Back func={setMailSc}/>
      <FlexWrapper height={1080} direction={"column"}>
        <TextBold24 mb={8}>
          New account
        </TextBold24>
        <TextRegular15 mb={32}>
          <StyledText>
            Introduce yourself
          </StyledText>
        </TextRegular15>
        <Avatar size={"Size96"} mb={16}/>
        <Input width={320} scale={"medium"} placeholder={"First name"} mb={16}/>
        <Input width={320} scale={"medium"} placeholder={"Last name"} mb={32}/>
        <StartButton variant={"primary"} size={"large"} mb={32}>
          Next
        </StartButton>
        <TextRegular15 align={"center"} color={"rgba(157, 159, 163, 1)"}>
            By creating an account you are accepting our <br/> Terms of service and Privacy policy
        </TextRegular15>
      </FlexWrapper>

    </>
  );
};

