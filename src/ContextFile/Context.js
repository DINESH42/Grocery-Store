import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

const AppContext = createContext();

const ContextProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const onHandleName = (theme) => {
    setTheme(theme);
  };

  return (
    <AppContext.Provider
      value={{
        onHandleName,
        theme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
