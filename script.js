class Pessoa{ //  classe pessoa onde vai receber os valores do meu input
    constructor(nomeCompleto, celular, email, senha, dataNascimento){
        this.nomeCompleto = nomeCompleto;
        this.celular = celular;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }
}

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
        let dataNascimento = pegarElementosId('dataNascimento').value;

        if(verificarIdade(dataNascimento)){
            alert("Você não poderá seguir com o cadastro pois é menor der idade");
        } else{
            window.location.href = 'pages/listaUsuariosCadastrados.html';
        }
        
    }
}

function verificarIdade(dataNascimento){ // faz a verificação da idade do usuário
    let anoAtual = new Date().getFullYear();
    let anoNascimento = new Date(dataNascimento).getFullYear();
    let idadeUsuario = anoAtual - anoNascimento;
    
    return idadeUsuario < 18;
}

function pegarElementosId(nomeId){ // função para facilitar na hora de pegar elementos com Id
    return document.getElementById(nomeId);
}

let botaoCadastro = document.getElementById('cadastro');

botaoCadastro.addEventListener('click', function(evento){
    evento.preventDefault();

    let nomeCompleto = pegarElementosId('nomeCompleto').value;
    let celular = pegarElementosId('celular').value;
    let email = pegarElementosId('email').value;
    let senha = pegarElementosId('senha').value;
    let dataNascimento = pegarElementosId('dataNascimento').value;

    verificacaoCampos();

    let usuario = new Pessoa(nomeCompleto, celular, email, senha, dataNascimento);
})

