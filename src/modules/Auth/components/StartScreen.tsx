import LogoSVG from "@/assets/img/LogoSVG";
import {TextBold24, TextRegular15} from "@/UI/TextFont";
import StartButton from "../UI/StartButton";
import styled from "styled-components";
import {FlexWrapper} from "@/UI";

const StyledText = styled.div`
  color: rgba(113, 116, 122, 1);
  text-align: center;
`

const StartScreen = () => {
  return (
    <FlexWrapper direction={"column"}>
      <LogoSVG/>
      <TextBold24>Openland</TextBold24>
      <TextRegular15>
        <StyledText>
          Modern social network <br/> built for you, not advertisers
        </StyledText>
      </TextRegular15>
      <StartButton mb={100} size={"large"} variant={"primary"}>
        Continue with phone
      </StartButton>
      <StartButton variant={'secondary'} size={"large"}>
        Continue with email
      </StartButton>
    </FlexWrapper>
  );
};

export default StartScreen;