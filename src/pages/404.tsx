import { useEffect, useContext } from 'react';
import { navigate } from 'gatsby';

import { Context as GlobalContext } from 'context/GlobalContext';


const NotFoundPage = () => {
  let { state } = useContext(GlobalContext);

  if (typeof window === 'undefined') {
    state = {
      language: 'en',
      theme: 'light',
      hadDisplayedCookies: false,
    };
  }


  useEffect(():any => {
    switch (state.language) {
      case 'en': {
        return navigate('/');
      }

      case 'de': {
        return navigate('/de');
      }

      case 'pl': {
        return navigate('/pl');
      }

      default: {
        return navigate('/');
      }
    }
  }, []);

  return null;
};


export default NotFoundPage;
