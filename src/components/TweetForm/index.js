import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { sendUserTweet } from '../../store/actions/userActions';
import Button from '../Button';
import TweetFormBody from './style';

const TweetForm = ({ onSendTweetSubmitClick }) => {
  const TweetScheme = Yup.object({
    message: Yup.string()
      .max(140, 'Must be 140 characters or less'),
  });

  return (
    <Formik
      initialValues={{
        message: '',
      }}
      validationSchema={TweetScheme}
      validate={(value) => {
        const errors = [];
        const hashtags = value.message.match(/#([a-zA-Z0-9А-Яа-я_]+)/g);
        if (!value.message) {
          errors.push('You must provide message');
        }
        if (!hashtags) {
          errors.push('You must provide hashtags');
        } else {
          if (hashtags.length > 5) {
            errors.push('There must be at most 5 hashtags');
          }
          if (hashtags.find((item) => item.length > 20)) {
            errors.push('Length of each hashtag does not exceed 20 characters');
          }
          const hashTagDuplicate = (i, index, arr) => arr.length !== Array
            .from(new Set(arr)).length;
          const checkHashTagDuplicate = (array) => array.some(hashTagDuplicate);
          if (checkHashTagDuplicate(hashtags)) errors.push('Hashtags must not repeat');
        }
        return errors.length ? {
          message: errors,
        } : undefined;
      }}
      onSubmit={(value, {resetForm}) => {
        const res = value.message.trim().split(' ');
        const message = res.filter((item) => item[0] !== '#').join(' ');
        const hashtags = value.message.match(/#([a-zA-Z0-9А-Яа-я_]+)/g);
        onSendTweetSubmitClick({ message, hashtags });
        resetForm({ message: '' });
      }}
    >
      {({
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <TweetFormBody>
          <form onSubmit={handleSubmit} className="tweet-form">
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="tweet-form__input"
              placeholder="Say something cool"
            />
            <div className="tweet-form__wrapper">
              {touched.message && errors.message ? errors.message.map((item) => (
                <div key={item} className="tweet-form__error">{item}</div>
              )) : null}
            </div>
            <Button
              type="submit"
              filled="true"
              className="tweet-form__button"
            >
              Submit
            </Button>
          </form>
        </TweetFormBody>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSendTweetSubmitClick: (tweet) => dispatch(sendUserTweet(tweet)),
});
export default connect(null, mapDispatchToProps)(TweetForm);
