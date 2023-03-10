import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import telephone from './telephone.png';
import email from './email.png';
import address from './marcador-de-posicion.png';


function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbzacpu', 'template_doyfvbq', form.current, 'Rh_dzfVVKjT3CiUZz')
      .then((result) => {
          console.log(result.text);
          alert('Su mensaje ha sido enviado a Martin');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact-section'>
      <h3>Contact Me</h3>
      <div className='separador'>
        <div className='divForm'>
        <form className='form' ref={form} onSubmit={sendEmail}>
          <label>Name: </label>
          <input placeholder='Your name' type="text" name="user_name" />
          <label>Email: </label>
          <input placeholder='Your@email' type="email" name="user_email" />
          <label>Message: </label>
          <textarea name='message' rows='6' placeholder='Please, leave a message here for Martin'/>
          <input id='submit' type="submit" value="Send" />
        </form>
        </div>
        <div className='divContacto'>
          <div className='informacion'>
            <h4>Contact information</h4>
            <p><img src={telephone}/>4493947674</p>
            <p><img src={email}/>martinmarescr@gmail.com</p>
            <p><img src={address}/>Aguascalientes</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default App;
