import "./App.css";
import { AuthenticationPage } from "./Components/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { UserContextProvider } from "./Contexts/UserContext";
import ProfilePage from "./Components/ProfilePage";
import MiddleSection from "./Components/HomePageComponents/MiddleSection";
import { useEffect, useState } from "react";
import theme from "./theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
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
              element={<AuthenticationPage />}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/home"}
              element={<HomePage EditProfileState={dispEditProfile}></HomePage>}
            >
              <Route index element={<MiddleSection />} />
              <Route
                path="profile"
                element={
                  <ProfilePage handleDispEditProfile={handleDispEditProfile} />
                }
              ></Route>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
