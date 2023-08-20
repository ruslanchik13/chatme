import StartScreen from "./components/StartScreen";
import {MailScreen} from "@/modules/Auth/components/MailScreen";
import styled from "styled-components";
import {useState} from "react";
import EmailCodeScreen from "@/modules/Auth/components/EmailCodeScreen";
import {WelcomeScreen} from "@/modules/Auth/components/WelcomeScreen";

const HiddenScroll = styled.div`
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const Auth = () => {
  const [mailSc, setMailSc] = useState(0)
  const [phoneSc, setPhoneSc] = useState(0)
  const [mail, setMail] = useState('')

  return (
    <HiddenScroll>
      {!mailSc && !phoneSc ? <StartScreen setPhoneSc={setPhoneSc} setMailSc={setMailSc}/> :
        mailSc === 1 ?
          <MailScreen mail={mail} setMail={setMail} setMailSc={setMailSc}/>
          : mailSc === 2 ?
            <EmailCodeScreen mail={mail} setMailSc={setMailSc}/> :
          mailSc === 3 ? <WelcomeScreen setMailSc={setMailSc}/> : ''
      }

    </HiddenScroll>
  );
};

