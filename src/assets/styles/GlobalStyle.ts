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
    --color-scrollBarBackground: ${theme.color.scrollbar.background.light};
    --color-scrollBarThumb: ${theme.color.scrollbar.thumb.light};
    --color-scrollBarThumbHover: ${theme.color.scrollbar.thumbHover.light};
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

  img::selection{
    background-color: transparent;
  }

  ::-webkit-scrollbar{
    width: 1rem;
  }
  ::-webkit-scrollbar-track{
    background-color: var(--color-scrollBarBackground);

  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--color-scrollBarThumb);
    border-radius: 2rem;
    transition: .2s;

    &:hover{
      background-color: var(--color-scrollBarThumbHover);
    }
  }
`;
