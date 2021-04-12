import React from 'react';

import * as T from './Heading.types';
import * as S from './Heading.styles';


const Heading:React.FC<T.Props> = ({
 title, subtitle, children, id,
}) => (
    <S.StyledWrapper>
      {id && (
        <S.StyledScroller id={id} />
      )}
      <S.StyledHeadingPart>
        <S.StyledTitle>
          {title}
        </S.StyledTitle>
        <S.StyledSubtitle>
          {subtitle}
        </S.StyledSubtitle>
      </S.StyledHeadingPart>
      <S.StyledTextPart>
        <S.StyledText>
          {children}
        </S.StyledText>
      </S.StyledTextPart>
    </S.StyledWrapper>
  );


export default Heading;
