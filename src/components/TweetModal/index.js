import React from 'react';
import { useParams } from 'react-router-dom';
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

const TweetModal = (props) => {
  const { id } = useParams();
  return (
    <Modal size="bigModal" type="tweet">
      <TweetModalBody>
        <div className="tweet__wrapper">
          <Avatar avatar={UserAvatar} className="tweet__avatar" size="normal" />
          <User
            className="tweet__user"
            direction="column"
            name="Dmitry Novikov"
            nick={id}
          />
        </div>
        <p className="tweet__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <Data className="tweet__data" data="17:26 - 01 Aug. 2019" />
        <div className="tweet__likes likes">
          <p className="likes__amount">
            15 <span>Likes</span>
          </p>
          <Avatar className="tweet__thumb" avatar={avatar1} size="small" />
          <Avatar className="tweet__thumb" avatar={avatar2} size="small" />
          <Avatar className="tweet__thumb" avatar={avatar3} size="small" />
        </div>
        <Like amount="15" fill="none" stroke="#657786" />
      </TweetModalBody>
    </Modal>
  );
};

export default TweetModal;
