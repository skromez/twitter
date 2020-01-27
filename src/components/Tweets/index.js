import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { connect } from 'react-redux';
import TweetsBody from './style';

const Tweets = ({ tweetAmount, loading }) => (
  <SkeletonTheme color="#0084b4">
    <TweetsBody>
      <input id="tweets" className="tweets__radio" type="radio" defaultChecked />
      <label htmlFor="tweets" className="tweets__label label">
        <p className="label__tweets">Tweets</p>
        {loading ? <Skeleton height={24} /> : <p className="label__amount">{tweetAmount}</p>}
      </label>
    </TweetsBody>
  </SkeletonTheme>
);

const mapStateToProps = ({ user, tweets }) => ({
  tweetAmount: tweets.tweets.total,
  loading: user.loading,
});

export default connect(mapStateToProps)(Tweets);
