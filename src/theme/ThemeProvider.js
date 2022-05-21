import React, { useState } from "react";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createGlobalStyle } from "styled-components";
import { THEMES } from "services/constant";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeState, setTheme] = useState(THEMES.DARK);

  const primaryColor = themeState === THEMES.LIGHT ? "#545454" : "#84ffff";
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {},
        palette: {
          type: themeState,
          primary: {
            main: primaryColor,
          },
        },
      }),
    [themeState]
  );

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      <Provider theme={theme}>
        <CssBaseline />
        <GlobalStyles theme={theme} />
        {children}
      </Provider>
    </ThemeContext.Provider>
  );
};

const GlobalStyles = createGlobalStyle`
    :not(.tox-toolbar)::-webkit-scrollbar {
      width: 4;
      background: #f9f9f9;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.palette.background.default};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.palette.primary.main};
      background-clip: padding-box;
      border: 7px solid transparent;
    }
  `;

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeContext Provider`);
  }
  return context;
}

export default ThemeProvider;
