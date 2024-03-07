class Pessoa{ //  classe pessoa onde vai receber os valores do meu input
    constructor(nomeCompleto, celular, email, senha, dataNascimento){
        this.nomeCompleto = nomeCompleto;
        this.celular = celular;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }
}

let cadastro = [];

function verificacaoCampos(){ // faz a verificação dos campos(inputs)
    let inputs = document.getElementsByTagName('input');
    let camposNaoPreenchidos = false;

    for(let i = 1; i < inputs.length; i++){

        if(inputs[i].value.trim() == ''){
            camposNaoPreenchidos = true;
            break;
        }
    }

    if(camposNaoPreenchidos){
        alert("Preencha os campos");
    } else{
        let senha = pegarElementosId('senha').value;
        let dataNascimento = pegarElementosId('dataNascimento').value;

        if(verificarSenha(senha) === false){
            alert("A senha deve conter 8 caracteres");
        } else if(verificarIdade(dataNascimento)){
            alert("Você não poderá seguir com o cadastro pois é menor der idade");

            let input = document.getElementsByTagName('input');
            for(let i = 0; i < input.length; i++){ // limpando os inputs quando o usuário for menor de idade
                input[i].value = '';
            }

        } else{
            alert("Cadastro efetuado com sucesso");
           
            window.location.href = 'pages/listaFuncionariosCadastrados.html';
        }
        
    }
}

function verificarIdade(dataNascimento){ // faz a verificação da idade do usuário
    let anoAtual = new Date().getFullYear();
    let anoNascimento = new Date(dataNascimento).getFullYear();
    let idadeUsuario = anoAtual - anoNascimento;
    
    return idadeUsuario < 18;
}

function verificarSenha(senha){
    if(senha.length < 8){
        return false;
    } else{
        return true;
    }
    
}

function pegarElementosId(nomeId){ // função para facilitar na hora de pegar elementos com Id
    return document.getElementById(nomeId);
}

document.addEventListener('DOMContentLoaded', function () {
    let cadastroJson = localStorage.getItem('cadastro');
    if (cadastroJson) {
        cadastro = JSON.parse(cadastroJson);
    }
});

let botaoCadastro = document.getElementById('cadastro');

botaoCadastro.addEventListener('click', function(evento){
    evento.preventDefault();

    let nomeCompleto = pegarElementosId('nomeCompleto').value;
    let celular = pegarElementosId('celular').value;
    let email = pegarElementosId('email').value;
    let senha = pegarElementosId('senha').value;
    let dataNascimento = pegarElementosId('dataNascimento').value;

    verificacaoCampos();

  
    const usuario = new Pessoa(nomeCompleto, celular, email, senha, dataNascimento);
    cadastro.push(usuario);

    localStorage.setItem('cadastro', JSON.stringify(cadastro));
})

