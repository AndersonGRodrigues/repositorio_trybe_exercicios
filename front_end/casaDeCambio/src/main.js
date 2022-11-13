const button = document.querySelector('button');
const textCoin = document.querySelector('input');
const guardaDados = document.querySelector('#dados')

button.addEventListener('click', funcionalidade)

const url = (text) => {
  return `https://api.exchangerate.host/latest?base=${text}`
}

function funcionalidade() {
  return fetch(url(textCoin.value))
    .then(resposta => resposta.json())
    .then(data => data.rates)
    .then(date => Object.entries(date))
    .then(dateArray => dateArray.map( data => {
      const li = document.createElement('li')
      li.innerHTML = `${data}`;
      guardaDados.appendChild(li)
    }))
}

