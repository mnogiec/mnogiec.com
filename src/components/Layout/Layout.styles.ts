import styled from 'styled-components';

import theme from 'assets/styles/theme';

import * as T from './Layout.types';

export const StyledWrapper = styled.div<T.CSSProps>`
  min-height: 100vh;
  margin-top: ${({ header }) => header && theme.const.HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
`;
