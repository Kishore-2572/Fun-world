import { createContext, useContext, useReducer } from 'react';

export const store = createContext();

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SIGN_UP':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case 'SIGN_OUT':
      return { ...state, user: null };

    default:
      return state;
  }
}

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}> {props.children} </store.Provider>;
}
