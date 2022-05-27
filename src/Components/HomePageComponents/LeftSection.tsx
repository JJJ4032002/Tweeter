import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { devices, sizes } from "../../Media Queries/Queries";
import LeftSectionMobileL from "./HomePageSectionComponents/LeftSectionMobileL";
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: LeftSection;
`;
const FlexItems = styled.div`
  display: flex;
  gap: 1em;
`;
function LeftSection() {
  let windowWidth = useWindowSize();
  let [LeftSectionContent, setLeftSectionContent] = useState(LeftSectionMobile);

  useLayoutEffect(() => {
    console.log("hmm");
    console.log(windowWidth);

    if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setLeftSectionContent(LeftSectionMobileL);
    } else if (windowWidth >= 0) {
      setLeftSectionContent(LeftSectionMobile);
    }
  }, [windowWidth]);

  return <LeftContainer>{LeftSectionContent}</LeftContainer>;
}

function LeftSectionMobile() {
  return (
    <>
      <FlexItems>
        <img src="" alt="gh" />
        <h4>Home</h4>
      </FlexItems>
    </>
  );
}

export default LeftSection;
