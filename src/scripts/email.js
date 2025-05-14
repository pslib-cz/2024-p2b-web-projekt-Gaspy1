import emailjs from 'emailjs-com';

document.getElementById('buyButton').addEventListener('click', e => {
  const form = {
    email: document.getElementById('email').value
  };

  emailjs.send('service_xdhyitf', 'template_9r6ei2f', form)
});
