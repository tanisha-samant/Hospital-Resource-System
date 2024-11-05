import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { department: 'Emergency', current: 20, recommended: 25 },
  { department: 'ICU', current: 15, recommended: 18 },
  { department: 'Surgery', current: 10, recommended: 12 },
  { department: 'Pediatrics', current: 8, recommended: 10 },
  { department: 'General', current: 30, recommended: 28 },
];

const DetailedResourceAllocation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Detailed Resource Allocation</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#8884d8" name="Current Staff" />
          <Bar dataKey="recommended" fill="#82ca9d" name="Recommended Staff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetailedResourceAllocation;