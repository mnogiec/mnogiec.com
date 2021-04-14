import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import * as S from './Animate.styles';
import * as T from './Animate.types';


const Animate:React.FC<T.Props> = ({
 children, anim = 'slide-up', delay = 0, duration = 500,
 }) => {
  const [show, setShow] = useState(false);


  return (
    <InView>
      {({ inView, ref }) => {
        if (inView) {
          setShow(true);
        }


        return (
          <S.StyledAnimation
            anim={anim}
            delay={delay}
            duration={duration}
            inView={show}
            ref={ref}
          >
            {children}
          </S.StyledAnimation>
        );
      }}
    </InView>
   );
 };



export default Animate;
