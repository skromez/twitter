import React from 'react';
import UserInfoBody from './style';
import { Calendar, Arrow } from '../../utils/icons';

const UserInfo = ({ text, icon }) => (
  <UserInfoBody>
    {icon === 'calendar' ? <Calendar className="userInfo__icon" /> : <Arrow className="userInfo__icon" />}
    <p className="userInfo__text">{text}</p>
  </UserInfoBody>
);

export default UserInfo;
