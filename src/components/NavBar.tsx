import {
  CompasSvg, LogoBarSvg, MenuBarSvg, MessageSvg,
  NotifSvg, PersonSvg,
  SettingsSvg, UseCompasSvg,
  UseMessageSvg, UseNotifSvg,
  UsePersonSvg, UseSettingsSvg
} from "@/assets/img";
import NavbarItem from "@/UI/NavBarItem/NavbarItem";
import {Div} from "@/UI/Div/Div";
import {FlexWrapper} from "@/UI";
import {useState} from "react";


const NavBar = () => {

  const [activeIndex, setActiveIndex] = useState<number>(2)

  const icons = [
    {id: 0,icon: <CompasSvg/>, activeIcon: <UseCompasSvg/>, link: '/'},
    {id: 1,icon: <PersonSvg/>, activeIcon: <UsePersonSvg/>, link: '/'},
    {id: 2,icon: <MessageSvg/>, activeIcon: <UseMessageSvg/>, link: '/'},
    {id: 3,icon: <NotifSvg/>, activeIcon: <UseNotifSvg/>, link: '/'},
    {id: 4,icon: <SettingsSvg/>, activeIcon: <UseSettingsSvg/>, link: '/settings'},
  ]
  return (
    <Div bgColor={"rgba(242, 243, 245, 1)"} height={840} width={64}>
      <FlexWrapper direction={"column"}>
        <Div mb={16} mt={16}><LogoBarSvg/></Div>
        <Div mb={444}>
          {icons.map((item, index) =>
            <NavbarItem
              onClick={() => setActiveIndex(index)}
              isActive={activeIndex === index}
              img={item.icon}
              activeImg={item.activeIcon}
              key={item.id}
              link={item.link}
            />
          )}
        </Div>
        <Div>
          <MenuBarSvg/>
        </Div>
      </FlexWrapper>
    </Div>
  );
};

export default NavBar;