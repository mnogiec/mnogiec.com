import React, { useState, useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';

import logoDarkSvg from 'assets/images/header/logo_dark.svg';
import logoLightSvg from 'assets/images/header/logo_light.svg';
import textDarkSvg from 'assets/images/header/text_dark.svg';
import textLightSvg from 'assets/images/header/text_light.svg';
import * as S from './Header.styles';


const Header:React.FC = () => {
  const intl = useIntl();
  const { state, changeTheme } = useContext(GlobalContext);

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSidemenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  document.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });

  return (
    <S.StyledHeader scroll={scroll}>
      <S.StyledLogoWrapper title={intl.formatMessage({ id: 'header.logoHover' })} onClick={() => null}>
        <S.StyledLogoImage src={state.theme === 'light' ? logoLightSvg : logoDarkSvg} alt="MNogiec.com logo" />
        <S.StyledTextImage src={state.theme === 'light' ? textLightSvg : textDarkSvg} alt="" />
      </S.StyledLogoWrapper>
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
