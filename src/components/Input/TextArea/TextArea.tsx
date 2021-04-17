import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import Text from 'components/Text/Text';

import * as S from './TextArea.styles';
import * as T from './TextArea.types';


const TextInput:React.FC<T.Props> = (props) => {
  const {
    error, label, value,
  }:T.Props = props;
  const intl = useIntl();


  let errorMessage:string = '';
  if (error) {
    switch (error) {
      case 'required': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.required' });
        break;
      }
      case 'min': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.min' });
        break;
      }
      case 'max': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.max' });
        break;
      }
      case 'minLength': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.minLength' });
        break;
      }
      case 'maxLength': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.maxLength' });
        break;
      }
      case 'pattern': {
        errorMessage = intl.formatMessage({ id: 'inputErrors.pattern' });
        break;
      }
      default: {
        errorMessage = intl.formatMessage({ id: 'inputErrors.default' });
        break;
      }
    }
  }


  return (
      <S.StyledWrapper>
        <S.StyledLabel show={value.length > 0}>{label}:</S.StyledLabel>
        <S.StyledTextarea {...props} />
        <S.ErrorWrapper show={error}>
          <Text bold color={error ? '#d92a2a' : 'transparent'} size="1.4rem">
            {errorMessage || intl.formatMessage({ id: 'inputErrors.default' })}
          </Text>
        </S.ErrorWrapper>
      </S.StyledWrapper>
    );
};


export default TextInput;
