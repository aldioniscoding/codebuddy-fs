import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ProfileIcon, MessagesIcon, LinkedinIcon, GithubIcon } from '../../../assets/icons';

const Icons = [ <ProfileIcon />, <MessagesIcon />, <LinkedinIcon />, <GithubIcon />];

const ContactForm = ({user, handleSubmit}) => (
  <div className='card-col-info-contact'>
    <form onSubmit={ handleSubmit }>
      <Field component='textarea' name='message' /> 
      <button type='submit' />
    </form>
    <div className='contact-btns'>
      { Icons.map((icon, i) =>
         <div className='contact-btn' data-style={i}>{icon}</div>)}
    </div>
  </div>
);

export const CardContact = reduxForm({
  form: 'contactMessage'
})(ContactForm)