import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';
import Text from 'components/Text/Text';

import cookieSvg from 'assets/images/cookiesNotification/cookie.svg';
import Button from 'components/Button/Button';
import * as S from './CookiesNotification.styles';
import * as T from './CookiesNotification.types';



const CookiesNotification:React.FC<T.Props> = ({ show }) => {
  const intl = useIntl();
  const { acceptCookies } = useContext(GlobalContext);


  return (
    <S.StyledNotificationWrapper show={show}>
      <S.StyledNotification>
        <S.StyledTop>
          <S.StyledIcon src={cookieSvg} alt="Cookie" />
          <span>
            <Text size="s" inline>{intl.formatMessage({ id: 'cookie.text_start' })}</Text>
            <S.StyledLink target="_blank" href={intl.formatMessage({ id: 'cookie.text_link' })} title="Wikipedia">
              {intl.formatMessage({ id: 'cookie.text_cookies' })}
            </S.StyledLink>
            <Text size="s" inline>{intl.formatMessage({ id: 'cookie.text_end' })}</Text>
          </span>
        </S.StyledTop>
        <S.StyledBottom>
          <Button bold clicked={acceptCookies}>{intl.formatMessage({ id: 'cookie.acceptButton' })}</Button>
        </S.StyledBottom>
      </S.StyledNotification>
    </S.StyledNotificationWrapper>
  );
};


export default CookiesNotification;
