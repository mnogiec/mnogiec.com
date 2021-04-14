import React from 'react';
import { InView } from 'react-intersection-observer';

import Animate from 'components/Animate/Animate';

import * as T from './Heading.types';
import * as S from './Heading.styles';


const Heading:React.FC<T.Props> = ({
 title, subtitle, children, id,
}) => (
    <S.StyledWrapper>
      {id && (
        <S.StyledScroller id={id} />
      )}
      <InView>
        <Animate delay={300}>
          <S.StyledHeadingPart>
            <S.StyledTitle>
              {title}
            </S.StyledTitle>
            <S.StyledSubtitle>
              {subtitle}
            </S.StyledSubtitle>
          </S.StyledHeadingPart>
        </Animate>
      </InView>
      <InView>
        <Animate delay={600}>
          <S.StyledTextPart>
            <S.StyledText>
              {children}
            </S.StyledText>
          </S.StyledTextPart>
        </Animate>
      </InView>
    </S.StyledWrapper>
  );


export default Heading;
