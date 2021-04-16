import styled from 'styled-components';

import media from 'assets/styles/media';


// SECTION WRAPPERS ETC.
export const StyledHomeScroller = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
`;

export const StyledSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 7rem 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(var(--color-sectionGradient-start), var(--color-sectionGradient-end));
  overflow: hidden;
`;

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${media.laptopL}{
    width: 125rem;
    margin: 0 auto;
  }
`;


// HERO
export const StyledHeroWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.const.HEADER_HEIGHT})`};
  padding: 0 2rem;
  padding-top: 2rem;
  position: relative;
  display: grid;
  grid-template-rows: 1fr min-content;

  @media ${media.tablet}{
    padding: 0 3.5rem;
  }

  @media ${media.laptop}{
    padding: 0 5rem;
  }

  @media ${media.laptopL}{
    padding: 0 6.5rem;
  }

  @media ${media.desktop}{
    width: 155rem;
    margin: 0 auto;
  }
`;

export const StyledHeroMainBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: [text-start] max-content [text-end image-start] max-content [image-end buttons-start] max-content [buttons-end];
  justify-content: space-evenly;
  align-content: space-evenly;
  align-items: center;

  @media ${media.tabletL}{
    grid-template-columns: [start] max-content [middle] max-content [end];
    grid-template-rows: [start] max-content [middle] max-content [end];
    justify-content: space-between;
    align-content: center;
  }
`;

export const StyledHeroTitlesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: text-start/text-end;
  font-size: 4rem;

  @media ${media.mobileM}{
    font-size: 4.5rem;
  }

  @media ${media.tablet}{
    font-size: 5.5rem;
  }

  @media ${media.tabletL}{
    align-items: initial;
    grid-row: start/middle;
    grid-column: start/middle;
  }

  @media ${media.laptopL}{
    font-size: 6.5rem;
  }

  @media ${media.desktop}{
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

export const StyledHeroTitle = styled.p`
  color: var(--color-primary);
  text-align: center;

  @media ${media.tabletL}{
    text-align: initial;
  }
`;

export const StyledHeroSubtitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;

  @media ${media.tabletL}{
    text-align: initial;
  }
`;

export const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: button-start/buttons-end;

  @media ${media.tabletL}{
    flex-direction: row;
    grid-row: middle/end;
    grid-column: start/middle;

    &>button:first-child{
      margin-right: 2rem;
    }
  }
`;

export const StyledHeroImage = styled.img<{inView:boolean}>`
  display: block;
  width: 75vw;
  max-width: 50rem;
  margin: 0 auto;
  grid-row: image-start/image-end;

  transform: rotate(-3deg) translateY(3rem);
  transform: ${({ inView }) => inView && 'rotate(-3deg) translate(0)'};

  opacity: 0;
  opacity: ${({ inView }) => inView && '1'};

  transition: transform 1s, opacity 1s;
  transition-delay: 1.3s;
  
  @media ${media.tabletL}{
    max-width: 45rem;
    margin-right: 2rem;
    grid-row: start/end;
    grid-column: middle/end;
    transform: translateY(3rem);
    transform: ${({ inView }) => inView && 'translate(0)'};
    transition-delay: 1.8s;
  }

  @media ${media.laptopL}{
    max-width: 55rem;
  }

  @media ${media.desktop}{
    width: 60rem;
    max-width: initial;
  }
`;

export const StyledHeroBottomBar = styled.div`
  padding: 4rem 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${media.tabletL}{
    padding: 4rem 0;
    justify-content: flex-end;
  }
`;

export const StyledHeroSocialLink = styled.a`
  margin: 0 1rem;
`;

export const StyledHeroSocialIcon = styled.img`
  display: block;
  width: 3rem;

  @media ${media.laptop}{
    width: 2.5rem;
  }
`;


// ABOUT
export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 4rem;

  @media ${media.tablet}{
    flex-direction: row-reverse;
  }
`;

export const StyledAboutImageWrapper = styled.div`
  width: 90vw;
  max-width: 50rem;
  margin: 0 auto 1.5rem auto;

  @media ${media.tablet}{
    max-width: initial;
    width: auto;
    margin: 0;
    margin-left: 5rem;
  }

  @media ${media.laptop}{
    margin-left: 10rem;
  }

  @media ${media.desktop}{
    margin-left: 13rem;
  }
`;

export const StyledAboutImage = styled.img`
  display: block;
  width: 100%;
  padding: 2rem;

  @media ${media.tablet}{
    width: 40rem;
    padding: 0;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;


// TECHNOLOGIES
export const StyledTechnologies = styled.div`
  padding: -3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: hidden;

  @media ${media.mobileM}{
    padding: -4rem;
  }
  
  @media ${media.tablet}{
    padding: inherit;
  }

  @media ${media.laptop}{
    padding: -6rem;
  }

  @media ${media.desktop}{
    margin: -6rem;
    justify-content: space-between;
  }
`;


// PROJECTS
export const StyledProjects = styled.div`
  margin: -3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// CONTACT
export const StyledContactSection = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${media.tablet}{
    width: 80%;
  }

  @media ${media.laptop}{
    width: 75%;
  }
`;

export const StyledContactSectionButtonWrapper = styled.div`
  margin: 2rem auto 0 auto;
`;

export const StyledContactThankWrapper = styled.div`
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledContactThankIcon = styled.img`
  display: block;
  width: 10rem;
  margin-bottom: 2rem;

  @media ${media.laptop}{
    width: 15rem;
  }
`;


// MISC
export const StyledScrollupButton = styled.button`
  display: none;
  position: absolute;
  right: -5vw;
  bottom: 5vw;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media ${media.desktop}{
    display: block;
  }
`;

export const StyledScrollupIcon = styled.img`
  display: block;
`;


// RECAPTCHA
export const StyledReCaptchaWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
`;
