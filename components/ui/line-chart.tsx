"use client";

import { LineChart as RechartLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface LineChartProps {
  data: { labels: string[]; datasets: { data: number[]; borderColor: string }[] };
}

export function LineChart({ data }: LineChartProps) {
  // Convert chartData to Recharts format
  const formattedData = data.labels.map((label, index) => ({
    name: label,
    value: data.datasets[0].data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartLineChart 
        data={formattedData} 
        margin={{ top: 15, right: 10, left: -10, bottom: 0 }} // Adjust margins to fix alignment
      >
        {/* Horizontal grid lines only (solid) */}
        <CartesianGrid stroke="#e0e0e0" vertical={false} />
        
        {/* X and Y Axes without dark lines */}
        <XAxis dataKey="name" padding={{ left: 15, right: 0, }} axisLine={false} tickLine={false} />
        <YAxis domain={[0, "dataMax"]} axisLine={false} tickLine={false} />
        
        <Tooltip />
        
        {/* Line without dots */}
        <Line type="monotone" dataKey="value" stroke={data.datasets[0].borderColor} strokeWidth={2} dot={false} />
      </RechartLineChart>
    </ResponsiveContainer>
  );
}
