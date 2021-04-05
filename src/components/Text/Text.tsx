import React, { useContext } from 'react';

import { Context as GlobalContext } from 'context/GlobalContext';

import * as S from './Text.styles';
import * as T from './Text.types';


const Text:React.FC<T.Props> = (props) => {
  const { children }:T.Props = props;
  const { state } = useContext(GlobalContext);

  return (
    <S.StyledParagraph {...props}>
      {children}
    </S.StyledParagraph>
  );
};


export default Text;
