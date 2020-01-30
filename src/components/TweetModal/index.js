import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import User from '../User';
import Data from '../Data';
import UserAvatar from '../../assets/images/profile/avatar.svg';
import Like from '../Like';
import Modal from '../Modal';
import TweetModalBody from './style';
import { toggleModal } from '../../store/actions/uiActions';
import { likeDetailedTweet, resetDetailedTweet } from '../../store/actions/tweetsActions';
import { Link } from 'react-router-dom';
import { getOthersData } from '../../store/actions/userActions';

const TweetModal = ({ detailedTweetInfo, closeTweetModal, onTweetLikeClick, getUserData }) => {
  // console.log(tweetInfo);
  const format = 'HH:mm - DD MMM YYYY';
  const postCreatedAt = moment(detailedTweetInfo.createdAt).format(format);

  const tweetAuthor = `${detailedTweetInfo.author.firstName} ${detailedTweetInfo.author.lastName}`;

  return (
    <Modal handleModal={closeTweetModal} size="bigModal" type="tweet">
      <TweetModalBody>
        <div className="tweet__wrapper">
          <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
          <User
            className="tweet__user"
            direction="column"
            name={tweetAuthor}
            login={detailedTweetInfo.author.login}
          />
        </div>
        <p className="tweet__text">
          {detailedTweetInfo.message}
        </p>
        <Data className="tweet__data" data={postCreatedAt} />
        <div className="tweet__likes likes">
          <p className="likes__amount">
            {detailedTweetInfo.likes.length}
            <span>Likes</span>
          </p>
          {detailedTweetInfo.likes.map((likeAuthor) => (
            <Link
              className="tweet__thumb"
              onClick={() => {
                getUserData(likeAuthor.login);
                closeTweetModal();
              }}
              key={likeAuthor.id}
              to={`/user/${likeAuthor.login}`}
            >
              <Avatar
                user={`${likeAuthor.login}`}
                avatar={UserAvatar}
                size="small"
              />
            </Link>
          ))}
        </div>
        <Like
          // eslint-disable-next-line
          handleClick={() => onTweetLikeClick(detailedTweetInfo._id)}
          amount={detailedTweetInfo.likes.length}
          fill="none"
          stroke="#657786"
        />
      </TweetModalBody>
    </Modal>
  );
};

const mapStateToProps = ({ tweets }) => ({
  detailedTweetInfo: tweets.detailedTweet,
});

const mapDispatchToProps = (dispatch) => ({
  closeTweetModal: () => {
    dispatch(toggleModal('tweet'));
    dispatch(resetDetailedTweet());
  },
  getUserData: (login) => dispatch(getOthersData(login)),
  onTweetLikeClick: (id) => dispatch(likeDetailedTweet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetModal);
