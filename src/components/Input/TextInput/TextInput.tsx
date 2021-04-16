import React from 'react';

import Text from 'components/Text/Text';

import * as S from './TextInput.styles';
import * as T from './TextInput.types';


const TextInput:React.FC<T.Props> = (props) => {
  const {
    error, label, value,
  }:T.Props = props;

  let errorMessage:string = '';
  if (error) {
    // TODO: Intl
    switch (error) {
      case 'required': {
        errorMessage = 'To pole jest wymagane!';
        break;
      }
      case 'min': {
        errorMessage = 'Wartość za mała!';
        break;
      }
      case 'max': {
        errorMessage = 'Wartość za duża!';
        break;
      }
      case 'minLength': {
        errorMessage = 'Za mało znaków!';
        break;
      }
      case 'maxLength': {
        errorMessage = 'Za dużo znaków!';
        break;
      }
      case 'pattern': {
        errorMessage = 'Błędna wartość!';
        break;
      }
      default: {
        errorMessage = 'Błędna wartość!';
        break;
      }
    }
  }


  return (
      <S.StyledWrapper>
        <S.StyledLabel show={value.length > 0}>{label}:</S.StyledLabel>
        <S.StyledInput {...props} type="text" />
        <S.ErrorWrapper show={error}>
          <Text bold color={error ? '#d92a2a' : 'transparent'} size="1.4rem">{errorMessage || 'Error'}</Text>
        </S.ErrorWrapper>
      </S.StyledWrapper>
    );
};


export default TextInput;
