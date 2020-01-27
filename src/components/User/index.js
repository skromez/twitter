import React from 'react';
import UserBody from './style';

const User = ({ name, login, direction, className }) => (
  <UserBody className={className} direction={direction}>
    <h3 className="user__name">{name}</h3>
    <a href="#" className="user__link">
      {`@${login}`}
    </a>
  </UserBody>
);

export default User;
