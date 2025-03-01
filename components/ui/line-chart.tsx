"use client";

import { LineChart as RechartLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface LineChartProps {
  data: { labels: string[]; datasets: { data: number[]; borderColor: string }[] };
}

export function LineChart({ data }: LineChartProps) {
  if (!data || !data.labels || !data.datasets || !data.datasets[0].data) {
    return <div>Loading...</div>;
  }

  // Convert chartData to Recharts format
  const formattedData = data.labels.map((label, index) => ({
    name: label,  // This will be used for the X-axis
    value: data.datasets[0].data[index],  // This will be plotted on the Y-axis
  }));

  // Get the min and max values for the Y-axis from your dataset
  const yMin = Math.min(...data.datasets[0].data);
  const yMax = Math.max(...data.datasets[0].data);

  // Calculate ticks to show only 3 (if there are enough data points)
  const tickCount = 3;
  const ticks = data.labels.filter((_, index) => index % Math.floor(data.labels.length / tickCount) === 0);

  return (
    <ResponsiveContainer width="100%" height={205}>
      <RechartLineChart 
        data={formattedData} 
        margin={{ top: 15, right: 70, left: -15, bottom: -5 }} /// Adjust margins to avoid cutting off the labels
      >
        {/* Horizontal grid lines only (solid) */}
        <CartesianGrid stroke="#e0e0e0" vertical={false} />
        
        {/* X and Y Axes with dynamic Y-Axis range */}
        <XAxis 
          dataKey="name" 
          padding={{ left: 25, right: 0 }} 
          axisLine={false} 
          tickLine={false}
          ticks={ticks} 
          interval={0}  
        />
        <YAxis domain={[yMin - 10, yMax + 10]} axisLine={false} tickLine={false} padding={{ bottom: 15 }} />
        
        <Tooltip />
        
        {/* Line without dots */}
        <Line type="monotone" dataKey="value" stroke={data.datasets[0].borderColor} strokeWidth={2} dot={false} />
      </RechartLineChart>
    </ResponsiveContainer>
  );
}
