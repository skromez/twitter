import React from 'react';
import { Link } from 'react-router-dom';
import UserBody from './style';

const User = ({ name, login, direction, className }) => (
  <UserBody className={className} direction={direction}>
    <h3 className="user__name">{name}</h3>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <Link
      onClick={(evt) => {
        evt.stopPropagation();
      }}
      to={`/user/${login}`}
      className="user__link"
    >
      {`@${login}`}
    </Link>
  </UserBody>
);

export default User;
