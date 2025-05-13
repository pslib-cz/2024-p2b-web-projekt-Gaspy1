import emailjs from 'emailjs-com';

document.getElementById('buyButton').addEventListener('click', function () {
  const templateParams = {
    name: 'Uživatel', // Můžete nahradit dynamickými daty
    message: 'Někdo chce nakoupit produkty z vašeho webu.',
  };

  emailjs
    .send('service_xdhyitf', 'template_9r6ei2f', templateParams, '-oiaFJC2eOtlPZ449')
    .then(
      function (response) {
        alert('E-mail byl úspěšně odeslán!');
      },
      function (error) {
        alert('Došlo k chybě při odesílání e-mailu: ' + error.text);
      }
    );
});