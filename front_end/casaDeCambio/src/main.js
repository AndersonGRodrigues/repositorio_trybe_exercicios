const button = document.querySelector('button');
const textCoin = document.querySelector('input');
const guardaDados = document.querySelector('#dados');
const clear = document.querySelectorAll('#clear')

button.addEventListener('click', funcionalidade);

const url = (text) => {
  return `https://api.exchangerate.host/latest?base=${text}`
}
//busca a Api e faz seu tratamento de string para objeto de objeto para Array
function tratamentoApi() {
    return fetch(url(textCoin.value))
    .then(resposta => resposta.json())
    .then(data => data.rates)
    .then(date => Object.entries(date))
}
// crear as li dentro de guarda dados'
function createLi(data) {
  data.map(data => {
    const li = document.createElement('li');
    li.innerHTML = `${data[0]} - ${data[1]}`;
    guardaDados.appendChild(li);
  })
}
// funcionalidade é chamada por button ao event de click.
function funcionalidade() {
  guardaDados.innerHTML="";
  tratamentoApi()
    .then(data => {
      createLi(data)
      guardaDados.removeChild();
    })
}
