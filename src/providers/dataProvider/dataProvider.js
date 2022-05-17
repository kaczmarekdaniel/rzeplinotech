import React, { useState } from "react";

export const DataContext = React.createContext({
  deleteUser: () => {},
});

const DataProvider = ({ children }) => {
  const deleteUser = () => {
    console.log("workinnnnnnnn");
  };
  return (
    <DataContext.Provider
      value={{
        deleteUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
