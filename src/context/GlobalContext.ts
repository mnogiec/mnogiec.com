import theme from 'assets/styles/theme';
import createContext from './createContext';


type GlobalReducerType={
  theme: string,
  language: string,
  hadDisplayedCookies: boolean
}


const globalReducer = (state:GlobalReducerType, action:any) => {
  switch (action.type) {
    case 'setTheme': {
      return ({
        ...state,
        theme: action.payload.newTheme,
      });
    }

    case 'changeTheme': {
      return ({
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      });
    }

    case 'acceptCookies': {
      return ({
        ...state,
        hadDisplayedCookies: true,
      });
    }

    case 'setLanguage': {
      return ({
        ...state,
        language: action.payload.newLanguage,
      });
    }

    default: {
      return state;
    }
  }
};


// Change CSS variables
const changeCSSVariables = (newTheme:'light'|'dark') => {
  const root = document.documentElement.style;

  if (newTheme === 'light') {
    root.setProperty('--color-primary', theme.color.primary.light);
    root.setProperty('--color-background', theme.color.background.light);
    root.setProperty('--color-sectionGradient-start', theme.color.sectionGradient.start.light);
    root.setProperty('--color-sectionGradient-end', theme.color.sectionGradient.end.light);
    root.setProperty('--color-headerBackground', theme.color.headerBackground.light);
    root.setProperty('--color-font', theme.color.font.light);
    root.setProperty('--color-subHeading', theme.color.subHeading.light);
    root.setProperty('--color-scrollBarBackground', theme.color.scrollbar.background.light);
    root.setProperty('--color-scrollBarThumb', theme.color.scrollbar.thumb.light);
    root.setProperty('--color-scrollBarThumbHover', theme.color.scrollbar.thumbHover.light);
  } else if (newTheme === 'dark') {
    root.setProperty('--color-primary', theme.color.primary.dark);
    root.setProperty('--color-background', theme.color.background.dark);
    root.setProperty('--color-sectionGradient-start', theme.color.sectionGradient.start.dark);
    root.setProperty('--color-sectionGradient-end', theme.color.sectionGradient.end.dark);
    root.setProperty('--color-headerBackground', theme.color.headerBackground.dark);
    root.setProperty('--color-font', theme.color.font.dark);
    root.setProperty('--color-subHeading', theme.color.subHeading.dark);
    root.setProperty('--color-scrollBarBackground', theme.color.scrollbar.background.dark);
    root.setProperty('--color-scrollBarThumb', theme.color.scrollbar.thumb.dark);
    root.setProperty('--color-scrollBarThumbHover', theme.color.scrollbar.thumbHover.dark);
  }
};

// Change theme to a different one
const changeTheme = (dispatch:any) => () => {
  const lastTheme:string = localStorage.getItem('lastTheme') || 'light';

  if (lastTheme === 'light') {
    changeCSSVariables('dark');
    localStorage.setItem('lastTheme', 'dark');
  } else if (lastTheme === 'dark') {
    changeCSSVariables('light');
    localStorage.setItem('lastTheme', 'light');
  }

  dispatch({ type: 'changeTheme' });
};

// Set current stored language
const setLanguage = (dispatch:any) => (newLanguage:'en'|'pl'|'de') => {
  localStorage.setItem('lastLanguage', newLanguage);
  dispatch({ type: 'setLanguage', payload: { newLanguage } });
};

// Accept cookies
const acceptCookies = (dispatch:any) => () => {
  localStorage.setItem('hadDisplayedCookies', 'true');
  dispatch({ type: 'acceptCookies' });
};

// Check if there is a theme set in localStorage
const initialContextCheck = (dispatch:any) => () => {
  // Handling last theme
  const lastTheme:string = localStorage.getItem('lastTheme') || 'light';

  if (lastTheme === 'light') {
    changeCSSVariables('light');
    dispatch({ type: 'setTheme', payload: { newTheme: 'light' } });
  } else if (lastTheme === 'dark') {
    changeCSSVariables('dark');
    dispatch({ type: 'setTheme', payload: { newTheme: 'dark' } });
  }


  // Handling language
  const lastLanguage:string = localStorage.getItem('lastLanguage') || 'en';
  let newLanguage:'en'|'pl'|'de' = 'en';

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

  // TODO: Remove when added language redirections
  if (lastLanguage !== newLanguage) {
    console.log('🚩 GlobalContext -> initialContextCheck: newLanguage is different than lastLanguage. Language should be automatically changed to a saved one.');
  }

  localStorage.setItem('lastLanguage', newLanguage);
  dispatch({ type: 'setLanguage', payload: { newLanguage } });
};


const initialState = {
  theme: localStorage.getItem('lastTheme') || 'light',
  language: localStorage.getItem('lastLanguage') || 'en',
  // @ts-ignore
  hadDisplayedCookies: JSON.parse(localStorage.getItem('hadDisplayedCookies')) || false,
};


export const { Context, Provider } = createContext(
  globalReducer,
  {
    changeTheme, initialContextCheck, setLanguage, acceptCookies,
  },
  initialState,
);
