import { addDays, format } from 'date-fns';

export const generatePredictions = (days: number) => {
  const startDate = new Date();
  const predictions = [];

  for (let i = 0; i < days; i++) {
    const date = addDays(startDate, i);
    const predicted = Math.floor(100 + Math.random() * 100); // Simple random prediction
    predictions.push({
      date: format(date, 'yyyy-MM-dd'),
      predicted
    });
  }

  return predictions;
};