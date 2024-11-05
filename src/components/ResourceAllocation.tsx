import React from 'react';
import { AlertCircle } from 'lucide-react';

const ResourceAllocation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow col-span-2">
      <h2 className="text-xl font-semibold mb-4">Resource Allocation Suggestions</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <AlertCircle className="text-yellow-500 w-6 h-6 mr-2 mt-1" />
          <div>
            <h3 className="font-semibold">Increase Staff for Night Shift</h3>
            <p className="text-sm text-gray-600">Based on predicted patient inflow, consider adding 2 more nurses to the night shift next week.</p>
          </div>
        </div>
        <div className="flex items-start">
          <AlertCircle className="text-green-500 w-6 h-6 mr-2 mt-1" />
          <div>
            <h3 className="font-semibold">Optimize Equipment Usage</h3>
            <p className="text-sm text-gray-600">Current equipment usage is at 80%. Consider redistributing less-used equipment to high-demand areas.</p>
          </div>
        </div>
        <div className="flex items-start">
          <AlertCircle className="text-blue-500 w-6 h-6 mr-2 mt-1" />
          <div>
            <h3 className="font-semibold">Prepare for Seasonal Increase</h3>
            <p className="text-sm text-gray-600">Historical data suggests a 15% increase in patient inflow next month. Ensure adequate bed capacity and staff availability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;