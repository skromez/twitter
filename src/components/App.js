import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Layout from './Layout';
import SignUpModal from './SignUpModal';
import { getUserInfo } from '../store/actions/userActions';

class App extends Component {
  componentDidMount() {
    const hasSessionToken = sessionStorage.getItem('jwt');
    const { getUserData } = this.props;
    if (hasSessionToken) {
      getUserData();
    } else {
      localStorage.getItem('jwt');
      getUserData();
    }
  }

  render() {
    const { showLoginModal, showSignUpModal } = this.props;
    return (
      <div className="app">
        <Router>
          <Layout />
        </Router>
        {showSignUpModal && <SignUpModal />}
        {showLoginModal && <Login />}
      </div>
    );
  }
}

const mapStateToProps = ({ ui, user, tweets }) => ({
  showLoginModal: ui.modal === 'login',
  showSignUpModal: ui.modal === 'signUp',
  tweets: tweets.tweets.items,
  dataLoading: user.dataLoading,
  isLoggedIn: Boolean(user.info.id),
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
