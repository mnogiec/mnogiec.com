import styled from 'styled-components';

import theme from 'assets/styles/theme';

export const StyledWrapper = styled.div<{header?: boolean, sideMenu?: boolean, showSideMenu?: boolean}>`
  min-height: 100vh;
  margin-top: ${({ header }) => header && theme.const.HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
`;
