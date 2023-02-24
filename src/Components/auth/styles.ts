import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((_theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "50px",
    //   borderRadius: "10px",
      height: "110rem",
    //   boxShadow: "0 3px 5px 2px grey",
      background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
    },
    headerBox: {
        display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      textAlign: "center",
      margin: "50px",
      padding: "50px",
      borderRadius: "10px",
      height: "auto",
    //   boxShadow: "0 3px 5px 2px grey",
      background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",

    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      alignItems: "center",
      textAlign: "center",
      margin: "50px",
      padding: "50px",
      borderRadius: "10px",
      height: "auto",
    //   boxShadow: "0 3px 5px 2px grey",
    //   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
    },
    input: {
      margin: "10px",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid black",
      background: "black",
      color: "white",
    },
    button: {
      margin: "20px !important",
      padding: "10px",
      borderRadius: "10px",
    //   boxShadow: "0 3px 5px 2px grey",
      background: "white !important",
    },
    titleBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "black",
      border: 0,
      borderRadius: 10,
      boxShadow: "0 3px 5px 2px grey",
      color: "white",
      height: 80,
      padding: "10px",
      margin: "50px 10% 50px 10%",
      width: "80%",
    },
  })
);

export default useStyles;
