import React, { useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from '../styles/TableStyles';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grow from '@material-ui/core/Grow';

export default function TableComponent(props: any)
{
    const matchesSm = useMediaQuery(
        json2mq({
          minWidth: 550,
        }),
      );
    const [isWeek, setIsWeek] = useState(props.option === "weekly");
    const [isMonth, setIsMonth] = useState(props.option === "monthly");
    const [isCustomer, setIsCustomer] = useState(props.option === "customer");
    const [isCategory, setIsCategory] = useState(props.option === "category");
    const classes = useStyles();
    let title1, title2, title3, title4, title5, title6;
    if(props.option === "weekly")
    {
        title1 = "Week";
        title2 = "Start Date";
        title3 = "End Date";
        title4 = "Invoices";
        title5 = "Total Revenue";
        title6 = "Total Margin";
    }
    else if(props.option === "monthly")
    {
        title1 = "Month";
        title2 = "Start Date";
        title3 = "End Date";
        title4 = "Invoices";
        title5 = "Total Revenue";
        title6 = "Total Margin";
    }
    else if(props.option === "customer")
    {
        title1 = "Customer Id";
        title2 = "Customer Name";
        title3 = "Invoices";
        title4 = "Total Revenue";
        title5 = "Total Margin";
    }
    else
    {
        title1 = "Category Name";
        title2 = "Total Revenue";
        title3 = "Total Margin";
        title4 = "";
        title5 = "";
        title6 = "";
    }

    return (
        <Grow in={true} timeout={1000}>
        <div>
        <h2>{props.title}</h2>
        <TableContainer className={matchesSm ? classes.tableDiv : classes.tableDivResp}>
            <Table  stickyHeader aria-label="simple table">
                <TableHead>
                    {isCategory 
                    ?
                    <TableRow className={classes.row}>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} align="center" style={matchesSm ? {} : {fontSize: "10px", padding: "12px"}}>{title1}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} align="center" style={matchesSm ? {} : {fontSize: "10px", padding: "12px"}}>{title2}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} align="center" style={matchesSm ? {} : {fontSize: "10px", padding: "12px"}}>{title3}</TableCell>
                    </TableRow>
                    :
                    <TableRow>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title1}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title2}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title3}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title4}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title5}</TableCell>
                        <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`} style={matchesSm ? {} : {fontSize: "10px", padding: "4px"}} align="center">{title6}</TableCell>
                    </TableRow>
                    }
                </TableHead>
                {isWeek 
                ?
                <TableBody>
                    {props.data.map((row: any) => (
                        <TableRow key={row.week}>
                            <TableCell  scope="row" align="center" className={matchesSm ? classes.tableCell : classes.tableCellResp}>
                                {row.week}
                            </TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.start_date}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.end_date}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.invoices_count}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_margin.toFixed(3)}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_revenue.toFixed(3)}</TableCell>

                        </TableRow>
                    ))
                    }
                </TableBody>
                :""}
                {isMonth 
                ?
                <TableBody>
                    {props.data.map((row: any) => (
                        <TableRow key={row.month}>
                            <TableCell  scope="row" align="center" className={matchesSm ? classes.tableCell : classes.tableCellResp}>
                                {row.month}
                            </TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp}align="center">{row.start_date}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.end_date}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.invoices_count}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_margin.toFixed(3)}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_revenue.toFixed(3)}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
                :""}
                {isCustomer 
                ?
                <TableBody>
                    {props.data.map((row: any) => (
                        <TableRow key={row.customer_id}>
                            <TableCell  scope="row" align="center" className={matchesSm ? classes.tableCell : classes.tableCellResp}>
                                {row.customer_id}
                            </TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.customer_name}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.invoices_count}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_margin.toFixed(3)}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_revenue.toFixed(3)}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
                :""}
                {isCategory 
                ?
                <TableBody>
                    {props.data.map((row: any) => (
                        <TableRow key={row.category_name}>
                            <TableCell  scope="row" align="center" className={matchesSm ? classes.tableCell : classes.tableCellResp}>
                                {row.category_name}
                            </TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_revenue.toFixed(3)}</TableCell>
                            <TableCell className={matchesSm ? classes.tableCell : classes.tableCellResp} align="center">{row.total_margin.toFixed(3)}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
                :""}
            </Table>
        </TableContainer>
        </div>
        </Grow>
    )
}