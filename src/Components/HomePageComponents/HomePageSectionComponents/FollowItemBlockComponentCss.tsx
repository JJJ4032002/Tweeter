import styled from "styled-components";
const FollowButton = styled.button`
  padding: 0.5em 1.2em;
  border-radius: 2.5em;
  border: transparent;
  background-color: black;
  color: white;
  font-weight: 800;
  cursor: pointer;
`;
const AccountImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
export { FollowButton, AccountImageDiv };
