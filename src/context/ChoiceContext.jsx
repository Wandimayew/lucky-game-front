import React, { createContext, useState } from 'react';

// Create a new context
const ChoiceContext = createContext();

// Create a provider component

const ChoiceProvider = ({ children }) => {
  const [categoryChoiceId,setCategoryChoiceId]= useState("");

  return (
    <ChoiceContext.Provider value={{ categoryChoiceId, setCategoryChoiceId }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export { ChoiceContext, ChoiceProvider };