import { Theme } from "@mui/material";
import Colours from "../../Context/Theme/Colours";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "100px",
      paddingBottom: "300px",
      background: Colours.BW[theme.palette.mode],
    },
    stats: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      marginTop: "20%",
      margin: "10px",
      borderRadius: 10,
      // boxShadow:
      //   "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
      borderBottom: "0px solid transparent !important",
      borderTop: "0px solid transparent !important",
      // background:
      //   "linear-gradient(-20deg, black 10%, rgb(135,92,37) 70%)",
      // backgroundAttachment: "fixed"

    },
    team: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      justifyItems: "center",
      color: Colours.BW_02[theme.palette.mode],
      // border: "20px solid rgb(5,5,80)",
      // borderRadius: "50px",
      padding: "10px !important",
      width: "550px",
    },
    title: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      // border: '1px solid black',
      // borderRadius: 10,
      color: Colours.BW_02[theme.palette.mode],
      height: 50,
      padding: "10px",
      width: "auto",
    },
    statistics: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      // border: '1px solid black',
      // borderRadius: 10,
      justifyContent: "center",
      justifyItems: "center",
      flexWrap: "wrap",
      color: Colours.BW_02[theme.palette.mode],
      marginTop: "100px",
      height: "500px",
      width: "500px",
    },
    statsText:{
      display: 'inline-block',
      font: "15px Arial-Black",
    },
    chart:{},
    vs: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      textAlign: "center",
      flexWrap: "wrap",
      minWidth: "100px",
      borderRadius: 10,
      color: Colours.BW_02[theme.palette.mode],
      marginTop : "100px",
      padding: "10px",
    },
    images: {
      height: "300px",
      width: "300px",
      // border: "30px solid darkblue",
      // borderRadius: "50px",
    },
  })
);

export default useStyles;
