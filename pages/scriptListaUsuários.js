document.addEventListener('DOMContentLoaded', function () { // evento para recuperar o array
    // Tentar recuperar o array de cadastros do localStorage
    let cadastroJson = localStorage.getItem('cadastro');

    // Se houver um array no localStorage, use-o, caso contrário, crie um novo array
    cadastro = cadastroJson ? JSON.parse(cadastroJson) : [];

    // Mostrar a lista de cadastros
    mostrarCadastro(cadastro);
});


function mostrarCadastro(cadastro){
    const sessaoPrincipal = document.getElementById('sessao-cadastros');
    sessaoPrincipal.innerHTML = ''
   
    for(const pessoa of cadastro){ // percorrendo meu objeto no array

        const divInfosCadastrados = document.createElement('div');
        divInfosCadastrados.className = 'informacoes-cadastrado';

        const divBotoes = document.createElement('div');
        divBotoes.className = 'botoes';

        for(const propriedade in pessoa){ // percorrendo cada propriedade do meu array(objeto)
            const p = document.createElement('p');
            p.innerHTML = `${propriedade}:${pessoa[propriedade]}`;
            divInfosCadastrados.appendChild(p);
        }

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        divBotoes.appendChild(botaoEditar);

        botaoEditar.addEventListener('click', function() {
            // Remover os elementos existentes antes de criar novos
            divBotoes.innerHTML = '';

            for (const propriedade in pessoa) {
                const inputEditar = document.createElement('input');
                inputEditar.type = 'text';
                inputEditar.value = pessoa[propriedade];
                inputEditar.placeholder = `Digite a alteração para ${propriedade}`;

                divBotoes.appendChild(inputEditar);
            }

            const botaoSalvar = document.createElement('button');
            botaoSalvar.textContent = 'Salvar';

            botaoSalvar.addEventListener('click', function(){
                // Atualizar as propriedades desejadas no objeto pessoa
                for (let i = 0; i < divBotoes.children.length - 1; i++) {
                    const propriedade = Object.keys(pessoa)[i];
                    pessoa[propriedade] = divBotoes.children[i].value;
                }

                // Atualizar o localStorage após a edição
                localStorage.setItem('cadastro', JSON.stringify(cadastro));

                // Atualizar a exibição dos cadastros
                mostrarCadastro(cadastro);
            });

            divBotoes.appendChild(botaoSalvar);
        });

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        divBotoes.appendChild(botaoRemover);

        botaoRemover.addEventListener('click', () => {removerCadastro(pessoa)});

        sessaoPrincipal.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
        divInfosCadastrados.appendChild(divBotoes);

    }

}

function removerCadastro(cadastroRemovido){ // função para remover cadastro
    cadastro = cadastro.filter(pessoa => pessoa !== cadastroRemovido);
    mostrarCadastro(cadastro);

    // Atualizar o localStorage após a retirada
    localStorage.setItem('cadastro', JSON.stringify(cadastro));
}

const buttonAddNovo = document.getElementById('button-addNovo');
buttonAddNovo.addEventListener('click', function() {
    window.location.href = '../index.html';
})



