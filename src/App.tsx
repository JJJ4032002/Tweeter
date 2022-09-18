import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./Contexts/UserContext";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import theme from "./theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Landing } from "./Components/Landing/Landing";
import Tweets from "./Components/Tweets/Tweets";
import Close from "./Components/Close/Close";
const GlobalStyles = createGlobalStyle`
body{
  background: ${(props) => props.theme.colors.background};
  color : ${(props) => props.theme.colors.textPrimary};
}
`;
function App() {
  let [dispEditProfile, setDispEditProfile] = useState(false);
  const [themeCurrent, setThemeCurrent] = useState("light");
  const nextTheme = themeCurrent === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = themeCurrent;
  }, [theme]);

  function handleDispEditProfile(state: boolean) {
    setDispEditProfile(state);
  }
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles></GlobalStyles>
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<Landing />}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/home"}
              element={
                <Home
                  handleDispEditProfile={handleDispEditProfile}
                  EditProfileState={dispEditProfile}
                ></Home>
              }
            >
              <Route index element={<Tweets />} />
              <Route
                path="profile"
                element={
                  <Profile handleDispEditProfile={handleDispEditProfile} />
                }
              ></Route>
            </Route>
            <Route
              path={process.env.PUBLIC_URL + "/close"}
              element={<Close></Close>}
            ></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
