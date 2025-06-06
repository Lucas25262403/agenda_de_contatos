const form = document.getElementById('formulario');
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');

linhas = ''; // variável para armazenar as linhas da tabela	

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;	
    linha += `</tr>`;

    linhas += linha; // concatenar a linha criada com as linhas existentes

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // adicionar a linha ao corpo da tabela

    inputNome.value = ''; // limpar o input de nome
    inputTelefone.value = ''; // limpar o input de email
})  
