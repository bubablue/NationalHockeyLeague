import { Box, Button, Tooltip } from "@material-ui/core";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  Book,
  BoxArrowInLeft,
  BoxArrowInRight,
  Clipboard2DataFill,
  House,
  List,
  PeopleFill,
  PlayBtn,
  X,
} from "react-bootstrap-icons";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useNavigate } from "react-router-dom";
import { useTeams } from "../../Context/TeamProvider";
import useStyles from "./styles";

interface Props {
  logout: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

export const Sidebar = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const { state, mode, setMode } = useTeams();
  const logout = props.logout;
  const navigate = useNavigate();

  const handleModeSwitch = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={open ? classes.drawerOpen : classes.drawerClose}
    >
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className={classes.toolbar}>
          <NavbarToggle
            className={classes.sidebarToggle}
            onClick={handleDrawerOpen}
          >
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                    {open ? (
                      <X className={classes.toggle} />
                    ) : (
                      <List className={classes.toggle} />
                    )}
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                    {open ? (
                      <X className={classes.toggle} />
                    ) : (
                      <List className={classes.toggle} />
                    )}
                  </Tooltip>
                </p>
              </Box>
            )}
          </NavbarToggle>
          <Nav.Link className={classes.link} href="/">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Home"}>
                    <House />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Home"}>
                    <House />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/schedule">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Games"}>
                    <PlayBtn />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Games"}>
                    <PlayBtn />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/standings">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Stands"}>
                    <Clipboard2DataFill />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Stands"}>
                    <Clipboard2DataFill />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/players">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Teams"}>
                    <PeopleFill />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Teams"}>
                    <PeopleFill />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/news">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"News"}>
                    <Book />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"News"}>
                    <Book />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <div>
            <Button
              onClick={handleModeSwitch}
              className={classes.menuItemModeSwitcher}
            >
              {mode === "light" ? "Dark" : "Light"}
            </Button>
          </div>
          <div>
            <Button
              onClick={state.user.logged_in ? logout : () => navigate("/login")}
              className={classes.menuItemText}
            >
              {state.user.logged_in ? <BoxArrowInLeft /> : <BoxArrowInRight />}
            </Button>
          </div>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};
