let usuarioJson = localStorage.getItem('usuario');
let usuario = JSON.parse(usuarioJson);

mostrarCadastro();

function mostrarCadastro(){
    const sessaoPrincipal = document.getElementById('sessao-cadastros');

    let divInfosCadastrados = document.createElement('div');
    divInfosCadastrados.className = 'informacoes-cadastrado';

    for(const cadastro in usuario){ // percorrendo cada propriedade do meu array
        const p = document.createElement('p');
        p.innerHTML = `${usuario[cadastro]}`;
        divInfosCadastrados.appendChild(p);
    }

    sessaoPrincipal.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
}
    





// let divBotoes = document.createElement('div');
// divBotoes.className = 'botoes';

// divInfosCadastrados.appendChild(divInfosCadastrados);
// divBotoes.appendChild(divBotoes)


