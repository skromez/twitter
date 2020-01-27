import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import User from '../User';
import TweetBody from './style';
import Data from '../Data';
import Like from '../Like';
import TweetChangeForm from '../TweetChangeForm';
import UserAvatar from '../../assets/images/profile/avatar.jpg';
import { toggleEditTweet } from '../../store/actions/tweetsActions';

const Tweet = ({ text, name, login, date, likeAmount = 0, onDelete, id, isVisible, onEditTweetClick, userLogin }) => {
  const { id: userId } = useParams();
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
          {userId === userLogin ? (
            <>
              <div className="tweet__buttons">
                <button
                  onClick={() => onEditTweetClick(id)}
                  className="tweet__button tweet__button-change"
                  type="button"
                >
                  <i className="fas fa-pen-square"></i>
                </button>
                <button
                  className="tweet__button tweet__button-delete"
                  type="button"
                  onClick={onDelete}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </>
          ) : null}
        </div>
        {isVisible === id ? <TweetChangeForm id={id} text={text} /> : <p className="tweet__text">{text}</p>}
        <Like amount={likeAmount} fill="none" stroke="#657786" />
      </div>
    </TweetBody>
  );
};

const mapStateToProps = ({ tweets, user }) => ({
  isVisible: tweets.editTweet,
  userLogin: user.info.login,
});

const mapDispatchToProps = (dispatch) => ({
  onEditTweetClick: (id) => dispatch(toggleEditTweet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
