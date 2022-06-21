import React, { useState } from "react";
import { User, UserPropsContext } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";

let UserContext = React.createContext<UserPropsContext>({
  user: { displayName: "", email: "", photoURL: "", userId: "" },
  setUserHelper: (user: User) => {},
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  let [user, setUser] = useState({
    displayName: "",
    email: "",
    photoURL: "",
    userId: "",
  });
  function setUserHelper(user: User) {
    setUser(user);
  }
  let contextObj = {
    user: user,
    setUserHelper: setUserHelper,
  };
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
