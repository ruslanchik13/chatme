import LogoSVG from "@/assets/img/LogoSVG";
import {TextBold24, TextRegular15} from "@/UI/TextFont";
import StartButton from "../UI/StartButton";
import {FlexWrapper} from "@/UI";
import {StyledText} from "@/modules/Auth/UI/StyledText";
import {FC} from "react";

interface StartScreenProps {
  setPhoneSc: (n: number) => void,
  setMailSc: (n: number) => void
}

const StartScreen: FC<StartScreenProps> = ({setPhoneSc, setMailSc}) => {
  return (
    <FlexWrapper height={1080} direction={"column"}>
      <LogoSVG/>
      <TextBold24 mt={16} mb={8}>Openland</TextBold24>
      <TextRegular15 mb={32}>
        <StyledText>
          Modern social network <br/> built for you, not advertisers
        </StyledText>
      </TextRegular15>
      <StartButton onClick={() => setPhoneSc(0)} width={240} mb={16} size={"large"} variant={"primary"}>
        Continue with phone
      </StartButton>
      <StartButton onClick={() => setMailSc(1)} width={240} variant={'secondary'} size={"large"}>
        Continue with email
      </StartButton>
    </FlexWrapper>
  );
};

export default StartScreen;