import React, {
 useState, useContext, useEffect, useRef,
} from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';

import englishSvg from 'assets/images/header/english.svg';
import germanSvg from 'assets/images/header/german.svg';
import polishSvg from 'assets/images/header/polish.svg';
import sunSvg from 'assets/images/header/sun.svg';
import moonSvg from 'assets/images/header/moon.svg';
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

  // Define current flag icon
  let languageIcon = englishSvg;
  if (state.language === 'de') {
    languageIcon = germanSvg;
  } else if (state.language === 'pl') {
    languageIcon = polishSvg;
  }

  // Set scroll listener
  document.addEventListener('scroll', () => {
    setScroll(window.scrollY);
  });

  // Function to handle body-click menu closing
  const useOutsideAlerter = (ref:any) => {
    useEffect(() => {
      const handleClickOutside = (event:Event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              setIsLanguageMenuOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };


  const languageMenuRef = useRef(null);
  useOutsideAlerter(languageMenuRef);


  return (
    <S.StyledHeader scroll={scroll}>
      <S.StyledLogoWrapper
        aria-label={intl.formatMessage({ id: 'aria.logo' })}
        title={intl.formatMessage({ id: 'header.logoHover' })}
        onClick={() => scrollTo('#home')}
      >
        <S.StyledLogoImage src={state.theme === 'light' ? logoLightSvg : logoDarkSvg} alt="MNogiec.com logo" />
        <S.StyledTextImage src={state.theme === 'light' ? textLightSvg : textDarkSvg} alt="MNOGIEC" />
      </S.StyledLogoWrapper>
      <S.StyledHamburgerWrapper
        aria-label={isSideMenuOpen ? intl.formatMessage({ id: 'aria.hamburgerMenu.close' }) : intl.formatMessage({ id: 'aria.hamburgerMenu.open' })}
        onClick={() => setIsSidemenuOpen((state) => !state)}
      >
        <S.StyledHamburgerTop show={isSideMenuOpen} />
        <S.StyledHamburgerMiddle show={isSideMenuOpen} />
        <S.StyledHamburgerBottom show={isSideMenuOpen} />
      </S.StyledHamburgerWrapper>
      <S.StyledNavigation isOpen={isSideMenuOpen}>
        <S.StyledNavList>
          <S.StyledNavItem>
            <S.StyledNavLink onClick={() => {
              setIsSidemenuOpen(false);
              scrollTo('#about');
            }}
            >
              {intl.formatMessage({ id: 'header.about' })}
            </S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink onClick={() => {
              setIsSidemenuOpen(false);
              scrollTo('#technologies');
            }}
            >
              {intl.formatMessage({ id: 'header.technologies' })}
            </S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink onClick={() => {
              setIsSidemenuOpen(false);
              scrollTo('#projects');
            }}
            >
              {intl.formatMessage({ id: 'header.projects' })}
            </S.StyledNavLink>
          </S.StyledNavItem>
          <S.StyledNavItem>
            <S.StyledNavLink onClick={() => {
              setIsSidemenuOpen(false);
              scrollTo('#contact');
            }}
            >
              {intl.formatMessage({ id: 'header.contact' })}
            </S.StyledNavLink>
          </S.StyledNavItem>
        </S.StyledNavList>
        <S.StyledSubnavWrapper>
          <S.StyledLanguageWrapper ref={languageMenuRef}>
            <S.StyledLanguageIcon
              src={languageIcon}
              alt={intl.formatMessage({ id: 'header.language' })}
              colorMode={state.theme}
              aria-label={intl.formatMessage({ id: 'aria.languagesButton' })}
              onClick={() => setIsLanguageMenuOpen((state) => !state)}
            />
            <S.StyledLanguageDropdown show={isLanguageMenuOpen}>
              <S.StyledLanguageList>
                <S.StyledLanguageItem isCurrent={state.language === 'en'} colorMode={state.theme}>
                  <S.StyledLanguageLink to="/">
                    <S.StyledLanguageListIcon src={englishSvg} alt="English language" />
                    <p>English</p>
                  </S.StyledLanguageLink>
                </S.StyledLanguageItem>
                <S.StyledLanguageItem isCurrent={state.language === 'de'} colorMode={state.theme}>
                  <S.StyledLanguageLink to="/de">
                    <S.StyledLanguageListIcon src={germanSvg} alt="Deutsche Sprache" />
                    <p>Deutsch</p>
                  </S.StyledLanguageLink>
                </S.StyledLanguageItem>
                <S.StyledLanguageItem isCurrent={state.language === 'pl'} colorMode={state.theme}>
                  <S.StyledLanguageLink to="/pl">
                    <S.StyledLanguageListIcon src={polishSvg} alt="Język polski" />
                    <p>Polski</p>
                  </S.StyledLanguageLink>
                </S.StyledLanguageItem>
              </S.StyledLanguageList>
            </S.StyledLanguageDropdown>
          </S.StyledLanguageWrapper>
          <S.StyledThemeButton
            aria-label={intl.formatMessage({ id: 'aria.themeButton' })}
            onClick={changeTheme}
            colorMode={state.theme}
          >
            <img src={sunSvg} alt={intl.formatMessage({ id: 'header.lightTheme' })} />
            <img src={moonSvg} alt={intl.formatMessage({ id: 'header.darkTheme' })} />
          </S.StyledThemeButton>
        </S.StyledSubnavWrapper>
      </S.StyledNavigation>
    </S.StyledHeader>
  );
};


export default Header;
