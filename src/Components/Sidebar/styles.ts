import { createStyles, makeStyles } from "@mui/styles";
import { useTeams } from "../../Context/TeamProvider";

const useStyles = makeStyles((_theme) => {
  const { isMobile } = useTeams()
  return createStyles({
    root: {},
    mainHeader: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 10,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 50,
      padding: "10px",
      margin: "0px 5% 50px 5%",
      width: "90%",
    },
    sidebarToggle: {
      background: "transparent",
      border: 0,
      color: "white",
    },
    toggle: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      textAlign: "center",
      background: "transparent",
      border: 0,
      color: "white",
      height: "40px",
      width: "40px",
      "&:hover": {
        color: "#FF8E53",
        cursor: "pointer",
      },
    },
    drawerOpen: {
      position: "fixed",
      top: 0,
      background: "rgba(0,0,0,0.8)",
      width: "200px",
      height: "100%",
      border: "none",
      transition: "width 0.3s ease-in-out",
      overflowX: "hidden",
      zIndex: 1,
    },
    drawerClose: {
      position: "fixed",
      top: 0,
      height: isMobile ? "70px" : "100%",
      background: "rgba(0,0,0,0.8)",
      width: "70px",
      border: "none",
      borderRadius: isMobile ? "50%" : "none",
      transition: "width 0.3s ease-in-out",
      overflowX: "hidden",
      zIndex: 1,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyItems: "left",
      justifyContent: "left",
      textAlign: "left",
      flexDirection: "column",
    },
    link: {
      textDecoration: "none",
      textAlign: "left",
      color: "white",
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "10px",
      padding: "10px",
      "&:hover": {
        color: "#FF8E53",
      },
    },
    menuItem: {},
    menuItemText: {
      color: "white !important",
      fontSize: "1.8rem",
      marginTop: "60px",
    },
    menuItemModeSwitcher: {
      color: "white !important",
      fontSize: "0.8rem",
      marginTop: "20px",
    },
  });
});

export default useStyles;
