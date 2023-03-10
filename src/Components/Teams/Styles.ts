import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../../Context/Theme/Colours";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: "100px",
      paddingBottom: "300px",
      background: Colours.BW[theme.palette.mode],
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      textAlign: "center",
      background: Colours.BW_02[theme.palette.mode],
      border: 0,
      borderRadius: 10,
      // boxShadow: theme.palette.mode === 'light' ? "0 3px 5px 2px grey" : 'none',
      color: Colours.BW[theme.palette.mode],
      height: 80,
      padding: "10px",
      margin: "50px 10% 50px 10%",
      width: "80%",
    },
    teams: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexWrap: "wrap",
      margin: "10px",
      background: Colours.BW[theme.palette.mode],
    },
    team: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "200px",
      height: "200px",
    },
    names: {
      display: "block",
      margin: "50px",
      textDecoration: "none",
      font: "15px Arial, sans-serif",
      color: "grey",
    },
    images: {
      height: "200px",
      width: "200px",
    },
  });
});

export default useStyles;
