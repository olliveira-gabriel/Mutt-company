function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela-Login/Tela-Login.html";
}

function logar(){
    let usuario_login = document.getElementById('usuário_login').value;
    let senha_login = document.getElementById('senha_login').value;
    let BancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    if(BancoDeDados[usuario_login] && BancoDeDados[usuario_login].password === senha_login){

        window.location.href="Tela-princial.html";
        
    }else{
            alert('Nome de usuário ou senha incorretos.')
    }




}