let cadastroJson = localStorage.getItem('cadastro');
let cadastro = JSON.parse(cadastroJson);


mostrarCadastro();



function mostrarCadastro(){
    const sessaoPrincipal = document.getElementById('sessao-cadastros');

    const divInfosCadastrados = document.createElement('div');
    divInfosCadastrados.className = 'informacoes-cadastrado';

    const divBotoes = document.createElement('div');
    divBotoes.className = 'botoes';

    for(const pessoa of cadastro){ // percorrendo meu objeto no array
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
    }
    sessaoPrincipal.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
    sessaoPrincipal.appendChild(divBotoes);
    
    
    
}

const buttonAddNovo = document.getElementById('button-addNovo');
buttonAddNovo.addEventListener('click', function() {
    window.location.href = '../index.html';
})





// let divBotoes = document.createElement('div');
// divBotoes.className = 'botoes';

// divInfosCadastrados.appendChild(divInfosCadastrados);
// divBotoes.appendChild(divBotoes)


