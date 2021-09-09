const sort = (data: any, dataType: any) =>
{
    if(dataType === "category")
    {
        var tempStr: Array<String> = [];
        for(let i = 0; i < data.length; i++)
        {
            tempStr.push(data[i].category_name);
        }

        tempStr = tempStr.sort();

        for(let i = 0; i < data.length; i++)
        {
            data[i].category_name = tempStr[i];
        }
    }
    else
    {
        for(let i = 0; i < data.length - 1; i++)
        {
            for(let k = 0; k < data.length - 1; k++)
            {
                let index1, index2;
                if(dataType === "weekly")
                {
                    index1 = parseInt(data[k].week.slice(-2));
                    index2 = parseInt(data[k + 1].week.slice(-2));
                }
                else if(dataType === "monthly")
                {
                    index1 = parseInt(data[k].month.slice(-2));
                    index2 = parseInt(data[k + 1].month.slice(-2));
                }
                else if(dataType === "customer")
                {
                    index1 = data[k].customer_id;
                    index2 = data[k + 1].customer_id;
                }
                

                if(index1 > index2)
                {
                    let temp = data[k];
                    data[k] = data[k + 1];
                    data[k + 1] = temp;
                }
            }
        }
    }
    
}


export default sort;
