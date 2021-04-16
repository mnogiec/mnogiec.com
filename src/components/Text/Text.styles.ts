import styled from 'styled-components';

import * as T from './Text.types';


export const StyledParagraph = styled.p<T.Props>`
  display: ${({ inline }) => inline && 'inline'};
  margin: ${({ margin }) => margin && margin};

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

  color: inherit;
  color: ${({ color }) => color && color};
  color: ${({ primaryColor }) => primaryColor && 'var(--color-primary)'};
  color: ${({ error }) => error && 'rgb(204, 41, 34)'};

  font-weight: ${({ light, theme }) => light && theme.font.weight.light};
  font-weight: ${({ bold, error, theme }) => (bold || error) && theme.font.weight.bold};

  text-transform: ${({ upper }) => upper && 'uppercase'};

  text-align: ${({ tac }) => tac && 'center'};
  text-align: ${({ taj }) => taj && 'justify'};

  text-indent: ${({ indent }) => indent && '3rem'};
`;
