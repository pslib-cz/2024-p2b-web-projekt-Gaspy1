import emailjs from 'emailjs-com';

emailjs.init('-oiaFJC2eOtlPZ449');
document.getElementById('buyButton').addEventListener('click', e => {
  const form = {
    email: document.getElementById('email').value,
    jmeno: document.getElementById('jmeno').value,
  };
  emailjs.send('service_xdhyitf', 'template_9r6ei2f', {
    email: form.email,
    jmeno: form.jmeno,
  })
});
