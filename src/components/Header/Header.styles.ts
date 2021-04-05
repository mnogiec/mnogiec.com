import { Link } from 'gatsby';
import styled from 'styled-components';

import media from 'assets/styles/media';


export const StyledHeader = styled.header<{scroll:number}>`
  width: 100%;
  height: ${({ theme }) => theme.const.HEADER_HEIGHT};
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-headerBackground);
  box-shadow: ${({ scroll, theme }) => scroll > 50 && theme.shadow};
  transition: box-shadow .2s;
  z-index: 100;
`;

export const StyledLogoWrapper = styled.button`
`;

export const StyledHamburgerWrapper = styled.button`
  @media ${media.laptop}{
    display: none;
  }

  & .hamburger{
    
  }

  & .hamburger-box{

  }

  & .hamburger-inner{

  }
`;

export const StyledNavigation = styled.nav<{isOpen:boolean}>`
  position: fixed;
  top: ${({ theme }) => theme.const.HEADER_HEIGHT};
  left: 0;
  transform: ${({ isOpen }) => !isOpen && 'translateX(100vw)'};
  right: 0;
  padding: 2rem 0;
  background-color: var(--color-background);
  transition: transform .5s;
  box-shadow: ${({ theme }) => theme.shadow};
  border-bottom: .3rem solid var(--color-primary);
  z-index: 90;

  @media ${media.laptop}{
    display: flex;
    position: initial;
    top: auto;
    left: auto;
    right: auto;
    padding: 0;
    background: none;
    box-shadow: none;
    border: none;
    transform: initial;
    transition: initial;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;

  @media ${media.laptop}{
    display: flex;
  }
`;

export const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled.button`
  background: none;
  border: none;
  outline: none;
  font: inherit;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: var(--color-font);
  cursor: pointer;
  padding: 1rem 3rem;
  margin: 2rem 0;
  text-align: center;

  &:hover{
    color: var(--color-primary);
  }

  @media ${media.laptop}{
    height: 100%;
    margin: 0 2rem;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSubnavWrapper = styled.div`
  padding: 0 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLanguage = styled.div`
  @media ${media.laptop}{
    margin: 0 2rem;
  }
`;

export const StyledThemeButton = styled.button`

`;
