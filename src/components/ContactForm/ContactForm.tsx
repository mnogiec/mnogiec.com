import React, { useState, useEffect, useReducer } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import ReCAPTCHA from 'react-google-recaptcha';

import Axios from 'components/Axios/Axios';
import Spinner from 'components/Spinner/Spinner';
import TextInput from 'components/Input/TextInput/TextInput';
import TextArea from 'components/Input/TextArea/TextArea';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';

import messageSentIcon from 'assets/images/contact/message_sent.svg';

import * as S from './ContactForm.styles';


type Props = {
  reRef: React.MutableRefObject<ReCAPTCHA | undefined>;
}

type ContactErrorType = {
  name: undefined | string,
  email: undefined | string,
  message: undefined | string,
}

type RequestErrorType = {
  code: number,
  msg: string
}

type FormReducerState = {
  name: {
    value: string,
    wasTouched: boolean,
    isFocused: boolean,
  },
  email: {
    value: string,
    wasTouched: boolean,
    isFocused: boolean,
  },
  message :{
    value: string,
    wasTouched: boolean,
    isFocused: boolean,
  },
}

type FormReducerAction = {
  type: 'blur'|'focus'|'input'|'touchAll'|'clearMessage',
  payload?: {
    field: 'name'|'email'|'message',
    value?: string
  }
}


// Reducer used inside formState useReducer
const formReducer = (state:FormReducerState, action:FormReducerAction):FormReducerState => {
  switch (action.type) {
    case 'blur': {
      const newState = { ...state };
      newState[action.payload!.field] = {
        ...newState[action.payload!.field],
        wasTouched: true,
        isFocused: false,
      };

      return newState;
    }

    case 'focus': {
      const newState = { ...state };
      newState[action.payload!.field] = {
        ...newState[action.payload!.field],
        isFocused: true,
      };

      return newState;
    }

    case 'input': {
      const newState = { ...state };
      newState[action.payload!.field] = {
        ...newState[action.payload!.field],
        value: action.payload!.value || '',
      };

      return newState;
    }

    case 'touchAll': {
      return {
        ...state,
        name: {
          ...state.name,
          wasTouched: true,
        },
        email: {
          ...state.email,
          wasTouched: true,
        },
        message: {
          ...state.message,
          wasTouched: true,
        },
      };
    }

    case 'clearMessage': {
      return {
        ...state,
        message: {
          ...state.message,
          value: '',
          wasTouched: false,
          isFocused: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};


const ContactForm:React.FC<Props> = ({ reRef }) => {
  const intl = useIntl();


  const [wasContactRequestSent, setWasContactRequestSent] = useState(false);
  const [contactRequestLoading, setContactRequestLoading] = useState(false);
  const [contactRequestError, setContactRequestError] = useState<RequestErrorType | null>(null);


  // Reducer to manage form state
  const [formState, dispatch] = useReducer(formReducer, {
    name: {
      value: '',
      wasTouched: false,
      isFocused: false,
    },
    email: {
      value: '',
      wasTouched: false,
      isFocused: false,
    },
    message: {
      value: '',
      wasTouched: false,
      isFocused: false,
    },
  });


  // State to handle errors validation passed to Input components
  const [errors, setErrors] = useState<ContactErrorType>({
    name: undefined,
    email: undefined,
    message: undefined,
  });


  // Function to validate contact form inputs IRL
  const validateContactForm = ():void => {
    const newErrors:any = {
      name: undefined,
      email: undefined,
      message: undefined,
    };

    // ?NAME:
    if (formState.name.wasTouched) {
      if (formState.name.value.length === 0 && formState.name.wasTouched) {
        // required
        newErrors.name = 'required';
      } else if (formState.name.value.length < 2) {
        // minLength
        newErrors.name = 'minLength';
      } else if (formState.name.value.length > 100) {
        // maxLength
        newErrors.name = 'maxLength';
      }
    }

    const mailRegExp:RegExp = /^\S+@\S+\.\S+$/;
    // ?EMAIL:
    if (formState.email.wasTouched) {
      if (formState.email.value.length === 0 && formState.email.wasTouched) {
        // required
        newErrors.email = 'required';
      } else if (formState.email.value.length < 3) {
        // minLength
        newErrors.email = 'minLength';
      } else if (formState.email.value.length > 100) {
        // maxLength
        newErrors.email = 'maxLength';
      } else if (formState.email.value.match(mailRegExp) === null) {
        newErrors.email = 'pattern';
      }
    }

    // ?MESSAGE:
    if (formState.message.wasTouched) {
      if (formState.message.value.length === 0) {
        // required
        newErrors.message = 'required';
      } else if (formState.message.value.length < 3) {
        // minLength
        newErrors.message = 'minLength';
      } else if (formState.message.value.length > 1000) {
        // maxLength
        newErrors.message = 'maxLength';
      }
    }


    setErrors(newErrors);
  };


  // Function to handle contact form submit event
  const onContactSubmit:any = async (event:Event) => {
    event.preventDefault();

    dispatch({ type: 'touchAll' });

    if ((!errors.name && !errors.email && !errors.message)
    && formState.name.wasTouched && formState.email.wasTouched && formState.message.wasTouched) {
      // Submit
      setContactRequestError(null);
      setContactRequestLoading(true);

      const token = await reRef.current?.executeAsync();

      Axios.post('/mail', {
        name: formState.name.value.trim(),
        email: formState.email.value.trim(),
        message: formState.message.value.trim().replaceAll('\n', '<br/>'),
        token,
      })
      .then(() => {
        setContactRequestLoading(false);
        setWasContactRequestSent(true);
      })
      .catch((error) => {
        reRef.current?.reset();
        setContactRequestLoading(false);
        setContactRequestError(error.response.data);
      });
    }
  };


  // Validation on states change
  useEffect(validateContactForm, [formState.name, formState.email, formState.message]);


  return (
    <S.StyledContactSection onSubmit={onContactSubmit}>
      {contactRequestLoading && (
        <Spinner margin="5rem auto" />
      )}
      {
        wasContactRequestSent && !contactRequestLoading && (
          <S.StyledContactThankWrapper>
            <S.StyledContactThankIcon
              src={messageSentIcon}
              alt={intl.formatMessage({ id: 'contact.thankIconAlt' })}
            />
              <Text size="l" tac bold>
                {intl.formatMessage({ id: 'contact.thankHeading' })}
              </Text>
              <Text size="1.8rem" tac margin="1rem 0">
                {intl.formatMessage({ id: 'contact.thankText' })}
              </Text>
              <Button
                clicked={() => {
                  dispatch({ type: 'clearMessage' });
                  setWasContactRequestSent(false);
                  reRef.current?.reset();
                }}
                bold
              >{intl.formatMessage({ id: 'contact.thankButton' })}
              </Button>
          </S.StyledContactThankWrapper>
        )
      }
      {
        !wasContactRequestSent && !contactRequestLoading && (
          (
            <>
              <TextInput
                name="name"
                label={intl.formatMessage({ id: 'contact.nameInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.nameInput.placeholder' })}
                value={formState.name.value}
                error={errors.name}
                onBlur={() => dispatch({ type: 'blur', payload: { field: 'name' } })}
                onFocus={() => dispatch({ type: 'focus', payload: { field: 'name' } })}
                onInput={(event) => dispatch({ type: 'input', payload: { field: 'name', value: event.target.value } })}
              />
              <TextInput
                name="email"
                label={intl.formatMessage({ id: 'contact.emailInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.emailInput.placeholder' })}
                value={formState.email.value}
                error={errors.email}
                onBlur={() => dispatch({ type: 'blur', payload: { field: 'email' } })}
                onFocus={() => dispatch({ type: 'focus', payload: { field: 'email' } })}
                onInput={(event) => dispatch({ type: 'input', payload: { field: 'email', value: event.target.value } })}
              />
              <TextArea
                name="message"
                autoComplete="off"
                label={intl.formatMessage({ id: 'contact.messageInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.messageInput.placeholder' })}
                value={formState.message.value}
                error={errors.message}
                resize="vertical"
                onBlur={() => dispatch({ type: 'blur', payload: { field: 'message' } })}
                onFocus={() => dispatch({ type: 'focus', payload: { field: 'message' } })}
                onInput={(event) => dispatch({ type: 'input', payload: { field: 'message', value: event.target.value } })}
              />
              {contactRequestError && <Text error tac>{intl.formatMessage({ id: 'contact.error' })}</Text>}
              <S.StyledContactSectionButtonWrapper>
                <Button submit bold>
                  {intl.formatMessage({ id: 'contact.sendButton' })}
                </Button>
              </S.StyledContactSectionButtonWrapper>
            </>
          )
        )
      }
    </S.StyledContactSection>
  );
};


export default ContactForm;
