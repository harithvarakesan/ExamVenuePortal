import React from 'react';
import './dashboard.css';
import Home from './Home';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, Tooltip as PieTooltip } from 'recharts';

const data = [
  { name: '1', gpa: 5 },
  { name: '2', gpa: 7 },
  { name: '3', gpa: 8.5 },
  { name: '4', gpa: 6.98 },
  { name: '5', gpa: 9.43 },
  { name: '6', gpa: 4.86 },
  { name: '7', gpa: 7.12 },
];

const data2 = [
  { name: 'Present', value: 78 },
  { name: 'Absent', value: 20 },
  { name: 'On duty', value: 5 }
];

const COLORS = ['green', 'red', 'yellow'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Dashboard() {
  return (
    <div>
      <Home />
      <div className="dashboard">
        <div className='cgpa'>
            <h1>CGPA</h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="gpa" fill="#8884d8" />
        </BarChart>
        </div>

        <div className="attendance">
        <h1>CGPA</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={data2}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <PieTooltip />
        </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;