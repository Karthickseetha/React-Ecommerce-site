import React from 'react';
import './contact-page.styles.scss'; 
import '../../styles/main.scss';
import Assistant from '../Assistant/assistant.component';

const ContactPage = () => {
  return (
<>
  <div className="hero">

    <h1>Contact-Us</h1>

  <form>

    <div className="row">

      <div className="input-group">

        <input type="text" id="name" required/>

        <label for="name"> Your Name</label>

      </div>

      <div className="input-group">

        <input type="text" id="number" required/>

        <label for="number"> Phone no</label>
      </div>

    </div>

    <div className="input-group">
       
      <input type="text" id="email" required/>

      <label for="email"> Email Id</label>

    </div>

    <div className="input-group">

      <textarea id="message" rows="8" required></textarea>

      <label for="message"> Your message</label>

    </div>

    <button type="submit">SUBMIT </button>

  </form>

</div>

 <Assistant/>



</>

  );
};

export default ContactPage;
