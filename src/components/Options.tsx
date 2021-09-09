import React, { useState} from 'react';
import useStyles from '../styles/OptionStyles';

export default function Options(props: any)
{
    const [isChartAct, setIsCartAct] = useState(true);
    const classes = useStyles();
    const handleClick = (e: any) =>
    {
        if(e.target.innerHTML === "Charts" && isChartAct === false)
        {
            setIsCartAct(!isChartAct);
            props.handleClick();
        }
        else if(e.target.innerHTML === "Tables" && isChartAct === true)
        {
            setIsCartAct(!isChartAct);
            props.handleClick();
        }
    }

    return (
        <div className={classes.root}>
            <div className={isChartAct ? classes.active : classes.notActive} onClick={handleClick} >Charts</div>
            <div className={isChartAct ? classes.notActive : classes.active} onClick={handleClick} >Tables</div>
        </div>
    )
}
