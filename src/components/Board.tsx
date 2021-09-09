import React, {useEffect, useState} from 'react';
import axios from 'axios';
import sort from '../HelperFunctions';
import Table from './Table';
import Chart from './Chart';
import useStyles from '../styles/BoardStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import Options from './Options';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Board() 
{
    const classes = useStyles();

    const matchesSm = useMediaQuery(
        json2mq({
          minWidth: 550,
        }),
      );

    const [isReady, setIsReady] = useState(false);
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [chartRender, setChartRender] = useState(true);

    useEffect(() => {

        async function fetchData()
        {
            try
            {  
                const fetchedData = await axios.get("http://localhost:3001/revenues/weekly");
                sort(fetchedData.data, "weekly");
                setWeeklyData(fetchedData.data);

                const fetchedData1 = await axios.get("http://localhost:3001/revenues/monthly");
                sort(fetchedData1.data, "monthly");
                setMonthlyData(fetchedData1.data);

                const fetchedData2 = await axios.get("http://localhost:3001/customers/revenues");
                sort(fetchedData2.data, "customer");
                setCustomerData(fetchedData2.data);

                const fetchedData3 = await axios.get("http://localhost:3001/categories/revenues");
                sort(fetchedData3.data, "category");
                setCategoryData(fetchedData3.data);
                setIsReady(true);
            } catch(e)
            {
                console.log(e);
            } 
            
        }

        fetchData();

      }, []);

    const handleClick = () =>
    {   
        setChartRender(!chartRender);
    }

    return (
        <div className={classes.root}>
            {isReady
            ?
            <Container  className={classes.container}>
                <h1 className={matchesSm ? classes.title : classes.titleResp}>Dashboard</h1>
                <Options handleClick={handleClick} />
                {chartRender 
                ?
                <Grid container justifyContent="space-around" alignItems="center" className={classes.chartContainer}>
                    <Grid item xs={12} lg={6}>
                        <Chart data={weeklyData} option="weekly" key={uuidv4()} title="Weekly Revenues"/>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Chart data={monthlyData} option="monthly" key={uuidv4()} title="Monthly Revenues"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Chart data={customerData} option="customer" key={uuidv4()} title="Customer Based Revenues"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Chart data={categoryData} option="category" key={uuidv4()} title="Category Based Revenues"/>
                    </Grid>
                </Grid>
                :
                <Grid container justifyContent="space-around" alignItems="center" className={classes.chartContainer}>
                    <Grid item xs={11} sm={10} md={8} lg={5}>
                        <Table data={weeklyData} option="weekly" key={uuidv4()} title="Weekly Revenues"/>
                    </Grid>
                    <Grid item xs={11} sm={10} md={8} lg={5}>
                        <Table data={monthlyData} option="monthly" key={uuidv4()} title="Monthly Revenues"/>
                    </Grid>
                    <Grid item xs={11} sm={10} md={8} lg={5}>
                        <Table data={customerData} option="customer" key={uuidv4()} title="Customer Based Revenues"/>
                    </Grid>
                    <Grid item xs={11} sm={10} md={8} lg={5}>
                        <Table data={categoryData} option="category" key={uuidv4()} title="Category Based Revenues"/>
                    </Grid>
                </Grid>
                }
            </Container>
            :
                <div></div>
            }
        </div>
    )
}