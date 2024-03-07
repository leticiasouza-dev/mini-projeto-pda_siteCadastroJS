document.addEventListener('DOMContentLoaded', function () {
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
   
    const divBotoes = document.createElement('div');
    divBotoes.className = 'botoes';

    for(const pessoa of cadastro){ // percorrendo meu objeto no array
        const divCadastro = document.createElement('div');
        divCadastro.className = 'cadastro';

        const divInfosCadastrados = document.createElement('div');
        divInfosCadastrados.className = 'informacoes-cadastrado';

        for(const propriedade in pessoa){ // percorrendo cada propriedade do meu array(objeto)
            const p = document.createElement('p');
            p.innerHTML = `${pessoa[propriedade]}`;
            divInfosCadastrados.appendChild(p);
        }

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = 'Editar';
        divBotoes.appendChild(botaoEditar);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        divBotoes.appendChild(botaoRemover);

        divCadastro.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
        divCadastro.appendChild(divBotoes);

        sessaoPrincipal.appendChild(divCadastro);
    }
    
    
    
    
}

const buttonAddNovo = document.getElementById('button-addNovo');
buttonAddNovo.addEventListener('click', function() {
    window.location.href = '../index.html';
})





// let divBotoes = document.createElement('div');
// divBotoes.className = 'botoes';

// divInfosCadastrados.appendChild(divInfosCadastrados);
// divBotoes.appendChild(divBotoes)


