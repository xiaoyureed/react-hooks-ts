import React, { useState } from "react";

const themes = {
  light: {
    color: "#000000",
    backgroundColor: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    backgroundColor: "#222222",
  },
};

// init a context.
// const ThemeContext = createContext({
//   currentTheme: themes.light,
//   toggle: () => {},
// });

const ThemedButton: React.FC = (props) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <button
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        border: "none",
      }}
      onClick={() => {
        setTheme((theme) =>
          theme === themes.light ? themes.dark : themes.light
        );
      }}
    >
      {props.children}
    </button>
  );
};

export default ThemedButton;
