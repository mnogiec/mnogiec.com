import styled from 'styled-components';
import media from 'assets/styles/media';


export const StyledNotificationWrapper = styled.div<{show:boolean}>`
  width: 100%;
  position: fixed;
  bottom: 2rem;
  left: 0;
  display: flex;
  justify-content: center;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transform: ${({ show }) => show && 'translateY(0)'};
  z-index: 10;


  @media ${media.tabletL}{
    padding: 0 3.5rem;
    justify-content: initial;
  }

  @media ${media.laptop}{
    padding: 0 5rem;
  }

  @media ${media.laptopL}{
    padding: 0 6.5rem;
  }

  @media ${media.desktop}{
    width: 155rem;
    margin: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const StyledNotification = styled.div`
  width: 90vw;
  max-width: 50rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-headerBackground);
  transform: translateY(-2rem);
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};

  @media ${media.tabletL}{
    max-width: 45rem;
  }
`;

export const StyledTop = styled.div`
  margin-bottom: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 2.5rem;
`;

export const StyledLink = styled.a`
  display: inline;
  color: var(--color-font);
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledBottom = styled.div`
  width: 100%;

  & > button{
    width: 100%;
  }
`;

export const StyledIcon = styled.img`
  display: block;
  width: 5rem;
  margin-right: 1.5rem;
`;
