import React, { useState, useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';

import * as S from './Header.styles';
// import * as T from './Header.types';


const Header:React.FC = () => {
  const intl = useIntl();
  const { changeTheme } = useContext(GlobalContext);

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSidemenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  document.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });

  return (
    <S.StyledHeader scroll={scroll} title={intl.formatMessage({ id: 'header.logoHover' })}>
      <S.StyledLogoWrapper>Logo</S.StyledLogoWrapper>
      <S.StyledHamburgerWrapper onClick={() => setIsSidemenuOpen((state) => !state)}>
        MENU
      </S.StyledHamburgerWrapper>
      <S.StyledNavigation isOpen={isSideMenuOpen}>
        <S.StyledNavList>
          <S.StyledNavItem>
            <S.StyledNavLink>{intl.formatMessage({ id: 'header.about' })}</S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink>{intl.formatMessage({ id: 'header.technologies' })}</S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink>{intl.formatMessage({ id: 'header.projects' })}</S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink>{intl.formatMessage({ id: 'header.contact' })}</S.StyledNavLink>
          </S.StyledNavItem>
        </S.StyledNavList>
        <S.StyledSubnavWrapper>
          <S.StyledLanguage>
            ENG
          </S.StyledLanguage>
          <S.StyledThemeButton onClick={changeTheme}>
            Theme
          </S.StyledThemeButton>
        </S.StyledSubnavWrapper>
      </S.StyledNavigation>
    </S.StyledHeader>
  );
};


export default Header;
