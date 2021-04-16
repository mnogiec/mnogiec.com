import React, { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'assets/styles/GlobalStyle';
import Helmet from 'components/Helmet/Helmet';
import Header from 'components/Header/Header';
import { Context as GlobalContext } from 'context/GlobalContext';
import theme from 'assets/styles/theme';

import * as S from './Layout.styles';
import * as T from './Layout.types';


const Layout:React.FC<T.Props> = ({
 children, header, lang, pageTitle, pageDescription, pageKeywords,
}) => {
  const { initialContextCheck } = useContext(GlobalContext);


  // Check context content on url change (including 1st page load-up)
  useEffect(() => {
    initialContextCheck();
  }, []);


  return (
    <>
      <Helmet
        lang={lang}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
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
