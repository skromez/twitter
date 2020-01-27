import React from 'react';
import Cover from '../components/Cover';
import Main from '../components/Main';

const UserPage = ({ match }) => {
  return (
    <>
      <Cover />
      <Main match={match} />
    </>
  );
};

export default UserPage;
