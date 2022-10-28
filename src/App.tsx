import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { UserContextProvider } from "./Contexts/UserContext";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import theme from "./theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Landing } from "./Components/Landing/Landing";
import Tweets from "./Components/Tweets/Tweets";

const GlobalStyles = createGlobalStyle`
body{
  background: ${(props) => props.theme.colors.background};
  color : ${(props) => props.theme.colors.textPrimary};
}
`;
function App() {
  let location = useLocation();
  const [themeCurrent, setThemeCurrent] = useState("light");
  const [FirstLoad, setFirstLoad] = useState(true);

  const nextTheme = themeCurrent === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = themeCurrent;
  }, [theme]);

  useEffect(() => {
    if (FirstLoad) {
      setFirstLoad(false);
    }
  }, [FirstLoad]);
  console.log(location);
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles></GlobalStyles>
          {FirstLoad && location.pathname === "/" && (
            <Navigate to={"/login"}></Navigate>
          )}
          <Routes>
            <Route path={"/login"} element={<Landing />}></Route>
            <Route path={"/"} element={<Home />}>
              <Route path="home" element={<Tweets />} />
              <Route path="profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
