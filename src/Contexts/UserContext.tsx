import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  UserPropsContext,
  UserState,
} from "../Interfaces and Types/Interfaces";
import GetUserImages from "../firebase/GetUserImages";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import useGetUser from "../hooks/useGetUser";
import { useNavigate, useLocation } from "react-router-dom";
import { UserStatePartial } from "../Interfaces and Types/Interfaces";
import GetUserData from "../firebase/GetUserData";
import { User } from "firebase/auth";
import UserDataChangeListener from "../firebase/UserDataChangeListener";
let UserContext = React.createContext<UserPropsContext>({
  user: null,
  RouteProfile: false,
  setUserHelper: (user: UserState | null) => {},
  handleUserData: (state: User | null) => {},
  signedIn: false,
  SnackBarState: {
    openSnackBar: { VerificationEmailSent: false, SignIn: false },
    handleOpenSnackBar: () => {},
  },
});

function UserContextProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  let location = useLocation();
  let [userData, setUserData] = useState<User | null>(null);
  console.log(userData);
  const handleUserData = useCallback((state: User | null) => {
    setUserData(state);
  }, []);
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
  const handleSignedIn = useCallback((state: boolean) => {
    setSignedIn(state);
  }, []);
  let [RouteProfile, setRouteProfile] = useState(false);

  useGetUser(handleUserData, handleSignedIn);

  let [user, setUser] = useState<UserStatePartial | null>(null);
  function setUserHelper(user: UserStatePartial | null) {
    if (user === null) {
      setUser(user);
    } else {
      setUser((prev) => {
        return { ...prev, ...user };
      });
    }
  }
  function handleSuccessfulSignIn() {
    navigate(`/home`);
  }
  if (userData !== null && user === null) {
    GetUserData(userData.uid).then((result) => {
      if (result !== null && userData !== null) {
        let Newresult = {
          ...result,
          Id: userData.uid,
          profileImageUrl: null,
          bannerImageUrl: null,
        };
        setUserHelper(Newresult);
        GetUserImages(userData.uid, setUserHelper);
        UserDataChangeListener(userData.uid, setUserHelper);
        console.log(location.pathname);
        if (location.pathname === "/login" || location.pathname === "/")
          handleSuccessfulSignIn();
        handleSignedIn(true);
      }
    });
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
    handleUserData: handleUserData,
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
