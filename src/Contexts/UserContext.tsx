import React, { useState } from "react";
import { UserPropsContext } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { User } from "firebase/auth";
import GetUser from "../firebase/GetUser";
import { useNavigate } from "react-router-dom";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  GetUser(setUserHelper, handleSuccessfulSignIn);
  let [user, setUser] = useState<User | null>(null);
  function setUserHelper(user: User) {
    setUser(user);
  }
  function handleSuccessfulSignIn() {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }
  let contextObj = {
    user: user,
  };
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
