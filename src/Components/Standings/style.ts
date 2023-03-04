import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../../Context/Theme/Colours";
import { Theme } from "@mui/material";

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: '100px',
        paddingBottom: '100px',
        background: Colours.BW[theme.palette.mode],
      },
      mainHeader: {
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        alignItems: "center",
        textAlign: "center",
        background: Colours.BW_02[theme.palette.mode],
        border: 0,
        borderRadius: 10,
        // boxShadow: "0 3px 10px 2px grey",
        color: Colours.BW[theme.palette.mode],
        height: 100,
        padding: "10px",
        margin: "50px 5% 50px 5%",
        width: "90%",
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
        // boxShadow: "0 3px 5px 2px grey",
        color: Colours.BW[theme.palette.mode],
        height: 80,
        padding: "10px",
        margin: "50px 10% 50px 10%",
        width: "80%",
      },
      teams: {
        display: "flex",
        justifyContent: "center",
        justidyItems: "center",
        alignItems: "center",
        flexWrap: "wrap",
        // margin: "20px",
      },
      team: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10px',
        padding: '20px',
        // border: '5px solid black',
        borderRadius: '10px',
        // width: '200px',
        // height: '200px',
      },
      textBox: {
        display: "block",
        margin: "20px",
        textDecoration: "none",
        font: "15px Arial, sans-serif",
        color: Colours.BW_02[theme.palette.mode],
      },
      numbers: {
        color: "grey",
        textAlign: 'center',
      },
      images: {
        height: '200px',
        width: '200px',
      }
    })
)

export default useStyles;