import React, { useState } from "react";
import { sideBarContextProps } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
const sideBarPropsContext = React.createContext<sideBarContextProps>({
  sideBarState: false,
  handleSideBarState: () => {},
});
function SideBarContextProvider({ children }: OverlayContextProviderChildren) {
  const [sideBarState, setSideBarState] = useState(false);
  function handleSideBarState(): void {
    setSideBarState((state) => !state);
  }
  let ContextObj = {
    sideBarState: sideBarState,
    handleSideBarState: handleSideBarState,
  };
  return (
    <sideBarPropsContext.Provider value={ContextObj}>
      {children}
    </sideBarPropsContext.Provider>
  );
}

export { SideBarContextProvider, sideBarPropsContext };
