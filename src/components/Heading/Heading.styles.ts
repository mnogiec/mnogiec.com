import styled from 'styled-components';

import media from 'assets/styles/media';


export const StyledWrapper = styled.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;

  @media ${media.laptop}{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledHeadingPart = styled.div`
  margin-bottom: 2.5rem;

  @media ${media.laptop}{
    margin: 0;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 4rem;
  color: var(--color-primary);
`;

export const StyledSubtitle = styled.h3`
  font-size: 4.5rem;
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
`;

export const StyledTextPart = styled.div`
  padding-left: 2rem;
  border-left: .1rem solid var(--color-primary);
  line-height: 3rem;
  font-size: ${({ theme }) => theme.font.size.s};
  
  @media ${media.laptop}{
    width: 45rem;
    justify-content: center;
    line-height: 4rem;
  }
`;

export const StyledText = styled.p`
  color: var(--color-subHeading)
`;

