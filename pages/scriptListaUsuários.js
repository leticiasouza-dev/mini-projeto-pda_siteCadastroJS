let cadastroJson = localStorage.getItem('cadastro');
console.log(cadastroJson);
let cadastro = JSON.parse(cadastroJson);
console.log(cadastro);

mostrarCadastro();

function mostrarCadastro(){
    const sessaoPrincipal = document.getElementById('sessao-cadastros');

    let divInfosCadastrados = document.createElement('div');
    divInfosCadastrados.className = 'informacoes-cadastrado';

    for(const pessoa of cadastro){ // percorrendo meu objeto no array
        for(const propriedade in pessoa){ // percorrendo cada propriedade do meu array(objeto)
            const p = document.createElement('p');
            p.innerHTML = `${pessoa[propriedade]}`;
            divInfosCadastrados.appendChild(p);
        }
    }
    

    sessaoPrincipal.appendChild(divInfosCadastrados); // adicionando a minha sessão principal minha div com os paragrafos
}

    





// let divBotoes = document.createElement('div');
// divBotoes.className = 'botoes';

// divInfosCadastrados.appendChild(divInfosCadastrados);
// divBotoes.appendChild(divBotoes)


