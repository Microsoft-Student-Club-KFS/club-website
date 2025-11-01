'use client';

import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Theme,
} from '@fluentui/react-components';
import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function Providers({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme: Theme = isDark ? webDarkTheme : webLightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <FluentProvider theme={theme}>
        <div style={{
          backgroundColor: theme.colorNeutralBackground1,
          color: theme.colorNeutralForeground1,
          minHeight: '100vh',
        }}>
          {children}
        </div>
      </FluentProvider>
    </ThemeContext.Provider>
  );
}
