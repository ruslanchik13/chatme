import Bar from "@/modules/Settings/components/Bar/Bar";
import Router from "@/modules/Settings/router";
import {FlexWrapper} from "@/UI";

const Settings = () => {
  return (
    <FlexWrapper justify={"start"} align={"start"}>
      <Bar/>
      <Router/>
    </FlexWrapper>
  );
};

export default Settings;