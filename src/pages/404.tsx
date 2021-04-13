import { useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import { Context as GlobalContext } from 'context/GlobalContext';


const NotFoundPage = () => {
  const { state } = useContext(GlobalContext);


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
