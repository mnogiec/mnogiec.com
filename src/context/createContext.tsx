import React, { useReducer } from 'react';


type ProviderType = {
  (children:any):JSX.Element
}

type ReducerType = {
  (state:any, action:any):any
}


export default (reducer:ReducerType, actions:any, initialState:any) => {
  const Context:React.Context<typeof initialState> = React.createContext(initialState);

  const Provider:ProviderType = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions:any = {};
    for (const key in actions) {
      if (Object.prototype.hasOwnProperty.call(actions, key)) {
        boundActions[key] = actions[key](dispatch);
      }
    }


    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

