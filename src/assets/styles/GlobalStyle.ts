import { createGlobalStyle } from 'styled-components';
import theme from 'assets/styles/theme';
import media from 'assets/styles/media';


export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-weight: normal;
    text-decoration: none;
    -webkit-font-smoothing: antianalized;
    -moz-osx-font-smoothing: grayscale;
  }

  :root{
    --color-primary: ${theme.color.primary.light};
    --color-background: ${theme.color.background.light};
    --color-sectionGradient-start: ${theme.color.sectionGradient.start.light};
    --color-sectionGradient-end: ${theme.color.sectionGradient.end.light};
    --color-headerBackground: ${theme.color.headerBackground.light};
    --color-font: ${theme.color.font.light};
    --color-subHeading: ${theme.color.subHeading.light};
  }

  html{
    font-size: 50%;

    @media ${media.tablet}{
      font-size: 55%;
    }
    
    @media ${media.laptop}{
      font-size: 62.5%;
    }
  }

  body{
    font-family: ${theme.font.family.montserrat};
    font-size: ${theme.font.size.m};
    color: var(--color-font);
    background-color: var(--color-background);
  }

  ::selection{
    background-color: var(--color-primary);
    color: #ffffff;
  }
`;
