import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  UserPropsContext,
  UserState,
} from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";

import useGetUser from "../firebase/GetUser";
import { useNavigate, useLocation } from "react-router-dom";
import { UserDocument } from "../Interfaces and Types/Interfaces";
import GetUserData from "../firebase/GetUserData";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
  RouteProfile: false,
  setUserHelper: (user: UserState) => {},
  signedIn: false,
  SnackBarState: {
    openSnackBar: { VerificationEmailSent: false, SignIn: false },
    handleOpenSnackBar: () => {},
  },
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  let location = useLocation();
  let [signedIn, setSignedIn] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState({
    VerificationEmailSent: false,
    SignIn: false,
  });
  function handleOpenSnackBar(
    name: "VerificationEmailSent" | "SignIn",
    state: boolean
  ) {
    setOpenSnackBar((prev) => {
      return { ...prev, [name]: state };
    });
  }
  function handleSignedIn(state: boolean) {
    setSignedIn(state);
  }
  let [RouteProfile, setRouteProfile] = useState(false);

  useGetUser(
    setUserHelper,
    handleSuccessfulSignIn,
    GetUserData,
    handleSignedIn,
    location
  );

  let [user, setUser] = useState<UserState | null>(null);
  function setUserHelper(user: UserState) {
    setUser({ ...user });
  }
  function handleSuccessfulSignIn() {
    navigate(`/home`);
  }
  useLayoutEffect(() => {
    console.log("UseLayoutRuns infinitely");
    if (location.pathname === "/profile") {
      setRouteProfile(true);
    } else if (location.pathname === "/home") {
      setRouteProfile(false);
    }
  }, [location.pathname]);
  let contextObj = {
    user: user,
    RouteProfile: RouteProfile,
    setUserHelper: setUserHelper,
    signedIn: signedIn,
    SnackBarState: {
      openSnackBar: openSnackBar,
      handleOpenSnackBar: handleOpenSnackBar,
    },
  };
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
