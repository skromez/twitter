import React, { Component } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { connect } from 'react-redux';
import TweetModal from '../TweetModal';
import Login from '../Login';
import Layout from '../Layout';
import SignUpModal from '../SignUpModal';
import { getUserInfo } from '../../store/actions/userActions';

class App extends Component {

  componentDidMount() {
    const hasToken = localStorage.getItem('jwt');
    const { getUserData } = this.props;
    if (hasToken) {
      getUserData();
    }
  }

  render() {
    const { showLoginModal, showSignUpModal } = this.props;
    return (
      <div className="app">
        <Router>
          <Layout />
          {false && <TweetModal />}
        </Router>
        {showSignUpModal && <SignUpModal />}
        {showLoginModal && <Login />}
      </div>
    );
  }
};

const mapStateToProps = ({ ui }) => ({
  showLoginModal: ui.modal === 'login',
  showSignUpModal: ui.modal === 'signUp',
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
