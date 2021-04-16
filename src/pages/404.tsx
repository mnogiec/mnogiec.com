import { navigate } from 'gatsby';


const NotFoundPage:React.FC = () => {
  let newLanguage:'en'|'pl'|'de' = 'en';

  if (typeof window !== 'undefined') {
    const path:string = window.location.pathname;

    if (path.length < 3) {
      newLanguage = 'en';
    } else if (path.length >= 3) {
      if (path.substr(0, 3) === '/en') {
        newLanguage = 'en';
      } else if (path.substr(0, 3) === '/pl') {
        newLanguage = 'pl';
      } else if (path.substr(0, 3) === '/de') {
        newLanguage = 'de';
      }
    }

    switch (newLanguage) {
      case 'en': {
        navigate('/');
        break;
      }

      case 'de': {
        navigate('/de');
        break;
      }

      case 'pl': {
        navigate('/pl');
        break;
      }

      default: {
        navigate('/');
        break;
      }
    }
  }

  return null;
};


export default NotFoundPage;
