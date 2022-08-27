import styled from "styled-components/macro";
import { Props } from "../../../Interfaces and Types/Interfaces";
import { devices } from "../../../Media Queries/Queries";
const Overlay = styled.div<Props>`
  display: ${(props) => props.display};
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  position: absolute;
  opacity: ${(props) => props.opacity};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
export { Overlay };
