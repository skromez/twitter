import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { SearchBody } from './style';
import TweetList from '../TweetList';
import { deleteUserTweet } from '../../store/actions/tweetsActions';
import TweetModal from '../TweetModal';
import Spinner from '../Spinner';

const Search = ({ tweetsInfo, onDeleteTweetClick, isDetailedTweetModalOpen, loading }) => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const { items: tweets } = tweetsInfo;
  console.log(tweetsInfo);

  return (
    <>
      {loading ? <Spinner className="search__loader" /> : (
        <SearchBody className="search">
          <div className="search__feed">
            {tweets.length > 0 ? (
              <>
                <div className="search__wrapper">
                  { parsed.term ? <h1 className="search__term">{parsed.term}</h1> : null}
                </div>
                <div className="search__tweets">
                  <TweetList
                    onDeleteTweetClick={onDeleteTweetClick}
                    tweets={tweets}
                  />
                </div>
              </>
            ) : (
              <div className="search__not-found">
                <h1 className="search__error">Nothing Found</h1>
              </div>
            )}
          </div>
        </SearchBody>
      )}
      {isDetailedTweetModalOpen && <TweetModal />}
    </>
  );
};

const mapStateToProps = ({ ui, search }) => ({
  tweetsInfo: search.tweets,
  loading: search.loading,
  isDetailedTweetModalOpen: ui.modal === 'tweet',
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTweetClick: (id) => dispatch(deleteUserTweet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
