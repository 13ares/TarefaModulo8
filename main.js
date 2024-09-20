const form = document.querySelector('.form');
const nomeInput = document.getElementById('nome-contato');
const numeroInput = document.getElementById('number-contato');
const tabelaCorpo = document.querySelector('tbody');
const totalContatos = document.getElementById('numero-de-contatos');

let contadorContatos = 0;
let linhas = '';

function adicionarContato(event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const numero = numeroInput.value;

    if (linhas.includes(numero)) {
    alert(`O numero ${numero} já foi adicionado.`);
    return;
    }

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${numero}</td>`;
    linha += '</tr>';

    linhas += linha;

    tabelaCorpo.innerHTML = linhas;

    contadorContatos++;
    totalContatos.textContent = contadorContatos;

    nomeInput.value = '';
    numeroInput.value = '';
}
form.addEventListener('submit', adicionarContato);