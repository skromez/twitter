import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';
import TweetForm from '../TweetForm';

const TweetList = ({ posts }) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const {
        message,
        name = 'Dmitry Novikov',
        login = 'skromez',
        date = '24 Jan',
      } = item;
      return (
        <Tweet key={message} text={message} name={name} login={login} date={date} />
      );
    });
  };
  const items = renderItems(posts);
  return (
    <>
      {items}
    </>
  );
};

const Main = ({ isLoggedIn, login, posts, name }) => {
  const { id } = useParams();
  console.log(name);
  return (
    <MainBody>
      <MainContainer size="normal" padding="normal">
        <Profile login={login} name={name}/>
        <div className="feed">
          {id === login ? <TweetForm /> : null}
          <Tweets />
          <div className="feed_tweets">
            <TweetList posts={posts} />
          </div>
        </div>
        {isLoggedIn ? null : <Join />}
      </MainContainer>
    </MainBody>
  );
};

const mapStateToProps = ({ user }) => ({
  isLoggedIn: Boolean(user.info.id),
  login: user.info.login,
  name: `${user.info.firstName} ${user.info.lastName}`,
  posts: user.posts,
});

export default connect(mapStateToProps)(Main);
