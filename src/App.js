import React from "react";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { UserSidebar } from "./Components/Sidebar/UserSidebar/UserSidebar";
import { TeamsProvider } from "./Context/TeamProvider";
import { NhlThemeProvider } from "./Context/Theme/ThemeProvider";
import { Box, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Login } from "./Components/auth/LogIn";
// import NHLThemeProvider from "./Context/NHLThemeProvider";

function App({ children }) {
  // const checkLoginStatus = () => {
  //   fetch("http://localhost:3001/logged_in", {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((user) => {
  //       if (user.logged_in) {
  //         handleLogin(user);
  //       } else {
  //         handleLogout();
  //       }
  //     });
  // };
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  const checkLoginStatus = async () => {
    await axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((r) => r.data)
      .then((user) => {
        if (user.logged_in) {
          handleLogin(user);
        } else {
          // handleLogout();
        }
      })
      .catch((err) => {
        console.log(err);
        // handleLogout();
      });
  };
  React.useEffect(() => {
    checkLoginStatus();
  }, [children]);

  const logOut = async () => {
    const response = await axios.delete("http://localhost:3001/logout", {
      withCredentials: true,
    });
    const user = response.data;
    if (user.logged_out) {
      handleLogout();
    }
  };

  const handleLogout = () => {
    setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
    navigate("/login");
  };

  const handleLogin = (user) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: user,
    });
  };
  // if (JSON.stringify(state.user) != JSON.stringify({}) || state.loggedInStatus === "LOGGED_IN") {
  return (
    <TeamsProvider state={state}>
      <NhlThemeProvider>
        <Sidebar position={"left"} logout={logOut} />
        {children}
        <UserSidebar position={"right"} />
      </NhlThemeProvider>
    </TeamsProvider>
  );
  // } else {
  //   return (<TeamsProvider>
  //     <NhlThemeProvider>
  //       <Sidebar position={"left"} />
  //       <Login/>
  //       <UserSidebar position={"right"} />
  //     </NhlThemeProvider>
  //   </TeamsProvider>);
  // }
}

export default App;
