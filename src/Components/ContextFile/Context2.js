import React, { useState, createContext } from "react";

const AppContext = createContext();

const Context2 = (props) => {
  const [fname, setName] = useState("");

  const handleName = (name) => {
    setName(name);
  };

  return (
    <AppContext.Provider
      value={{
        fname,
        handleName,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, Context2 };
