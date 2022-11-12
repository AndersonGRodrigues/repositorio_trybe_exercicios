const button = document.querySelector('button');
const textCoin = document.querySelector('input');

button.addEventListener('click', funcionalidade)

function funcionalidade() {
    const url = 'https://api.exchangerate.host/latest?base=USD'
    fetch(url)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data.rates)
        })
}
funcionalidade()
