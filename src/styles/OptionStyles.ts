import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    active:
    {
        backgroundColor: "purple",
        color: "white",
        width: "50px",
        display: "inline",
        marginRight: "5px",
        cursor: "pointer",
        padding: "5px",
        borderRadius: "8px"
    },

    notActive:
    {
        width: "50px",
        display: "inline",
        marginRight: "5px",
        color: "purple",
        cursor: "pointer"
    },

    root:
    {
        marginBottom: "50px"
    }
    
});

export default useStyles;