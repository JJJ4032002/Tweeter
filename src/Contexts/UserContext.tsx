import React, { useState } from "react";
import { UserPropsContext } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { User } from "firebase/auth";
import GetUser from "../firebase/GetUser";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  GetUser(setUserHelper);
  let [user, setUser] = useState<User | null>(null);
  function setUserHelper(user: User) {
    setUser(user);
  }
  let contextObj = {
    user: user,
  };
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
