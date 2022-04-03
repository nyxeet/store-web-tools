import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type Props = {
  children: React.ReactNode;
  theme?: object;
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Container = ({ children, theme }: Props) => {
  const Theme: object = theme || darkTheme;
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default Container;
