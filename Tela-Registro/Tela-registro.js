function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}


function  Registro_usuario(){
    
    let usuario =  document.getElementById('User').value;

    let email = document.getElementById('Email').value;

    let senha =  document.getElementById('Senha').value;

    let confirmar_senha =  document.getElementById('Confirmar_senha').value;

    let checkbox = document.getElementById('termos_de_contrato');

    if(usuario && email && senha && confirmar_senha){
        
        if(checkbox.checked){
            
            if(senha === confirmar_senha){
                const obj = {
                    usuario: usuario,
                    senha: senha
                    };
                    
                    localStorage.setItem('BancoDeDados',JSON.stringify(obj))
                    
                    setTimeout(() => {
                        window.location.href = "../Tela Login/Tela-Login.html";
                    }, 2000);
                } else {
                    mostrarModal('As senhas sao diferentes');
                }
            } else {
                mostrarModal('Por favor, aceite os termos');
            }
        } else {
            mostrarModal('Preencha todos os campos');
    }
}

function mostrarModal(mensagem) {
    document.getElementById('modalMessage').innerText = mensagem;

    document.getElementById('modalmsg').style.display = "block"; 
}

function fechar_modal() {
    document.getElementById('modal_termos').style.display = "none";
}

function fechar_modal_msg() {
    document.getElementById('modalmsg').style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById('modal_termos')) {
        fechar_modal();
    }
    if (event.target === document.getElementById('modalmsg')) {
        fechar_modal_msg();
    }
}


const modal = document.getElementById('modal_termos');

function Abrir_Termos(){

    modal.style.display = "block";

}

function fechar_modal(){

    modal.style.display = "none";

}

window.onclick = function(event) {

    if (event.target === modal) {
        fechar_modal();
    }
}
