import {FlexWrapper, Input, TextBold24, TextRegular15} from "@/UI";
import StartButton from "@/modules/Auth/UI/StartButton";
import {StyledText} from "@/modules/Auth/UI/StyledText";
import {Back} from "@/modules/Auth/components/Back";
import {FC} from "react";
import {useForm} from "react-hook-form";

interface MailScreenProps {
  setMailSc: (n: (n: number) => number) => void,
  setMail: (s: string) => void,
  mail: string
}

type FormData = {
  email: string;
};

export const MailScreen: FC<MailScreenProps> = ({setMailSc, setMail, mail}) => {

  const {register, formState: {errors}, handleSubmit} = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data);
    setMailSc(prev => prev + 1)
  }

  return (
    <>
      <Back func={setMailSc}/>
      <FlexWrapper height={1080} direction={"column"}>
        <TextBold24 mb={8}>What’s your email?</TextBold24>
        <TextRegular15 mb={32}>
          <StyledText>
            We’ll send you a sign-in code
          </StyledText>
        </TextRegular15>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexWrapper direction={"column"}>
            <Input
              {...register('email', {
                required: "Обязательное поле!",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Введите корректный Email"
                }
              })}
              mb={32}
              placeholder={"Email"}
              width={320}
              scale={"small"}
              errText={errors.email && errors.email.message}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <StartButton
              variant={"primary"}
              size={"large"}
            >Next</StartButton>
          </FlexWrapper>
        </form>
      </FlexWrapper>
    </>

  );
};

