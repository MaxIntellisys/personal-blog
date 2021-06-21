import { useState, useEffect } from 'react';

export default function useDarkMode(): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState(false);

  const setTheme = (value: boolean) => {
    setDarkMode(value);
    if (value) {
      window.localStorage.setItem('localtheme', 'dark');
    } else {
      window.localStorage.setItem('localtheme', 'light');
    }
  };

  const toggleDarkMode = () => {
    setTheme(!darkMode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('localtheme');
    if (!localTheme || localTheme == 'light') {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);

  return [darkMode, toggleDarkMode];
}
