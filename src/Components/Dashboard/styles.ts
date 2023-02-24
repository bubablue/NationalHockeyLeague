import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../../Context/Theme/Colours";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px",
      paddingBottom: "90vh",
      width: "auto",
      background: Colours.BW[theme.palette.mode],
      color: Colours.BW_02[theme.palette.mode],
    },
    team: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "550px",
      height: "400px",
      background: "grey",
      backgroundAttachment: "fixed",
      color: Colours.BW_02[theme.palette.mode],
    },
    player: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "250px",
      height: "250px",
      cursor: "pointer",
    },
    playerName: {
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
      alignItems: "center",
      margin: "10px",
    },
    images: {
      height: "200px",
      width: "200px",
    },
  })
);

export default useStyles;
