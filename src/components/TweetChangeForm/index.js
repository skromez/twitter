import React from 'react';
import { Formik } from 'formik';
import Button from '../Button';

const TweetChangeForm = ({ text }) => {
  return (
    <Formik
      initialValues={{
        message: text,
      }}
      validate={(value) => {
        const errors = [];
        const hashtags = value.message.match(/#([a-zA-Z0-9А-Яа-я_]+)/g);
        if (value.message.length > 140) {
          errors.push('Message should not be more than 140 characters');
        }
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
      onSubmit={({ message }, { resetForm }) => {
        console.log(message);
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
        <form
          className="tweet__form form"
          onSubmit={handleSubmit}
        >
          <textarea
            className="form__input"
            id="message"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <div className="form__wrapper">
            {touched.message && errors.message ? errors.message.map((item) => (
              <div key={item} className="form__error">{item}</div>
            )) : null}
          </div>
          <Button type="submit" className="form__button" filled="true">Save</Button>
        </form>
      )}
    </Formik>
  );
};

export default TweetChangeForm;
