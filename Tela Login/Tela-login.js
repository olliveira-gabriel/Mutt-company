function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}


function logar() {
    const usuario = document.getElementById('usuário_login').value;
    const senha = document.getElementById('senha_login').value;

    if (usuario && senha) {
        const login = JSON.parse(localStorage.getItem('BancoDeDados'));
        
        if (login && usuario === login.usuario && senha === login.senha) {
            window.location.href="../../tela-principal/Tela-princial.html";
        } else {
            mostrarModal('Usuário ou senha inválidos');
        }
    } else {
        mostrarModal("Usuário ou senha não foram digitados");
    }
}

function mostrarModal(mensagem) {
    document.getElementById('modalMessage').innerText = mensagem;
    document.getElementById('modalmsg').style.display = "block";
}

function fechar_modal_msg() {
    document.getElementById('modalmsg').style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById('modalmsg')) {
        fechar_modal_msg();
    }
}








