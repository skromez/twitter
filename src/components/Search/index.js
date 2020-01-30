import React from 'react';
import Pagination from 'rc-pagination';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { SearchBody } from './style';
import TweetList from '../TweetList';
import { deleteUserTweet } from '../../store/actions/tweetsActions';
import TweetModal from '../TweetModal';
import { onChangePage } from '../../store/actions/searchActions';

const Search = ({ tweetsInfo, onDeleteTweetClick, isDetailedTweetModalOpen, loading, query, onChangePageClick }) => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const { items: tweets } = tweetsInfo;
  console.log(tweetsInfo);
  return (
    <SkeletonTheme color="#e6ecf0">
      <SearchBody className="search">
        <div className="search__feed">
          <div className="search__wrapper">
            {tweetsInfo.total ? <h1 className="search__term">{parsed.term}</h1> : <h1 className="search__term">Nothing Found</h1>}
          </div>
          {loading ? <Skeleton height={480} className="search__loader" /> : (
            <div className="search__tweets">
              <TweetList
                onDeleteTweetClick={onDeleteTweetClick}
                tweets={tweets}
              />
            </div>
          )}
          {tweetsInfo.total ? (
            <Pagination
              onClick={() => {
                console.log('clicked');
              }}
              onChange={(current) => {
                onChangePageClick(current - 1);
              }}
              pageSize={5}
              current={Number(query.offset) / 5 + 1}
              total={tweetsInfo.total * 5}
            />
          ) : null}
        </div>
      </SearchBody>
      {isDetailedTweetModalOpen && <TweetModal />}
    </SkeletonTheme>
  );
};

const mapStateToProps = ({ ui, search }) => ({
  tweetsInfo: search.tweets,
  query: search.query,
  loading: search.loading,
  isDetailedTweetModalOpen: ui.modal === 'tweet',
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTweetClick: (id) => dispatch(deleteUserTweet(id)),
  onChangePageClick: (page) => dispatch(onChangePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
