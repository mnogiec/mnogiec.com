import React, { useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'assets/styles/GlobalStyle';
import Helmet from 'components/Helmet/Helmet';
import { Context as ThemeContext } from 'context/ThemeContext';
import theme from 'assets/styles/theme';

import * as S from './Layout.styles';
import * as T from './Layout.types';


const Layout:React.FC<T.Props> = ({
 children, pageTitle, header,
}) => {
  const { initialThemeCheck } = useContext(ThemeContext);

  useEffect(() => {
    initialThemeCheck();
  }, []);


  return (
    <>
      <Helmet pageTitle={pageTitle} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <S.StyledWrapper header={header}>
          {children}
        </S.StyledWrapper>
      </ThemeProvider>
    </>
  );
};



export default Layout;
