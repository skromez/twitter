import React from 'react';
import { connect } from 'react-redux';
import Cover from '../components/Cover';
import Main from '../components/Main';
import TweetModal from '../components/TweetModal';

const UserPage = ({ match, tweetInfo }) => {
  return (
    <>
      <Cover />
      <Main match={match} />
      { tweetInfo && <TweetModal tweetInfo={tweetInfo} /> }
    </>
  );
};

const mapStateToProps = ({ tweets }) => ({
  tweetInfo: tweets.toggleTweetModal,
});


export default connect(mapStateToProps)(UserPage);
