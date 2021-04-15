import React, { useContext } from 'react';

import Text from 'components/Text/Text';
import { Context as GlobalContext } from 'context/GlobalContext';

import linkedinIconDark from 'assets/images/footer/linkedin_dark.svg';
import githubIconDark from 'assets/images/footer/github_dark.svg';
import mailIconDark from 'assets/images/footer/mail_dark.svg';
import linkedinIconLight from 'assets/images/footer/linkedin_light.svg';
import githubIconLight from 'assets/images/footer/github_light.svg';
import mailIconLight from 'assets/images/footer/mail_light.svg';

import * as S from './Footer.styles';


const Footer:React.FC = () => {
  let { state } = useContext(GlobalContext);

  if (typeof window === 'undefined') {
    state = {
      language: 'en',
      theme: 'light',
      hadDisplayedCookies: false,
    };
  }


  return (
    <S.StylesFooter>
      <S.StyledTextWrapper colorMode={state.theme}>
        <Text bold inline>MNogiec.com</Text>
        <Text bold inline> &copy; {new Date().getFullYear()}</Text>
      </S.StyledTextWrapper>
      <S.StyledIconsWrapper>
        <S.StyledLink target="_blank" href="https://www.linkedin.com/in/nogiecmikolaj/" rel="noreferrer">
          <S.StyledIcon src={state.theme === 'light' ? linkedinIconLight : linkedinIconDark} alt="LinkedIn" />
        </S.StyledLink>
        <S.StyledLink target="_blank" href="https://github.com/mnogiec" rel="noreferrer">
          <S.StyledIcon src={state.theme === 'light' ? githubIconLight : githubIconDark} alt="Github" />
        </S.StyledLink>
        <S.StyledLink target="_blank" href="mailto:nogiecmikolaj@gmail.com">
          <S.StyledIcon src={state.theme === 'light' ? mailIconLight : mailIconDark} alt="Mail" />
        </S.StyledLink>
      </S.StyledIconsWrapper>
    </S.StylesFooter>
  );
};


export default Footer;
