import React from 'react';

import '@fontsource/montserrat/300-italic.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700-italic.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900-italic.css';
import '@fontsource/montserrat/900.css';

import { Provider as GlobalProvider } from 'context/GlobalContext';


export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    {element}
  </GlobalProvider>
);
