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

        const botaoEditar = document.createElement('button')
        botaoEditar.textContent = 'Editar';
        divBotoes.appendChild(botaoEditar);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        divBotoes.appendChild(botaoRemover);



        sessaoPrincipal.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
        divInfosCadastrados.appendChild(divBotoes);

        
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


