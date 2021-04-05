import React from 'react';

import * as S from './Button.styles';
import * as T from './Button.types';


// basic - transparent background and primary font color
// link - link to inside page (makes Button a gatsby <Link/>)
// outLink - link to outside page (makes Button <a/>)

const Button:React.FC<T.Props> = ({
 children, submit, link, outLink, clicked, ...props
}) => {
  if (submit) {
    return (
      <S.StyledSubmit {...props} type="submit" value={children} />
    );
  }

  if (link) {
    const newProps:any = { ...props };
    for (const [key, value] of Object.entries(newProps)) {
      newProps[`$${key}`] = value;
      delete newProps[key];
    }

    return (
      <S.StyledNavLink {...newProps} to={link} exact>{children}</S.StyledNavLink>
    );
  }

  if (outLink) {
    return (
      <S.StyledA {...props} href={outLink}>{children}</S.StyledA>
    );
  }

  return (
    <S.StyledButton {...props} onClick={clicked}>{children}</S.StyledButton>
  );
};


export default Button;
