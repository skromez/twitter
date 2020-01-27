import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { MainBody, MainContainer } from './style';
import Profile from '../Profile';
import Tweets from '../Tweets';
import Tweet from '../Tweet';
import Join from '../Join';
import TweetForm from '../TweetForm';
import { getOthersData } from '../../store/actions/userActions';
import { deleteUserTweet } from '../../store/actions/tweetsActions';

const TweetList = ({ tweets, name, userLogin, onDeleteTweetClick }) => {
  const renderItems = (arr) => {
    return arr.reverse().map((item) => {
      const {
        message,
        date = '24 Jan',
        likes,
        id,
      } = item;
      return (
        <Tweet
          onDelete={() => onDeleteTweetClick(id)}
          id={id}
          key={id}
          text={message}
          name={name}
          login={userLogin}
          date={date}
          likeAmount={likes}
        />
      );
    });
  };
  const items = renderItems(tweets);
  return (
    <>
      {items}
    </>
  );
};

class Main extends Component {

  componentDidMount() {
    const { getUserData, match: { params: { id } } } = this.props;
    getUserData(id);
  }

  render() {
    const { onDeleteTweetClick, isLoggedIn, login, tweets, name, userLogin, loading, match: { params: { id } } } = this.props;
    return (
      <SkeletonTheme color="#e6ecf0">
        <MainBody>
          <MainContainer size="normal" padding="normal">
            <Profile />
            {loading ? <Skeleton width={670} height={500} /> : (
              <>
                <div className="feed">
                  {id === login ? <TweetForm /> : null}
                  <Tweets />
                  <div className="feed_tweets">
                    <TweetList
                      onDeleteTweetClick={onDeleteTweetClick}
                      name={name}
                      tweets={tweets}
                      userLogin={userLogin}
                    />
                  </div>
                </div>
                {isLoggedIn ? null : <Join />}
              </>
            )}
          </MainContainer>
        </MainBody>
      </SkeletonTheme>
    );
  }
}


const mapStateToProps = ({ user, tweets }) => ({
  isLoggedIn: Boolean(user.info.id),
  login: user.info.login,
  userLogin: user.otherUser.login,
  name: `${user.otherUser.firstName} ${user.otherUser.lastName}`,
  tweets: tweets.tweets.items,
  loading: user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (login) => dispatch(getOthersData(login)),
  onDeleteTweetClick: (id) => dispatch(deleteUserTweet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
