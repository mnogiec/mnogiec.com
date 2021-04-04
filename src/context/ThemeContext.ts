import theme from 'assets/styles/theme';
import createContext from './createContext';


const themeReducer = (state:{theme:string}, action:any) => {
  switch (action.type) {
    case 'set': {
      return ({
        theme: action.payload.newTheme,
      });
    }

    case 'change': {
      return ({
        theme: state.theme === 'light' ? 'dark' : 'light',
      });
    }

    default: {
      return state;
    }
  }
};


// Change CSS variables
const changeVariables = (newTheme:string) => {
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
  // @ts-ignore
  const theme:string = localStorage.getItem('theme') || 'light';

  if (theme === 'light') {
    changeVariables('dark');
    localStorage.setItem('theme', 'dark');
  } else if (theme === 'dark') {
    changeVariables('light');
    localStorage.setItem('theme', 'light');
  }

  dispatch({ type: 'change' });
};

// Check if there is a theme set in localStorage
const initialThemeCheck = (dispatch:any) => () => {
  // @ts-ignore
  const theme:string = localStorage.getItem('theme') || 'light';

  if (theme === 'light') {
    changeVariables('light');
    dispatch({ type: 'set', payload: { newTheme: 'light' } });
  } else if (theme === 'dark') {
    changeVariables('dark');
    dispatch({ type: 'set', payload: { newTheme: 'dark' } });
  }
};


const initialState = {
  // @ts-ignore
  theme: localStorage.getItem('theme') || 'light',
};


export const { Context, Provider } = createContext(
  themeReducer,
  { changeTheme, initialThemeCheck },
  initialState,
);
