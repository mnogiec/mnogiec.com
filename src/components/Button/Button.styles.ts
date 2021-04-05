import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledSubmit = styled.input<any>`
  padding: 1rem 2rem;
  margin: ${({ margin }) => (margin || '1rem 0')};

  font: inherit;
  font-size: ${({ theme }) => theme.font.size.m}; // default size
  font-size: ${({ size }) => size && size}; // if size is specified and not in theme
  /* iterating through theme.font.size and returns this font-size if matches props.size */
  ${({ size, theme }) => {
    let sizeToUse:string = '';
    for (const [name, value] of Object.entries(theme.font.size)) {
      if (size === name) {
        sizeToUse = `font-size: ${value};`;
      }
    }
    return sizeToUse;
  }}

  background-color: var(--color-primary);
  background-color: ${({ basic }) => basic && 'transparent'};
  background-color: ${({ theme, disabled }) => disabled && theme.color.gray};

  color: var(--color-background);
  color: ${({ basic }) => (basic && 'var(--color-primary)')};

  font-weight: ${({ light, theme }) => light && theme.font.weight.light};
  font-weight: ${({ bold, theme }) => bold && theme.font.weight.bold};

  text-transform: ${({ upper }) => upper && 'uppercase'};
  cursor: ${({ disabled }) => (disabled || 'pointer')};
  
  outline: none;
  border: none;
  border-radius: 1.5rem;
  backface-visibility: hidden;
  transition: transform 0.2s;
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(-0.1rem);
    outline: none;
  }

  &:focus:not(:hover) {
    transform: translateY(-0.3rem);
  }
`;

export const StyledNavLink = styled(Link)<any>`
  padding: 1rem 2rem;
  margin: ${({ margin }) => (margin || '1rem 0')};

  font: inherit;
  font-size: ${({ theme }) => theme.font.size.m}; // default size
  font-size: ${({ size }) => size && size}; // if size is specified and not in theme
  /* iterating through theme.font.size and returns this font-size if matches props.size */
  ${({ size, theme }) => {
    let sizeToUse:string = '';
    for (const [name, value] of Object.entries(theme.font.size)) {
      if (size === name) {
        sizeToUse = `font-size: ${value};`;
      }
    }
    return sizeToUse;
  }}

  background-color: var(--color-primary);
  background-color: ${({ basic }) => basic && 'transparent'};
  background-color: ${({ theme, disabled }) => disabled && theme.color.gray};

  color: var(--color-background);
  color: ${({ basic }) => (basic && 'var(--color-primary)')};

  font-weight: ${({ light, theme }) => light && theme.font.weight.light};
  font-weight: ${({ bold, theme }) => bold && theme.font.weight.bold};

  text-transform: ${({ upper }) => upper && 'uppercase'};
  cursor: ${({ disabled }) => (disabled || 'pointer')};
  
  outline: none;
  border: none;
  border-radius: 1.5rem;
  backface-visibility: hidden;
  transition: transform 0.2s;
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(-0.1rem);
    outline: none;
  }

  &:focus:not(:hover) {
    transform: translateY(-0.3rem);
  }
`;

export const StyledA = styled.a<any>`
  padding: 1rem 2rem;
  margin: ${({ margin }) => (margin || '1rem 0')};

  font: inherit;
  font-size: ${({ theme }) => theme.font.size.m}; // default size
  font-size: ${({ size }) => size && size}; // if size is specified and not in theme
  /* iterating through theme.font.size and returns this font-size if matches props.size */
  ${({ size, theme }) => {
    let sizeToUse:string = '';
    for (const [name, value] of Object.entries(theme.font.size)) {
      if (size === name) {
        sizeToUse = `font-size: ${value};`;
      }
    }
    return sizeToUse;
  }}

  background-color: var(--color-primary);
  background-color: ${({ basic }) => basic && 'transparent'};
  background-color: ${({ theme, disabled }) => disabled && theme.color.gray};

  color: var(--color-background);
  color: ${({ basic }) => (basic && 'var(--color-primary)')};

  font-weight: ${({ light, theme }) => light && theme.font.weight.light};
  font-weight: ${({ bold, theme }) => bold && theme.font.weight.bold};

  text-transform: ${({ upper }) => upper && 'uppercase'};
  cursor: ${({ disabled }) => (disabled || 'pointer')};
  
  outline: none;
  border: none;
  border-radius: 1.5rem;
  backface-visibility: hidden;
  transition: transform 0.2s;
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(-0.1rem);
    outline: none;
  }

  &:focus:not(:hover) {
    transform: translateY(-0.3rem);
  }
`;

export const StyledButton = styled.button<any>`
  padding: 1rem 2rem;
  margin: ${({ margin }) => (margin || '1rem 0')};

  font: inherit;
  font-size: ${({ theme }) => theme.font.size.m}; // default size
  font-size: ${({ size }) => size && size}; // if size is specified and not in theme
  /* iterating through theme.font.size and returns this font-size if matches props.size */
  ${({ size, theme }) => {
    let sizeToUse:string = '';
    for (const [name, value] of Object.entries(theme.font.size)) {
      if (size === name) {
        sizeToUse = `font-size: ${value};`;
      }
    }
    return sizeToUse;
  }}

  background-color: var(--color-primary);
  background-color: ${({ basic }) => basic && 'transparent'};
  background-color: ${({ theme, disabled }) => disabled && theme.color.gray};

  color: var(--color-background);
  color: ${({ basic }) => (basic && 'var(--color-primary)')};

  font-weight: ${({ light, theme }) => light && theme.font.weight.light};
  font-weight: ${({ bold, theme }) => bold && theme.font.weight.bold};

  text-transform: ${({ upper }) => upper && 'uppercase'};
  cursor: ${({ disabled }) => (disabled || 'pointer')};
  
  outline: none;
  border: none;
  border-radius: 1.5rem;
  backface-visibility: hidden;
  transition: transform 0.2s;
  -webkit-font-smoothing: subpixel-antialiased;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(-0.1rem);
    outline: none;
  }

  &:focus:not(:hover) {
    transform: translateY(-0.3rem);
  }
`;
