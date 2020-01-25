import React from 'react';
import { connect } from 'react-redux';
import TweetsBody from './style';

const Tweets = ({ tweetAmount }) => (
  <TweetsBody>
    <input id="tweets" className="tweets__radio" type="radio" defaultChecked />
    <label htmlFor="tweets" className="tweets__label label">
      <p className="label__tweets">Tweets</p>
      <p className="label__amount">{tweetAmount}</p>
    </label>
  </TweetsBody>
);

const mapStateToProps = ({ user }) => ({
  tweetAmount: user.info.tweets,
});

export default connect(mapStateToProps)(Tweets);
