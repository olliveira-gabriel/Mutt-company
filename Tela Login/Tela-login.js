function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}


function logar(){

    const usuario = document.getElementById('usuário_login').value;
    const senha = document.getElementById('senha_login').value;

    if(usuario && senha){
        const obj = {
            usuario: usuario,
            senha: senha
        };
        const login = JSON.parse(localStorage.getItem('BancoDeDados'));
        if(obj.usuario === login.usuario && obj.password === login.password){
            window.location.href="../tela-principal/Tela-princial.html";
        }
        else{
            alert('Usuário ou senha inválidos')
        }
    }
    else{
        alert("usuário não digitou o nome ou a senha")
    }








}
