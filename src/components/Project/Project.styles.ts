import styled from 'styled-components';

import media from 'assets/styles/media';


export const StyledProject = styled.div<{bgColor: string}>`
  width: 100%;
  margin: 3rem 0;
  padding: 3rem 2rem;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  line-height: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${media.tablet}{
    grid-template-columns: [start] 1fr [middle] 1fr [end];
    grid-template-rows: [start heading-start] max-content [heading-end text-start] max-content [text-end] 1fr [tech-start] max-content [tech-end end];
    line-height: 4rem;
    align-items: center;
  }

  @media ${media.laptop}{
    width: 80%;
    margin: 3rem auto;
    grid-column-gap: 10rem;
  }
`;

export const StyledHeading = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  
  @media ${media.tablet}{
    grid-row: heading-start/heading-end;
    grid-column: start/middle;
  }
`;

export const StyledTextWrapper = styled.div`
  @media ${media.tablet}{
    grid-row: text-start/text-end;
    grid-column: start/middle;
  }
`;

export const StyledProjectImage = styled.img<{type?:string}>`
  display: block;
  width: 100%;
  margin: 3rem 0;
  padding: 0 1rem;

  padding: ${({ type }) => type === 'unseal' && '0 8rem'};

  @media ${media.tablet}{
    grid-row: start/end;
    grid-column: middle/end;
    margin: -4rem 0;
    transform: rotate(2deg);
    height: 90%;
    object-fit: contain;

    padding: ${({ type }) => type === 'unseal' && '0 8rem'};
    margin: ${({ type }) => type === 'unseal' && '-7rem 0'};
  }

  @media ${media.laptop}{
    height: 100%;

    height: ${({ type }) => type === 'unseal' && '120%'};
  }
`;

export const StyledTechnologiesWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media ${media.tablet}{
    grid-row: tech-start/tech-end;
    grid-column: start/middle;
    justify-content: flex-start;
  }
`;

export const StyledTechnology = styled.p`
  display: inline-block;
  border-radius: 2rem;
  padding: .5rem 1.5rem;
  margin: 1rem 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.7rem;
  color: white;
  text-transform: uppercase;
  background-color: rgba(255,255,255,.2);

  @media ${media.tablet}{
    margin-right: 1.5rem;
    padding: 0 1.5rem;
  }
`;
