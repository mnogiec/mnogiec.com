import React, { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'assets/styles/GlobalStyle';
import Helmet from 'components/Helmet/Helmet';
import { Context as GlobalContext } from 'context/GlobalContext';
import Header from 'components/Header/Header';
import theme from 'assets/styles/theme';

import * as S from './Layout.styles';
import * as T from './Layout.types';


const Layout:React.FC<T.Props> = ({
 children, pageTitle, header,
}) => {
  const { initialContextCheck } = useContext(GlobalContext);


  // Check context content on url change (or 1st page load-up)
  useEffect(() => {
    initialContextCheck();
  }, []);


  return (
    <>
      <Helmet pageTitle={pageTitle} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {header && <Header />}
        <S.StyledWrapper header={header}>
          {children}
        </S.StyledWrapper>
      </ThemeProvider>
    </>
  );
};



export default Layout;
