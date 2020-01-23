import React from 'react';
import Avatar from '../Avatar';
import User from '../User';
import TweetBody from './style';
import Data from '../Data';
import Like from '../Like';
import UserAvatar from '../../assets/images/profile/avatar.jpg';


const Tweet = ({ text, name, login, date }) => {
  return (
    <TweetBody>
      <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
      <div>
        <div className="tweet__container">
          <User
            className="tweet__user"
            direction="row"
            name={name}
            login={login}
          />
          <Data className="tweet__data" data={date} />
        </div>
        <p className="tweet__text">{text}</p>
        <Like amount="15" fill="none" stroke="#657786" />
      </div>
    </TweetBody>
  );
};

export default Tweet;
