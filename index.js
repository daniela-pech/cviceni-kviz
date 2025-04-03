const otazkaElement = document.querySelector('.question');
const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';
otazkaElement.textContent = question;
const uzivatelOdpoved = prompt(question);

const answerTextElement = document.querySelector('.answer__text');
answerTextElement.textContent = uzivatelOdpoved;

const answerElement = document.querySelector('.answer');

if (uzivatelOdpoved === 'Bell') {
  answerElement.classList.add('answer--correct');
} else {
  answerElement.classList.add('answer-wrong');
}
