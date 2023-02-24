import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  (_theme) =>
    createStyles({
      root: {
        margin: '100px',
        marginBottom: '100px',
      },
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
        margin: "50px 5% 50px 5%",
        width: "90%",
      },
      header: {
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