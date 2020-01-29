import moment from 'moment';
import React from 'react';
import Tweet from '../Tweet';

const TweetList = ({
  tweets, onDeleteTweetClick,
}) => {
  const renderItems = (arr) => arr.sort((a, b) => {
    const aData = moment(a.createdAt).valueOf();
    const bData = moment(b.createdAt).valueOf();
    return bData - aData;
  }).map((item) => {
    const postCreatedAt = moment(item.createdAt).format('DD MMM');
    const {
      message,
      likes,
      id,
      user,
    } = item;
    const { firstName, lastName, login } = user;
    const name = `${firstName} ${lastName}`;
    return (
      <Tweet
        onDelete={() => onDeleteTweetClick(id)}
        id={id}
        key={id}
        text={message}
        name={name}
        login={login}
        date={postCreatedAt}
        likeAmount={likes}
      />
    );
  });
  const items = renderItems(tweets);
  return (
    <>
      {items}
    </>
  );
};

export default TweetList;
