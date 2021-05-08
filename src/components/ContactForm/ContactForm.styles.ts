import styled from 'styled-components';
import media from 'assets/styles/media';


export const StyledContactSection = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${media.tablet}{
    width: 80%;
  }

  @media ${media.laptop}{
    width: 75%;
  }
`;

export const StyledContactSectionButtonWrapper = styled.div`
  margin: 2rem auto 0 auto;
`;

export const StyledContactThankWrapper = styled.div`
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledContactThankIcon = styled.img`
  display: block;
  width: 10rem;
  margin-bottom: 2rem;

  @media ${media.laptop}{
    width: 15rem;
  }
`;
