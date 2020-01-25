import React from 'react';
import { connect } from 'react-redux';
import ProfileBody from './style';
import Avatar from '../Avatar';
import User from '../User';
import UserInfo from '../UserInfo';
import UserAvatar from '../../assets/images/profile/avatar.jpg';


const Profile = ({ login, name, location,  }) => {
  return (
    <ProfileBody>
      <Avatar avatar={UserAvatar} className="profile__avatar" size="big" />
      <User
        className="profile__user"
        direction="columnBig"
        name={name}
        login={login}
      />
      <UserInfo text="Joined September 2013" icon="calendar" />
      <UserInfo text={location} icon="arrow" />
    </ProfileBody>
  );
};

const mapStateToProps = ({ user }) => ({
  login: user.info.login,
  name: `${user.info.firstName} ${user.info.lastName}`,
  location: user.info.location,
});

export default connect(mapStateToProps)(Profile);
