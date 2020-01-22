import React  from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { connect } from 'react-redux';
import TweetModal from '../TweetModal';
import Login from '../Login';
import Layout from '../Layout';
import SignUpModal from '../SignUpModal';

const App = (props) => {
  const { openedModal } = props;
  return (
    <div className="app">
      <Router>
        <Layout />
        {openedModal === 'tweet' && <TweetModal />}
      </Router>
      {openedModal === 'signUp' && <SignUpModal />}
      {openedModal === 'login' && <Login />}
    </div>
  );
};

const mapStateToProps = (state) => state.ui;
export default connect(mapStateToProps)(App);
