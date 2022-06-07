import { useContext } from "react";
import LeftSideBarComponent from "./HomePageSectionComponents/LeftSideBarComponent";
import { sideBarPropsContext } from "../../Contexts/SideBarContext";
import { SideBarContainer, RightSideBarContainer } from "./SideBarCss";

function SideBar() {
  let { sideBarState, handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <SideBarContainer sideBarDisp={sideBarState}>
      <LeftSideBarComponent></LeftSideBarComponent>
      <RightSideBarContainer
        onClick={handleSideBarState}
      ></RightSideBarContainer>
    </SideBarContainer>
  );
}

export default SideBar;
