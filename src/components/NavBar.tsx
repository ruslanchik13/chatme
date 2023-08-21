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
import {useMemo, useState} from "react";
import {useLocation} from "react-router-dom";


const NavBar = () => {

  type Item = {
    id: number;
    icon: JSX.Element;
    activeIcon: JSX.Element;
    link: string;
  }

  const items: Item[] = [
    {id: 0, icon: <CompasSvg/>, activeIcon: <UseCompasSvg/>, link: '/collections'},
    {id: 1, icon: <PersonSvg/>, activeIcon: <UsePersonSvg/>, link: '/contacts'},
    {id: 2, icon: <MessageSvg/>, activeIcon: <UseMessageSvg/>, link: '/chats'},
    {id: 3, icon: <NotifSvg/>, activeIcon: <UseNotifSvg/>, link: '/notifications'},
    {id: 4, icon: <SettingsSvg/>, activeIcon: <UseSettingsSvg/>, link: '/settings'},
  ]

  const location = useLocation()
  const indexFinder = (arr: Item[]) => {
    const locate = arr.find(el => location.pathname.includes(el.link))
    return locate && location.pathname.includes(locate.link) ? locate.id : 0
  }
  const defaultIndex = useMemo(() => indexFinder(items), [items, location.pathname]);
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex)

  return (
    <Div bgColor={"rgba(242, 243, 245, 1)"} height={840} width={64}>
      <FlexWrapper direction={"column"}>
        <Div mb={16} mt={16}><LogoBarSvg/></Div>
        <Div mb={444}>
          {items.map((item, index: number) =>
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