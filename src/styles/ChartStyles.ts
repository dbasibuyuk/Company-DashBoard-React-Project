import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    checkBoxes:
    {
        width: "550px",
        marginBottom: "20px"
    },

    checkBoxesResp:
    {
        width: "320px",
        marginBottom: "20px"
    },

    checkBoxContainer:
    {
        display: "flex",
        justifyContent: "center"
    },

    checkDivs:
    {
        width: "80px",
        display: "inline"
    },


    title:
    {
        width: "550px",
        textAlign: "center",
    },

    titleResp:
    {
        width: "320px",
        textAlign: "center",
    },

    root:
    {
        display: "flex",
        justifyContent: "center",
    },

    rootResp:
    {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "30px",
    }

    
});

export default useStyles;