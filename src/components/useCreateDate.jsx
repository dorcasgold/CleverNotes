import { useState, useEffect } from 'react';

function useCreateDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const dateObj = new Date();
    const monthName = dateObj.toLocaleString('en-US', { month: 'short' });

    const formattedDate = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
    setDate(formattedDate);
  }, []);

  return date;
}

export default useCreateDate;
