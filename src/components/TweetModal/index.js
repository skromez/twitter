import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import User from '../User';
import Data from '../Data';
import avatar1 from '../../assets/images/tweet-modal/avatar1.jpg';
import avatar2 from '../../assets/images/tweet-modal/avatar2.jpg';
import avatar3 from '../../assets/images/tweet-modal/avatar3.jpg';
import UserAvatar from '../../assets/images/profile/avatar.jpg';
import Like from '../Like';
import Modal from '../Modal';
import TweetModalBody from './style';
import { tweetModal } from '../../store/actions/tweetsActions';

const TweetModal = ({ tweetInfo, userName, handleModal }) => {
  const { id } = useParams();
  const format = 'HH:mm - DD MMM. YYYY';
  const postCreatedAt = moment(tweetInfo.createdAt).format(format);
  return (
    <Modal tweetInfo={tweetInfo} handleModal={() => handleModal(tweetInfo.id)} size="bigModal" type="tweet">
      <TweetModalBody>
        <div className="tweet__wrapper">
          <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
          <User
            className="tweet__user"
            direction="column"
            name={userName}
            login={id}
          />
        </div>
        <p className="tweet__text">
          {tweetInfo.message}
        </p>
        <Data className="tweet__data" data={postCreatedAt} />
        <div className="tweet__likes likes">
          <p className="likes__amount">
            {tweetInfo.likes}
            <span>Likes</span>
          </p>
          <Avatar className="tweet__thumb" avatar={avatar1} size="small" />
          <Avatar className="tweet__thumb" avatar={avatar2} size="small" />
          <Avatar className="tweet__thumb" avatar={avatar3} size="small" />
        </div>
        <Like amount={tweetInfo.likes} fill="none" stroke="#657786" />
      </TweetModalBody>
    </Modal>
  );
};

const mapStateToProps = ({ user }) => ({
  userName: `${user.otherUser.firstName} ${user.otherUser.lastName}`,
});

const mapDispatchToProps = (dispatch) => ({
  handleModal: (id) => dispatch(tweetModal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetModal);
