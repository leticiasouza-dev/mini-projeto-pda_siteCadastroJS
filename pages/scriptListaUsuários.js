let usuarioJson = localStorage.getItem('usuario');
let usuario = JSON.parse(usuarioJson);

console.log(usuario.celular);