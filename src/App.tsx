import "./App.css";
import { AuthenticationPage } from "./Components/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { UserContextProvider } from "./Contexts/UserContext";
import ProfilePage from "./Components/ProfilePage";
import MiddleSection from "./Components/HomePageComponents/MiddleSection";
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<AuthenticationPage />}
          ></Route>
          <Route
            path={process.env.PUBLIC_URL + "/home"}
            element={<HomePage></HomePage>}
          >
            <Route index element={<MiddleSection />} />
            <Route path="profile" element={<ProfilePage />}></Route>
          </Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
