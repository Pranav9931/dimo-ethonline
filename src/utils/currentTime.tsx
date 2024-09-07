import { useState, useEffect } from 'react';

const useUserTimezoneTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        timeZone: userTimeZone,
        hour12: true, // Enables 12-hour format with AM/PM
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentTime(formattedTime);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return currentTime;
};

export default useUserTimezoneTime;
