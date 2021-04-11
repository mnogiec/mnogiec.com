import styled from 'styled-components';

import media from 'assets/styles/media';


export const StyledTechnology = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.mobileM}{
    margin: 4rem;
  }

  @media ${media.tablet}{
    margin: 5rem;
  }

  @media ${media.laptop}{
    margin: 6rem;
  }
`;

export const StyledTechnologyImage = styled.img`
  width: 11rem;
  display: block;
  margin-bottom: 2rem;
`;
