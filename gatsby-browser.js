import React from 'react';
import { Provider as GlobalProvider } from 'context/GlobalContext';


export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    {element}
  </GlobalProvider>
);
