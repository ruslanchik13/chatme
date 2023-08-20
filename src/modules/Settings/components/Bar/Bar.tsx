import {billing, openland, other, preferences, settings} from "@/modules/Settings/components/Bar/data";
import BarItem from "@/modules/Settings/UI/BarItem";
import {FlexWrapper, TextBold17, TextBold24, TextRegular15} from "@/UI";
import {Div} from "@/UI/Div/Div";
import {Avatar} from "@/UI/Avatar/Avatar";
import {useState} from "react";

const Bar = () => {

  const [activeIndex, setActiveIndex] = useState<number>()

  return (
    <Div br={"1px solid rgba(0, 0, 0, 0.08)"} ml={16} height={840}>
      <FlexWrapper direction={"column"} height={56} align={"start"}>
        <TextBold24>
          Settings
        </TextBold24>
      </FlexWrapper>
      <Div mb={8}>
        <FlexWrapper gap={16} height={80} justify={"start"} direction={"row"}>
          <Avatar size={"Size56"}/>
          <Div>
            <TextBold17>Yury Lifshits</TextBold17>
            <FlexWrapper height={24}>
              <TextRegular15 color={"rgba(113, 116, 122, 1)"}>
                +7 (999) 123-4567
              </TextRegular15>
            </FlexWrapper>
          </Div>
        </FlexWrapper>
      </Div>
      <Div mb={16}>
        {settings.map((item) =>
          <BarItem
            onClick={() => setActiveIndex(item.id)}
            img={item.img}
            text={item.text}
            link={item.link}
            key={item.id}
            isActive={activeIndex === item.id}
          />
        )}
      </Div>
      <Div mb={16}>
        <TextBold17>
          Preferences
        </TextBold17>
        {preferences.map((item) =>
          <BarItem onClick={() => setActiveIndex(item.id)} img={item.img} text={item.text} link={item.link} key={item.id}
                   isActive={activeIndex === item.id}/>
        )}
      </Div>
      <Div mb={16}>
        <TextBold17>
          Billing
        </TextBold17>
        {billing.map((item) =>
          <BarItem onClick={() => setActiveIndex(item.id)} img={item.img} text={item.text} link={item.link} key={item.id}
                   isActive={activeIndex === item.id}/>
        )}
      </Div>
      <Div mb={16}>
        <TextBold17>
          Openland
        </TextBold17>
        {openland.map((item) =>
          <BarItem onClick={() => setActiveIndex(item.id)} img={item.img} text={item.text} link={item.link} key={item.id}
                   isActive={activeIndex === item.id}/>
        )}
      </Div>
      <TextBold17>
        Other
      </TextBold17>
      {other.map((item) =>
        <BarItem onClick={() => setActiveIndex(item.id)} img={item.img} text={item.text} link={item.link} key={item.id}
                 isActive={activeIndex === item.id}/>
      )}
    </Div>
  );
};

export default Bar;