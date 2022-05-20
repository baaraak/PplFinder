import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTheme } from "theme/ThemeProvider";
import { IconButton } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { THEMES } from "constant";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      color="transparent"
      style={{
        position: "fixed",
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Tabs
        value={pathname}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" value="/" to="/" component={Link} />
        <Tab label="Favorites" value="/favorites" to="/favorites" component={Link} />
      </Tabs>
      <IconButton
        aria-label="change theme"
        onClick={() => setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)}
      >
        {theme === THEMES.LIGHT ? <WbSunnyIcon /> : <Brightness3Icon />}
      </IconButton>
    </AppBar>
  );
};

export default NavBar;
