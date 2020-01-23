import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';
import TweetForm from '../TweetForm';

const tweetList = [
  {
    id: 1,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
  {
    id: 2,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
  {
    id: 3,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
  {
    id: 4,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
  {
    id: 5,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
  {
    id: 6,
    name: 'Dmitry Novikov',
    login: 'skromez',
    date: '24 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at corporis cumque error facilis fuga illo inventore iure nulla obcaecati omnis perferendis perspiciatis quam quod, reiciendis, saepe suscipit vel voluptates!',
  },
];

const TweetList = () => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const {
        text,
        name,
        login,
        date,
        id,
      } = item;
      return (
        <Tweet key={id} text={text} name={name} login={login} date={date} />
      );
    });
  };
  const items = renderItems(tweetList);
  return (
    <>
      {items}
    </>
  );
};

const Main = ({ isLoggedIn, login }) => {
  const { id } = useParams();
  return (
    <MainBody>
      <MainContainer size="normal" padding="normal">
        <Profile />
        <div className="feed">
          {id === login ? <TweetForm /> : null}
          <Tweets />
          <div className="feed_tweets">
            <TweetList />
          </div>
        </div>
        {isLoggedIn ? null : <Join />}
      </MainContainer>
    </MainBody>
  );
};

const mapStateToProps = ({ user: { info } }) => ({
  isLoggedIn: Boolean(info.id),
  login: info.login,
});

export default connect(mapStateToProps)(Main);
