import styled from 'styled-components';
import media from 'assets/styles/media';


export const StyledNotificationWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 2rem;
  left: 0;
  display: flex;
  justify-content: center;
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

export const StyledNotification = styled.div<{show:boolean}>`
  width: 90vw;
  max-width: 50rem;
  padding: 1.5rem;
  transform: translateY(-2rem);
  display: flex;
  flex-direction: column;
  background-color: var(--color-headerBackground);
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  opacity: ${({ show }) => show && '1'};
  visibility: ${({ show }) => show && 'visible'};
  transform: ${({ show }) => show && 'translateY(0)'};

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
