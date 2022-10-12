import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = ({data}) => {
    console.log(data);
    const {name, total} = data;
    return (
        <div>
            <LineChart width={800} height={700} data={data}>
              <Line type="monotone" dataKey={total} stroke='#82ca9d'/>
              <XAxis dataKey={name}/>
              <YAxis/>
            </LineChart>
        </div>
    );
};

export default Chart;