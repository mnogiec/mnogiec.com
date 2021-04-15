import styled, { keyframes } from 'styled-components';

import * as T from './Spinner.types';


export const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<T.Props>`
  display: inline-block;
  width: 8rem;
  height: 8rem;
  margin: ${({ margin }) => margin && margin};
  position: relative;

  div{
    display: block;
    width: 6.4rem;
    height: 6.4rem;
    margin: .8rem;
    position: absolute;
    border: 0.8rem solid var(--color-primary);
    border-color:  var(--color-primary) transparent transparent transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  div:nth-child(1){
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
