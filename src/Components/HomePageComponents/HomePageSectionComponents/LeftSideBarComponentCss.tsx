import styled from "styled-components";
const LeftSideBarContainer = styled.div`
  background: white;
  padding: 1em 0.7em;
  display: flex;
  flex-direction: column;
  gap: 1.6em;
`;
const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
`;
const SideBarFlexItems = styled.div`
  &.flex {
    display: flex;
    gap: 0.8em;
    align-items: center;
  }
`;

const Name = styled.h3``;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
export {
  Name,
  LowerContainer,
  LeftSideBarContainer,
  MiddleContainer,
  UpperContainer,
  SideBarFlexItems,
};
