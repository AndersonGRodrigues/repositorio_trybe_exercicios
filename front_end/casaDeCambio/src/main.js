const button = document.querySelector('button');
const textCoin = document.querySelector('input');
const guardaDados = document.querySelector('#dados')

button.addEventListener('click', funcionalidade)

const url = (text) => {
  return `https://api.exchangerate.host/latest?base=${text}`
}
// const removeLi = () => {
//   const li = document.querySelector('li')
//   guardaDados.removeChild(li)
// }
// funcionalidade é chamada por button ao event de click, criar li e joga resultado da API dentro
function tratamentoApi() {
  // removeLi()
    return fetch(url(textCoin.value))
    .then(resposta => resposta.json())
    .then(data => data.rates)
    .then(date => Object.entries(date))
}

function createLi(data) {
  data.map((data) => {
    const li = document.createElement('li');
    li.innerHTML = `${data[0]} ${data[1]}`;
    guardaDados.appendChild(li);
  })

}

function funcionalidade() {
  tratamentoApi()
    .then((data) => createLi(data))
}
