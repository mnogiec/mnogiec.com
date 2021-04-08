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

  @media ${media.tablet}{
    padding: 0 4rem;
  }

  @media ${media.laptop}{
    padding: 0 8rem;
  }
`;

export const StyledLogoWrapper = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  align-items: center;
`;

export const StyledLogoImage = styled.img`
  display: block;
  height: ${({ theme }) => `calc(0.6 * ${theme.const.HEADER_HEIGHT})`};

  @media ${media.tabletL}{
    height: ${({ theme }) => `calc(0.7 * ${theme.const.HEADER_HEIGHT})`};
  }

  @media ${media.laptop}{
    height: auto;
  }

  @media ${media.desktop}{
    padding-right: 3rem;
  }
`;

export const StyledTextImage = styled.img`
  display: none;

  @media ${media.desktop}{
    display: block;
    padding: .5rem 0;
    padding-left: 2.5rem;
    border-left: .2rem solid #8E8E8E;
  }
`;

export const StyledHamburgerWrapper = styled.button`
  @media ${media.laptopL}{
    display: none;
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

  @media ${media.laptopL}{
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

  @media ${media.laptopL}{
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

  @media ${media.laptopL}{
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

export const StyledLanguageWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0;
`;

export const StyledLanguageIcon = styled.img<{colorMode:string}>`
  width: 3rem;
  padding: 0;
  cursor: pointer;

  @media ${media.laptopL}{
    margin: 0 2rem;
  }
`;

export const StyledLanguageDropdown = styled.div<{show:boolean}>`
  position: absolute;
  top: 5.5rem;
  left: 25%;
  background-color: var(--color-headerBackground);
  border-radius: .8rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-2rem);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  opacity: ${({ show }) => show && '1'};
  visibility: ${({ show }) => show && 'visible'};
  transform: ${({ show }) => show && 'translateY(0)'};
`;

export const StyledLanguageList = styled.ul`
  list-style: none;
`;

export const StyledLanguageItem = styled.li<{isCurrent:boolean, colorMode:string}>`
  &:not(:last-of-type){
    border-bottom: .1rem solid #ddd;
    border-color: ${({ colorMode }) => (colorMode === 'light' ? 'ddd' : '#444')};
  }

  &:hover{
    color: var(--color-primary);
  }
`;

export const StyledLanguageLink = styled(Link)`
  display: flex;
  color: inherit;
  padding: .5rem 1rem;
  margin: 1rem 0;

  @media ${media.laptop}{
    margin: 0.5rem 0;
  }
`;

export const StyledLanguageListIcon = styled.img`
  height: 2.3rem;
  margin-right: 1rem;
`;

export const StyledThemeButton = styled.button<{colorMode:string}>`
  width: 4.5rem;
  height: 2.6rem;
  padding: .5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ colorMode }) => (colorMode === 'light' ? 'linear-gradient(#6eacdc, #6e9adc)' : 'linear-gradient(#091236, #1E215D)')};
  border-radius: 2.5rem;
  border: ${({ colorMode }) => (colorMode === 'light' ? '.1rem solid #5266cf' : '.1rem solid #252735')};
  outline: none;
  overflow: hidden;
  cursor: pointer;

  & > img{
    height: auto;
    width: 1.7rem;
    transition: .3s linear;
    
    &:first-child{
      transform: ${({ colorMode }) => (colorMode === 'light' ? 'translateY(0)' : 'translateY(10rem)')};
    }

    &:last-child{
      transform: ${({ colorMode }) => (colorMode !== 'light' ? 'translateY(0)' : 'translateY(10rem)')};
    }
  }
`;
