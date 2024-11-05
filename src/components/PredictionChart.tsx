import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2023-01', actual: 120, predicted: 115 },
  { date: '2023-02', actual: 130, predicted: 125 },
  { date: '2023-03', actual: 140, predicted: 145 },
  { date: '2023-04', actual: 150, predicted: 155 },
  { date: '2023-05', actual: 160, predicted: 165 },
  { date: '2023-06', predicted: 170 },
];

const PredictionChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Patient Inflow Prediction</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" />
          <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;