import React, { useEffect, useState, useLayoutEffect } from "react";
import { UserPropsContext } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { User } from "firebase/auth";
import GetUser from "../firebase/GetUser";
import { useNavigate, useLocation } from "react-router-dom";
import { UserDocument } from "../Interfaces and Types/Interfaces";
import GetUserData from "../firebase/GetUserData";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
  RouteProfile: false,
  setUserHelper: (user: UserDocument) => {},
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
  GetUser(setUserHelper, handleSuccessfulSignIn, GetUserData, handleSignedIn);
  let [user, setUser] = useState<UserDocument | null>(null);
  function setUserHelper(user: UserDocument) {
    setUser({ ...user });
  }
  function handleSuccessfulSignIn() {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }
  useLayoutEffect(() => {
    if (location.pathname === "/Tweeter/home/profile") {
      setRouteProfile(true);
    } else if (location.pathname === "/Tweeter/home") {
      setRouteProfile(false);
    }
  }, [location]);
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
