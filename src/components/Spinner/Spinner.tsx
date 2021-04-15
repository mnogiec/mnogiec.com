import React from 'react';

import * as S from './Spinner.styles';
import * as T from './Spinner.types';


const Spinner:React.FC<T.Props> = ({ margin }) => (
  <S.StyledSpinner margin={margin}>
    <div />
    <div />
    <div />
    <div />
  </S.StyledSpinner>
);


export default Spinner;
