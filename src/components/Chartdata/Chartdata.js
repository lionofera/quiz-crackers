import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Chartdata = () => {
    const chartdata = useLoaderData();
    return (
        <div>
            {
                chartdata.data.map(data => <Chart
                key={data.id}
                data={data}
                ></Chart>)
            }
        </div>
    );
};

export default Chartdata;