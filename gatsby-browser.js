import React from 'react';
import { Provider as ContextProvider } from 'context/ThemeContext';


export const wrapRootElement = ({ element }) => (
    <ContextProvider>
      {element}
    </ContextProvider>
  );
