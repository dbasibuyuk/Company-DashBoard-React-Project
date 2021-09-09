import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tableCell: {
        fontFamily: 'Roboto Condensed',
        padding: "8px"
      },
  
      tableCellHeader:
      {
        fontWeight: "bold",
        backgroundColor: "white",
        borderColor: "purple",
        padding: "8px"
      },
  
      tableDiv:
      {
        maxHeight: "255px",
        marginBottom: "30px",
        borderRadius: "30px",
        marginTop: "30px",
        backgroundColor: "white",
        border: "2px solid purple",
      },

      tableDivResp:
      {
        maxHeight: "365px",
        marginBottom: "20px",
        borderRadius: "30px",
        border: "2px solid purple",
      },

  
      container:
      {
      },
      row:
      {

      },

      tableCellResp:
      {
        fontFamily: 'Roboto Condensed',
        fontSize: "10px", 
        padding: "4px"
      }
});

export default useStyles;