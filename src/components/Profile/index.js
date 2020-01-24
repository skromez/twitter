import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileBody from './style';
import Avatar from '../Avatar';
import User from '../User';
import UserInfo from '../UserInfo';
import UserAvatar from '../../assets/images/profile/avatar.jpg';

const Profile = ({ login }) => {
  return (
    <ProfileBody>
      <Avatar avatar={UserAvatar} className="profile__avatar" size="big" />
      <User
        className="profile__user"
        direction="columnBig"
        name="Dmitry Novikov"
        login={login}
      />
      <UserInfo text="Joined September 2013" icon="calendar" />
      <UserInfo text="Sochi, Russia" icon="arrow" />
    </ProfileBody>
  );
}

export default Profile;
