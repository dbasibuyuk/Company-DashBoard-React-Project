import React, {useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import useStyles from '../styles/ChartStyles';
import { withStyles } from '@material-ui/core/styles';
import {green, lightBlue, deepOrange} from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const BlueCheckBox = withStyles({
    root: {
      color: lightBlue[400],
      '&$checked': {
        color: lightBlue[600],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const GreenCheckBox = withStyles({
root: {
    color: green[400],
    '&$checked': {
    color: green[600],
    },
},
checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const OrangeCheckBox = withStyles({
    root: {
        color: deepOrange[400],
        '&$checked': {
        color: deepOrange[600],
        },
    },
    checked: {},
    })((props: CheckboxProps) => <Checkbox color="default" {...props} />);



export default function Chart(props: any)
{
    const matchesSm = useMediaQuery(
        json2mq({
          minWidth: 550,
        }),
      );



    const classes = useStyles();
    const [isCategory, setIsCategory] = useState(props.option === "category");
    const [revenueBox, setRevenueBox] = useState(true);
    const [marginBox, setMarginBox] = useState(true);
    const [invoicesBox, setInvoicesBox] = useState(true);
    let data, xAxisData;
    switch(props.option)
    {
        case "weekly":
            data = props.data.map((item: any) => (
                {
                    "Week": `Week ${parseInt(item.week.slice(-2))}`,
                    "Number": parseInt(item.week.slice(-2)),
                    "Invoices": item.invoices_count,
                    "Total Margin": item.total_margin,
                    "Total Revenue": item.total_revenue
                }));
            xAxisData = "Week";
            break;
        case "monthly":
            data = props.data.map((item: any) => (
                {
                    
                    "Month": `Month ${parseInt(item.month.slice(-2))}`,
                    "Number": parseInt(item.month.slice(-2)),
                    "Invoices": item.invoices_count,
                    "Total Margin": item.total_margin,
                    "Total Revenue": item.total_revenue
                }));
            xAxisData = "Month";

            break;
        case "customer":
            data = props.data.map((item: any) => (
                {
                    
                    "Cus ID": item.customer_id,
                    "Invoices": item.invoices_count,
                    "Total Margin": item.total_margin,
                    "Total Revenue": item.total_revenue
                }));
            xAxisData = "Cus ID";
            break;
        case "category":
            data = props.data.map((item: any) => (
                {
                    
                    "Name": item.category_name,
                    "Total Margin": item.total_margin,
                    "Total Revenue": item.total_revenue
                }));
            xAxisData = "Name";
            break;
        default:
            break;
    }

    return(
        <div className={classes.root}>
            <div>
                <h2 className={matchesSm ? classes.title : classes.titleResp}>{props.title}</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <LineChart
                        width={matchesSm ? 550 : 320}
                        height={matchesSm ? 220 : 128}
                        data={data}
                        >
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey={xAxisData} tickCount={1} stroke="black"/>
                            <YAxis dataKey="Total Revenue" yAxisId="left" stroke="black"/>
                            <YAxis dataKey="Invoices" yAxisId="right" stroke="black" orientation="right"  label={isCategory ? "" : { value: 'Invoices', angle: 90, position: matchesSm ? 'insideRight' : 'insideBottomRight'}} /> 
                            <Tooltip />
                            
                            {marginBox ? <Line yAxisId="left" type="monotone" dataKey="Total Margin" stroke="#4caf50" /> : ""}
                            {revenueBox ? <Line yAxisId="left" type="monotone" dataKey="Total Revenue" stroke="#ff5722"  /> : ""}
                            {isCategory ? ""
                            :
                                invoicesBox ? <Line yAxisId="right" type="monotone" dataKey="Invoices" stroke="#03a9f4" /> : ""}
                            
                    </LineChart>
                </div>
                <div className={classes.checkBoxContainer}>
                    <div className={matchesSm ? classes.checkBoxes : classes.checkBoxesResp}>
                        <div className={classes.checkDivs}>
                            <OrangeCheckBox
                                checked={revenueBox}
                                onChange={() => setRevenueBox(!revenueBox)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="secondary"
                            />
                            <span>Total Revenue</span>
                        </div>
                        <div className={classes.checkDivs}>
                            <GreenCheckBox
                                checked={marginBox}
                                onChange={() => setMarginBox(!marginBox)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <span>Total Margin</span>
                        </div>
                        {isCategory ? "" 
                        :
                        <div className={classes.checkDivs} style={matchesSm ? {} : {marginLeft: "30px"}}>
                            <BlueCheckBox
                                checked={invoicesBox}
                                onChange={() => setInvoicesBox(!invoicesBox)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="default"
                            />
                            <span>Invoices</span>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}