import React, {useState} from 'react';
import Avatar from '../Avatar';
import User from '../User';
import TweetBody from './style';
import Data from '../Data';
import Like from '../Like';
import TweetChangeForm from '../TweetChangeForm';
import UserAvatar from '../../assets/images/profile/avatar.jpg';

const Tweet = ({ text, name, login, date, likeAmount = 0 }) => {
  const [visible, setVisible] = useState(false);
  return (
    <TweetBody>
      <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
      <div className="tweet__info">
        <div className="tweet__container">
          <User
            className="tweet__user"
            direction="row"
            name={name}
            login={login}
          />
          <Data className="tweet__data" data={date} />
          <div className="tweet__buttons">
            <button
              onClick={() => setVisible(!visible)}
              className="tweet__button tweet__button-change"
              type="button"
            >
              <i className="fas fa-pen-square"></i>
            </button>
            <button className="tweet__button tweet__button-delete" type="button">
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        {visible ? <TweetChangeForm text={text} /> : <p className="tweet__text">{text}</p>}
        <Like amount={likeAmount} fill="none" stroke="#657786" />
      </div>
    </TweetBody>
  );
};

export default Tweet;
