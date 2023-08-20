import {FlexWrapper} from "@/UI";
import {Settings} from "@/modules";

const SettingsPage = () => {
  return (
    <FlexWrapper justify={"start"} align={"start"} direction={"row"}>
      <Settings/>
    </FlexWrapper>
  );
};

export default SettingsPage;