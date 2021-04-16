import React from 'react';

import Text from 'components/Text/Text';

import * as T from './Technology.types';
import * as S from './Technology.styles';


const Technology:React.FC<T.Props> = ({ name, img }) => (
    <S.StyledTechnology>
      <S.StyledTechnologyImage src={img} alt={name} />
      <Text bold>{name}</Text>
    </S.StyledTechnology>
  );


export default Technology;
