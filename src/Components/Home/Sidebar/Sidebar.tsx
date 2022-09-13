import { useContext } from "react";
import { sideBarPropsContext } from "../../../Contexts/SideBarContext";
import Content from "./Content/Content";
import { Overlay, SideBarWrapper } from "./SidebarCss";
function SideBar() {
  let { sideBarState, handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <SideBarWrapper sideBarDisp={sideBarState}>
      <Content></Content>
      <Overlay onClick={handleSideBarState}></Overlay>
    </SideBarWrapper>
  );
}

export default SideBar;
