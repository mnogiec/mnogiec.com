import styled from 'styled-components';

import * as T from './Animate.types';


export const StyledAnimation = styled.div<T.CSSProps>`
  transform: translateY(3rem); //default slide-up
  transform: ${({ anim }) => anim === 'slide-up' && 'translateY(3rem)'};
  transform: ${({ anim }) => anim === 'slide-down' && 'translateY(-3rem)'};
  transform: ${({ anim }) => anim === 'slide-left' && 'translateX(5rem)'};
  transform: ${({ anim }) => anim === 'slide-right' && 'translateX(-5rem)'};

  transform: ${({ inView }) => inView && 'translate(0)'};

  opacity: 0;
  opacity: ${({ inView }) => inView && '1'};

  transition: transform 1s, opacity 1s;
  transition: ${({ duration }) => duration && `transform ${duration / 1000}s, opacity ${duration / 1000}s`};

  transition-delay: ${({ delay }) => delay && `${delay / 1000}s`};
`;
