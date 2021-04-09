import styled from 'styled-components';
import media from 'assets/styles/media';


export const StyledBubblesContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.const.HEADER_HEIGHT};
  left: 0;
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.const.HEADER_HEIGHT})`};
  overflow: hidden;
`;

export const StyledHeroWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 2rem;
  padding-top: 2rem;
  height: ${({ theme }) => `calc(100vh - ${theme.const.HEADER_HEIGHT})`};
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

export const StyledSection = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem;
  background: linear-gradient(var(--color-sectionGradient-start), var(--color-sectionGradient-end));

`;

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media ${media.laptopL}{
    width: 125rem;
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
  grid-row: text-start/text-end;
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const StyledHeroImage = styled.img`
  display: block;
  width: 75vw;
  max-width: 50rem;
  margin: 0 auto;
  grid-row: image-start/image-end;
  transform: rotate(-3deg);
  
  @media ${media.tabletL}{
    max-width: 45rem;
    margin-right: 2rem;
    transform: initial;
    grid-row: start/end;
    grid-column: middle/end;
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
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${media.tablet}{
    padding: 0;
    width: 40rem;
  }
`;

export const StyledTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
