import React, { useState, useEffect } from 'react';
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


type ContactErrorType = {
  name: undefined | string,
  email: undefined | string,
  message: undefined | string,
}

type ContactStateType = {
  value: string,
  wasTouched: boolean,
  isFocused: boolean,
}

type RequestErrorType = {
  code: number,
  msg: string
}

type Props = {
  reRef: React.MutableRefObject<ReCAPTCHA | undefined>;
}


const ContactForm:React.FC<Props> = ({ reRef }) => {
  const intl = useIntl();

  const [wasContactRequestSent, setWasContactRequestSent] = useState(false);
  const [contactRequestLoading, setContactRequestLoading] = useState(false);
  const [contactRequestError, setContactRequestError] = useState<RequestErrorType | null>(null);


  // Reducer to manage form state


  // States used to handle contact form
  const [name, setName] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });
  const [email, setEmail] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });
  const [message, setMessage] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });

  // State to handle errors validation passed to Input components
  const [errors, setErrors] = useState<ContactErrorType>({
    name: undefined,
    email: undefined,
    message: undefined,
  });


  // Function to validate contact form inputs IRL
  const validateContactForm = () => {
    const newErrors:any = {
      name: undefined,
      email: undefined,
      message: undefined,
    };

    // ?NAME:
    if (name.wasTouched) {
      if (name.value.length === 0 && name.wasTouched) {
        // required
        newErrors.name = 'required';
      } else if (name.value.length < 2) {
        // minLength
        newErrors.name = 'minLength';
      } else if (name.value.length > 100) {
        // maxLength
        newErrors.name = 'maxLength';
      }
    }

    const mailRegExp:RegExp = /^\S+@\S+\.\S+$/;
    // ?EMAIL:
    if (email.wasTouched) {
      if (email.value.length === 0 && email.wasTouched) {
        // required
        newErrors.email = 'required';
      } else if (email.value.length < 3) {
        // minLength
        newErrors.email = 'minLength';
      } else if (email.value.length > 100) {
        // maxLength
        newErrors.email = 'maxLength';
      } else if (email.value.match(mailRegExp) === null) {
        newErrors.email = 'pattern';
      }
    }

    // ?MESSAGE:
    if (message.wasTouched) {
      if (message.value.length === 0) {
        // required
        newErrors.message = 'required';
      } else if (message.value.length < 3) {
        // minLength
        newErrors.message = 'minLength';
      } else if (message.value.length > 1000) {
        // maxLength
        newErrors.message = 'maxLength';
      }
    }


    setErrors(newErrors);
  };


  // Function to handle contact form submit event
  const onContactSubmit:any = async (event:Event) => {
    event.preventDefault();

    setName((state) => ({
      ...state,
      wasTouched: true,
    }));
    setEmail((state) => ({
      ...state,
      wasTouched: true,
    }));
    setMessage((state) => ({
      ...state,
      wasTouched: true,
    }));

    if ((!errors.name && !errors.email && !errors.message)
    && name.wasTouched && email.wasTouched && message.wasTouched) {
      // Submit
      setContactRequestError(null);
      setContactRequestLoading(true);

      const token = await reRef.current?.executeAsync();

      Axios.post('/mail', {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim().replaceAll('\n', '<br/>'),
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
  useEffect(validateContactForm, [name, email, message]);

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
                  setMessage({
                    value: '',
                    wasTouched: false,
                    isFocused: false,
                  });
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
                value={name.value}
                error={errors.name}
                onBlur={() => setName((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setName((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setName((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
              />
              <TextInput
                name="email"
                label={intl.formatMessage({ id: 'contact.emailInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.emailInput.placeholder' })}
                value={email.value}
                error={errors.email}
                onBlur={() => setEmail((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setEmail((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setEmail((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
              />
              <TextArea
                name="message"
                autoComplete="off"
                label={intl.formatMessage({ id: 'contact.messageInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.messageInput.placeholder' })}
                value={message.value}
                error={errors.message}
                resize="vertical"
                onBlur={() => setMessage((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setMessage((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setMessage((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
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
