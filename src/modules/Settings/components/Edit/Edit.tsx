import {FlexWrapper, Input, TextBold17, TextBold24} from "@/UI";
import Select from "@/UI/Select/Select";

const Edit = () => {
  return (
    <div>
      <TextBold24>Edit profile</TextBold24>
      <TextBold17>Info</TextBold17>
      <Input width={448} scale={"medium"} placeholder="First name"/>
      <Input width={448} scale={"medium"} placeholder="Last name"/>
      <Input width={448} scale={"medium"} placeholder="About"/>
      <Input width={448} scale={"medium"} placeholder="Location"/>
      <Input width={448} scale={"medium"} placeholder="Status"/>
      <TextBold17>Username</TextBold17>
      <Input width={448} scale={"medium"} placeholder="Username"/>
      <TextBold17>Birthday</TextBold17>
      <FlexWrapper>
        <Input width={96} scale={"medium"} placeholder="Day"/>
        <Select mt={0} width={192} bgColor={"black"} values={["potato", "carrot"]} size={"medium"}/>
        <Input width={128} scale={"medium"} placeholder="Year" />
      </FlexWrapper>
      <TextBold17>Contacts</TextBold17>
      <Input width={448} scale={"medium"} placeholder="Website"/>
      <Input width={448} scale={"medium"} placeholder="Instagram"/>
      <Input width={448} scale={"medium"} placeholder="Telegram"/>
      <Input width={448} scale={"medium"} placeholder="VK"/>
      <Input width={448} scale={"medium"} placeholder="Github"/>
    </div>
  );
};

export default Edit;