class Pessoa{
    constructor(nomeCompleto, celular, email, senha, dataNascimento){
        this.nomeCompleto = nomeCompleto;
        this.celular = celular;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }
}

let usuario = new Pessoa();

let botaoCadastro = document.getElementById('cadastro');
let inputs = document.getElementsByTagName('input');

botaoCadastro.addEventListener('click', function(evento){
    evento.preventDefault();

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
        window.location.href = 'pages/listaUsuariosCadastrados.html';
    }

    
})

