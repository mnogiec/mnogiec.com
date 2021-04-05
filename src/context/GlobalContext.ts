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

    default: {
      return state;
    }
  }
};


// Change CSS variables
const changeCSSVariables = (newTheme:string) => {
  const root = document.documentElement.style;

  if (newTheme === 'light') {
    root.setProperty('--color-primary', theme.color.primary.light);
    root.setProperty('--color-background', theme.color.background.light);
    root.setProperty('--color-sectionGradient-start', theme.color.sectionGradient.start.light);
    root.setProperty('--color-sectionGradient-end', theme.color.sectionGradient.end.light);
    root.setProperty('--color-headerBackground', theme.color.headerBackground.light);
    root.setProperty('--color-font', theme.color.font.light);
    root.setProperty('--color-subHeading', theme.color.subHeading.light);
  } else if (newTheme === 'dark') {
    root.setProperty('--color-primary', theme.color.primary.dark);
    root.setProperty('--color-background', theme.color.background.dark);
    root.setProperty('--color-sectionGradient-start', theme.color.sectionGradient.start.dark);
    root.setProperty('--color-sectionGradient-end', theme.color.sectionGradient.end.dark);
    root.setProperty('--color-headerBackground', theme.color.headerBackground.dark);
    root.setProperty('--color-font', theme.color.font.dark);
    root.setProperty('--color-subHeading', theme.color.subHeading.dark);
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

// Check if there is a theme set in localStorage
const initialContextCheck = (dispatch:any) => () => {
  const lastTheme:string = localStorage.getItem('lastTheme') || 'light';

  if (lastTheme === 'light') {
    changeCSSVariables('light');
    dispatch({ type: 'setTheme', payload: { newTheme: 'light' } });
  } else if (lastTheme === 'dark') {
    changeCSSVariables('dark');
    dispatch({ type: 'setTheme', payload: { newTheme: 'dark' } });
  }
};


const initialState = {
  theme: localStorage.getItem('lastTheme') || 'light',
  language: localStorage.getItem('lastLanguage') || 'en',
  // @ts-ignore
  hadDisplayedCookies: JSON.parse(localStorage.getItem('hadDisplayedCookies')) || false,
};


export const { Context, Provider } = createContext(
  globalReducer,
  { changeTheme, initialContextCheck },
  initialState,
);
