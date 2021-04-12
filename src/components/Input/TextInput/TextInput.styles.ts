import styled from 'styled-components';


export const StyledWrapper = styled.label<any>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin || '1rem 0')};
  cursor: text;
`;

export const StyledLabel = styled.p<{show?:boolean}>`
  font-size: ${({ theme }) => theme.font.size.s};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(3rem)')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  color: #888;
  transition: .2s;
`;

export const StyledInput = styled.input<any>`
  width: 100%;
  padding: 1rem 0;
  color: var(--color-font);
  
  font: inherit;
  font-size: 2rem; // default size
  font-size: ${({ size }) => size && size}; // if size is specified and not in theme
  /* iterating through theme.font.size and returns this font-size if matches props.size */
  ${({ size, theme }) => {
    let sizeToUse:string = '';
    for (const [name, value] of Object.entries(theme.font.size)) {
      if (size === name) {
        sizeToUse = `font-size: ${value};`;
      }
    }
    return sizeToUse;
  }}

  background: none;
  border: none;
  outline: none;

  border-bottom: 0.1rem solid #373737;
  border-color: ${({ error }) => error && '#d92a2a'};
`;

export const ErrorWrapper = styled.div<{show?:boolean}>`
  color: ${({ show }) => !show && 'blue'} !important;
  transform: ${({ show }) => (show ? 'translateY(1rem)' : 'translateY(-3rem)')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: .2s;
`;

