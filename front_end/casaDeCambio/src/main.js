const button = document.querySelector('button');
const textCoin = document.querySelector('input');
const guardaDados = document.querySelector('#dados')

button.addEventListener('click', funcionalidade)

const text = textCoin.value

function funcionalidade(text) {
  const obj = '';
  const url = `https://api.exchangerate.host/latest?base=${text}`
  return fetch(url)
    .then(resposta => resposta.json())
    .then(data => data.rates)
    .then(date => console.log(Object.entries(date)))
}
