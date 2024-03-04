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
let inputs = document.getElementsByTagName('input')

botaoCadastro.addEventListener('click', function(evento){
    evento.preventDefault();
    if(isNaN(inputs)){
        alert("Preencha os campos");
    } else{
        window.location.href = 'pages/listaUsuariosCadastrados.html';
    }

    
})

