import React from 'react';
import { connect } from 'react-redux';
import Cover from '../components/Cover';
import Main from '../components/Main';
import TweetModal from '../components/TweetModal';

const UserPage = ({ match, isDetailedTweetModalOpen }) => {
  return (
    <>
      <Cover />
      <Main match={match} />
      {isDetailedTweetModalOpen && <TweetModal /> }
    </>
  );
};

const mapStateToProps = ({ ui }) => ({
  isDetailedTweetModalOpen: ui.modal === 'tweet',
});


export default connect(mapStateToProps)(UserPage);
