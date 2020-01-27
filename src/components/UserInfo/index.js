import React from 'react';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import UserInfoBody from './style';
import { Arrow, Calendar } from '../../utils/icons';

const UserInfo = ({ text, icon, loading }) => (
  <SkeletonTheme color="#e6ecf0">
    <UserInfoBody>
      {loading ? <Skeleton /> : (
        <>
          {icon === 'calendar' ? <Calendar className="userInfo__icon" /> : <Arrow className="userInfo__icon" />}
          <p className="userInfo__text">{text}</p>
        </>
      )}
    </UserInfoBody>
  </SkeletonTheme>
);

const mapStateToProps = ({ user }) => ({
  loading: user.loading,
});

export default connect(mapStateToProps)(UserInfo);
