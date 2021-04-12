import styled from 'styled-components';
import media from 'assets/styles/media';


export const StylesFooter = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background-color: var(--color-primary);
  color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.tablet}{
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledTextWrapper = styled.div<{colorMode:'light'|'dark'}>`
  letter-spacing: .25rem;

  @media ${media.tablet}{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2.5rem;
    padding-right: 2.5rem;
    border-right: ${({ colorMode }) => (colorMode === 'light' ? '.2rem solid #5C5EA7' : '.2rem solid #9C8F72')};
  }
`;

export const StyledIconsWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  @media ${media.tablet}{
    margin-top: 0;
    justify-content: center;
  }

  & > a:not(:last-child){
    margin-right: 3rem;

    @media ${media.tablet}{
      margin-right: 2rem;
    }
  }
`;

export const StyledLink = styled.a`
  height: 2.3rem;
`;

export const StyledIcon = styled.img`
  display: block;
  height: 100%;
`;
