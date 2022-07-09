import React, { useEffect, useState } from "react";
import { UserPropsContext } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { User } from "firebase/auth";
import GetUser from "../firebase/GetUser";
import { useNavigate, useLocation } from "react-router-dom";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
  RouteProfile: false,
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  let location = useLocation();
  let [RouteProfile, setRouteProfile] = useState(false);
  GetUser(setUserHelper, handleSuccessfulSignIn);
  let [user, setUser] = useState<User | null>(null);
  function setUserHelper(user: User) {
    setUser(user);
  }
  function handleSuccessfulSignIn() {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }
  useEffect(() => {
    if (location.pathname === "/Tweeter/home/profile") {
      setRouteProfile(true);
    } else if (location.pathname === "/Tweeter/home") {
      setRouteProfile(false);
    }
  }, [location]);
  let contextObj = {
    user: user,
    RouteProfile: RouteProfile,
  };
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
