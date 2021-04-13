import React from 'react';

import Text from 'components/Text/Text';

import * as T from './Project.types';
import * as S from './Project.styles';


const Project:React.FC<T.Props> = ({
 children, name, technologies, img, bgColor, type,
}) => (
  <S.StyledProject bgColor={bgColor}>
    <S.StyledHeading>{name}</S.StyledHeading>
    <S.StyledTextWrapper>
      <Text size="s" color="white">{children}</Text>
    </S.StyledTextWrapper>
    <S.StyledProjectImage src={img} alt={`${name} mockup`} type={type} />
    <S.StyledTechnologiesWrapper>
      {technologies.map((tech) => <S.StyledTechnology key={tech}>{tech}</S.StyledTechnology>)}
    </S.StyledTechnologiesWrapper>
  </S.StyledProject>
);


export default Project;
