import React from 'react';
import AvatarBody from './style';

const Avatar = ({ size, className, avatar, user }) => (
  <AvatarBody className={className} size={size}>
    <img src={avatar} alt={user} className="avatar__image" />
  </AvatarBody>
);

export default Avatar;
