import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ProfileBody from './style';
import Avatar from '../Avatar';
import User from '../User';
import UserInfo from '../UserInfo';
import UserAvatar from '../../assets/images/profile/avatar.svg';


const Profile = ({ login, name, location, loading, date }) => {
  const format = 'MMMM YYYY';
  const userCreatedAt = moment(date).format(format);
  return (
    <SkeletonTheme color="#e6ecf0">
      <ProfileBody>
        {loading ? <Skeleton circle width={210} height={210} /> : (
          <Avatar avatar={UserAvatar} className="profile__avatar" size="big" />
        )}
        {loading ? <Skeleton /> : (
          <User
            className="profile__user"
            direction="columnBig"
            name={name}
            login={login}
          />
        )}
        <UserInfo text={`Joined ${userCreatedAt}`} icon="calendar" />
        <UserInfo text={location} icon="arrow" />
      </ProfileBody>
    </SkeletonTheme>
  );
};

const mapStateToProps = ({ user }) => ({
  login: user.otherUser.login,
  name: `${user.otherUser.firstName} ${user.otherUser.lastName}`,
  date: user.otherUser.createdAt,
  location: user.otherUser.location,
  loading: user.loading,
});

export default connect(mapStateToProps)(Profile);
