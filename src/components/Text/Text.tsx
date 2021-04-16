import React from 'react';

import * as S from './Text.styles';
import * as T from './Text.types';


const Text:React.FC<T.Props> = (props) => {
  const { children }:T.Props = props;


  return (
    <S.StyledParagraph {...props}>
      {children}
    </S.StyledParagraph>
  );
};


export default Text;
