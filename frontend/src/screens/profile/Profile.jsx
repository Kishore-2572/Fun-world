import React, { useContext } from 'react';
import { store } from '../../store';

const Profile = () => {
  const { state, disPatch } = useContext(store);
  const { user } = state;

  const signoutHandler = () => {
    disPatch({ type: 'SIGN_OUT' });
    localStorage.removeItem('user');
    window.location.href = '/signin';
  };

  return <div className="profile"></div>;
};

export default Profile;
