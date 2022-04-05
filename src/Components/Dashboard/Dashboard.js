import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];
const Dashboard = () => {
  return (
    <div className="container md:mt-32">
      <div className="container mx-auto flex justify-center items-center mb-20">
          <h1 className="author text-9xl text-red-500">Dashboard</h1>
        </div>
<section className="container mx-auto flex flex-wrap justify-center items-center mt-5 mb-20" id="main">
  <section className="mx-20 mb-20" id="1">
  <div>
        <h1 className="text-center font-bold text-2xl mb-10 text-slate-500">
          Month Wise Sell
        </h1>
        
      </div>
          <LineChart
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
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#ef4444"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="sell" stroke="#374151" />
          </LineChart>
  </section>
  <section className="mb-20" id="2">
  <div>
        <h1 className="text-center font-bold text-2xl mb-10 text-slate-500">
          Investment vs Revenue
        </h1>
        
      </div>
  <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#374151"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
  </section>
  <section className="mx-20 mb-20" id="3">
  <div>
        <h1 className="text-center font-bold text-2xl mb-10 text-slate-500">
          Bar Chart
        </h1></div>
        <BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#ef4444" />
  <Bar dataKey="sell" fill="#374151" />
</BarChart>
  </section>
  <section className="mb-20" id="4">
  <div>
        <h1 className="text-center font-bold text-2xl mb-10 text-slate-500">
          Pie Chart
        </h1></div>
        <PieChart width={500} height={300}>
  <Pie data={data} dataKey="sell" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#374151" />
  <Pie data={data} dataKey="investment" nameKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#ef4444" label />
</PieChart>
  </section>
</section>
    </div>
  );
};

export default Dashboard;
